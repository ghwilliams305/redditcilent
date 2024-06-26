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

class ArticleCard {
    constructor({title, ups, post_hint, created, author, num_comments, permalink, url}) {
        this.title = title;
        this._ups = ups;
        if(post_hint === 'image') {
            this.image = url;
        }
        this._date = created * 1000;
        this.id = permalink.replaceAll('/', '+');
        this.author = author;
        this._commentsNum = num_comments;
    }

    get ups() {
        const convertions = [
            [(10 ** 3), ''], 
            [(10 ** 6), 'K'], 
            [(10 ** 9), 'M'], 
            [(10 ** 12), 'B']
        ];

        return convertor(convertions, this._ups);
    }

    get commentsNum() {
        const convertions = [
            [(10 ** 3), ''], 
            [(10 ** 6), 'K'], 
            [(10 ** 9), 'M'], 
            [(10 ** 12), 'B']
        ];

        return convertor(convertions, this._commentsNum);
    }

    get date() {
        let timeDiff = Date.now() - this._date
        
        const convertions = [
            [1000, 'ms'], 
            [60, 's'], 
            [60, 'mins'], 
            [24, 'hr'], 
            [7, 'd'], 
            [4, 'w'], 
            [12, 'm'], 
            [10, 'y']
        ];

        return convertor(convertions, timeDiff);
    }
}

export default async function getArticleCards() {
    const link = 'https://www.reddit.com/.json';

    try {
        const response = await fetch(link);
        if(!response.ok) {
            return [false, `${response.status}: ${response.statusText ? response.statusText : 'no status text'}`];
        }

        const responseObj = await response.json();
        const posts = responseObj.data.children.map(child => child.data);

        return [true, posts.map(post => new ArticleCard(post))];
    } catch(e) {
        return [false, `Error receieving cards - ${e}`];
    }
}

export async function getSearchResults(searchquestion) {
    const link = `https://www.reddit.com/search/.json?q=${searchquestion}`;

    try {
        const response = await fetch(link);
        if(!response.ok) {
            return [false, `${response.status}: ${response.statusText ? response.statusText : 'no status text'}`];
        }

        const responseObj = await response.json();
        const posts = responseObj.data.children.map(child => child.data);
        
        return [true, posts.map(post => new ArticleCard(post))];
    } catch(e) {
        return [false, `Error receieving search results - ${e}`];
    }
}

export function filterCards(listOfObjects, searchQuestion) {
    const lowerCaseSearchQuestion = searchQuestion ? searchQuestion.toLowerCase() : '';

    try {
        return listOfObjects.filter(({title, author}) => (
            title.toLowerCase().includes(lowerCaseSearchQuestion) || 
            author.toLowerCase().includes(lowerCaseSearchQuestion)
        ));
    } catch(e) {
        return [];
    }
}