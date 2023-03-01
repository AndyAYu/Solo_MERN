import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import techNews from './News/techNews.json';
import healthNews from './News/healthNews.json';
import entertainmentNews from './News/entertainmentNews.json';
import '../style/news.css';

function News(props) {
    const [news, setNews] = useState(techNews);
    // const [news, setNews] = useState('technology');


    // fetch news api
    function newsFetch() {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${news}&apiKey=695d50b87ff846f6afff0a3e53aa2b1b`)
    .then(response => {
        if (response.ok) {
        return response.json();
        }
        throw new Error('Network response was not ok.');
    })
    .then(data => {
        this.setState({ news: data });
    })
    .catch(error => {
        console.error(error);
    })};

    //scroll to top of page
    function scrollToTop() {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
    });
  };
//   console.log(news.articles)
  //map news articles
    const articlesMap = news.articles.map((article, i) => (
    <div className="card " key={i}>
        <a className="card-body hover-overlay"  target="_blank" rel="noreferrer" href={article.url}>
            <img className="img-responsive" alt="" width="100%"src={article.urlToImage}></img>
            <h5 className="w-100 h-50 text-dark">{article.title}</h5>
            <p className="text-dark">{article.author}</p>
            <p className="text-dark">{article.description}</p>
        </a>
    </div>
    ));




    return (
        <div className="list">
            <div className="dropdown pl-5">
                <button className="btn btn-outline-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Category
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" onClick={() => setNews(techNews)}>Technology</a>
                    <a className="dropdown-item" onClick={() => setNews(healthNews)}>Health</a>
                    <a className="dropdown-item" onClick={() => setNews(entertainmentNews)}>Entertainment</a>
                </div>
            </div>
            {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                
            </div> */}
            <div className="articles">{articlesMap}</div>
            <div>
              <button onClick={scrollToTop} className="btn btn-outline-info">
                Back to Top
              </button>
            </div>
          </div>
    )
}


export default News;


