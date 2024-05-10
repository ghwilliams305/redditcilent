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
    constructor({selftext, title, thumbnail, created, id, author}, comments) {
        this.title = title;
        this.content = selftext;
        this.image = thumbnail;
        this._date = created * 1000;
        this.id = id;
        this.author = author;
        
        this.comments = comments.map(comment => ({
            author: comment.author,
            content: comment.body,
            _time: comment.created * 1000,
            
            get time() {
                let timeDiff = Date.now() - this._time;
        
                const convertions = [
                    [1000, 'ms'], 
                    [60, 's'], 
                    [60, 'mins'], 
                    [24, 'hr'], 
                    [7, 'days'], 
                    [4, 'weeks'], 
                    [12, 'months'], 
                    [10, 'years']
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
            [60, 'mins'], 
            [24, 'hr'], 
            [7, 'days'], 
            [4, 'weeks'], 
            [12, 'months'], 
            [10, 'years']
        ];

        return convertor(convertions, timeDiff);
    }
}


async function getArticles(id) {
    const link = 'https://www.reddit.com/.json';

    try {
        const response = await fetch(link);
        const responseObj = await response.json();
        const posts = responseObj.data.children.map(child => child.data).find(data => data.id === id);

        const linkTwo = `https://www.reddit.com${posts.permalink}.json`;

        try {
            const responseTwo = await fetch(linkTwo);
            const responseObjTwo = await responseTwo.json();
            
            const postData = responseObjTwo[0].data.children[0].data;
            const comments = responseObjTwo[1].data.children.map(child => child.data);

            return new Article(postData, comments);
        } catch(e) {
            return e;
        }
    } catch(e) {
        return e;
    }
}

export default getArticles