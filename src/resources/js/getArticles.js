const convertor = (convertionTable, rawNum) => {
    let num = rawNum;

    convertionTable.forEach(converter => {
        if(typeof num === 'number'){
            if((num / converter[0]) > 1) {
                num /= converter[0];
            } else {
                num = `${Math.round(num)} ${converter[1]}`;
            }
        }
    });

    return num;
}

class Article {
    constructor({selftext, title, post_hint, created, id, author, url, media}, comments) {
        this.title = title;
        this.content = selftext;
        this._date = created * 1000;
        this.id = id;
        this.author = author;

        if(post_hint == 'hosted:video') {
            this.image = media.reddit_video.fallback_url;
        } else if(post_hint == 'image') {
            this.image = url;
        } else {
            this.image = false;
        }
        
        this.comments = comments.map(comment => ({
            author: comment.author,
            content: comment.body,
            _time: comment.created * 1000,
            
            get time() {
                let timeDiff = Date.now() - this._time;
        
                const convertions = [
                    [1000, 'ms'], 
                    [60, 's'], 
                    [60, 'min'], 
                    [24, 'hr'], 
                    [7, 'd'], 
                    [4, 'w'], 
                    [12, 'm'], 
                    [10, 'y']
                ];

                return convertor(convertions, timeDiff);
            }
        }));
        
    }

    get date() {
        let timeDiff = Date.now() - this._date
        
        const convertions = [
            [1000, 'ms'], 
            [60, 's'], 
            [60, 'min'], 
            [24, 'hr'], 
            [7, 'd'], 
            [4, 'w'], 
            [12, 'm'], 
            [10, 'y']
        ];

        return convertor(convertions, timeDiff);
    }
}


async function getArticles(id) {
    const permalink = id.replaceAll('+', '/')
    const link = `https://www.reddit.com${permalink}.json`;

    try {
        const response = await fetch(link);
        if(!response.ok) {
            return [false, `${response.status}: ${response.statusText ? response.statusText : 'no status text'}`];
        }

        const responseObj = await response.json();
            
        const postData = responseObj[0].data.children[0].data;
        const comments = responseObj[1].data.children.map(child => child.data);

        return [true, new Article(postData, comments)];
    } catch(e) {
        return [false, `Error receieving post data - ${e}`];
    }
}

export default getArticles;