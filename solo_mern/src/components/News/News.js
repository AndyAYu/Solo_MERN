const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('695d50b87ff846f6afff0a3e53aa2b1b');

export default function newsFetch () {
    newsapi.v2.topHeadlines({
    sources: 'bbc-news, the-verge',
    q: 'software, crypto',
    category: 'tech',
    language: 'en',
    country: 'us'
}).then(response => {
    console.log(response);
})
}