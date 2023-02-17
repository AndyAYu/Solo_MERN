const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('695d50b87ff846f6afff0a3e53aa2b1b');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them

export default function News() {
    
    newsapi.v2.topHeadlines({
        sources: 'bbc-news,the-verge',
        q: 'bitcoin',
        category: 'business',
        language: 'en',
        country: 'us'
    }).then(response => {
        console.log(response);
        return response;
    });
};

