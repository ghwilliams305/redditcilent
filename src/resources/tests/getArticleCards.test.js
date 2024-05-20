import getArticleCards, { filterCards, getSearchResults } from "../js/getArticleCards";

test('Test getArticleCards always resolves', async () => {
    const sampleObject = await getArticleCards();

    expect(Array.isArray(sampleObject)).toEqual(true);
    expect(typeof sampleObject[0]).toEqual('boolean');
});

jest.setTimeout(10000)

test('Test getSearchResults always resolves', async () => {
    const sampleQuestion = ['how to beast', 'fahg887581-=pl', '/F//S/S', 'chicken', 'porn', 'm*n', 'geot \m', undefined, ''];
    
    for(let question of sampleQuestion){
        const sampleObject = await getSearchResults(question);

        expect(Array.isArray(sampleObject)).toEqual(true);
        expect(typeof sampleObject[0]).toEqual('boolean');
    }
});

test('Test filterCards always returns a list', async () => {
    const sampleQuestion = ['how to beast', 'fahg887581-=pl', '/F//S/S', 'chicken', 'porn', 'm*n', 'geot \m', undefined, ''];

    const sampleCards = await getArticleCards()
    
    for(let question of sampleQuestion){
        const sampleObject = filterCards(sampleCards[1], question);

        expect(Array.isArray(sampleObject)).toEqual(true);
    }
});