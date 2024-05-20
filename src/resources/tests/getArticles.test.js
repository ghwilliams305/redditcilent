import getArticleCards from "../js/getArticleCards";
import getArticles from "../js/getArticles";

test('Test getArticles always resolves', async () => {
    const sampleCards = await getArticleCards();
    
    if(sampleCards[0]) {
        const sampleObject = await getArticles(sampleCards[1][0].id);

        expect(Array.isArray(sampleObject)).toEqual(true);
        expect(typeof sampleObject[0]).toEqual('boolean');
    }
});