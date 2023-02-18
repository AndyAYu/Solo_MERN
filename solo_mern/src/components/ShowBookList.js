import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
// import BookCard from './BookCard';
import newsJson from './news.json';


// const apikey = "695d50b87ff846f6afff0a3e53aa2b1b"

class ShowBookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: {newsJson},
    };
    // this.newsFetch = this.newsFetch.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    // this.newsFetch();
  };

  scrollToTop() {
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
      in place of 'smooth' */
    });
  };
  
// fetch news api
// newsFetch() {
//   fetch('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=695d50b87ff846f6afff0a3e53aa2b1b')
//   .then(response => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error('Network response was not ok.');
//   })
//   .then(data => {
//     this.setState({ news: data });
//   })
//   .catch(error => {
//     console.error(error);
//   })};


  render() {
    return (
      <div className="mainSplash">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <a href="localhost:3000/"><h6 className="display-4 text-center text-light">The| | Co| |ector</h6></a>
            </div>

            <div className="col-md-11">
              {/* <Link to="/create-book" className="btn btn-outline-warning float-right">
                + Add New Book
              </Link>
              <Link to="/signup" className="btn btn-outline-info float-right">
                Signup
              </Link>
              <Link to="/login" className="btn btn-outline-info float-right">
                Login
              </Link> */}
              <nav className="navbar navbar-expand-lg navbar-light bg-darkgrey">
                <a className="navbar-brand" href="#">Home</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <a className="nav-link" href="google-maps">Google Maps <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                  </ul>
                </div>
              </nav>
              <br />
              <br />
              <hr />
            </div>
          </div>
          <div className="list">
            {this.state.news['newsJson'].articles && this.state.news['newsJson'].articles.map((article, i) => (
              <div className="card" key={i}>
                <a className="card-body hover-overlay"  target="_blank" href={article.url}>
                  <img className="img-responsive" width="100%"src={article.urlToImage}></img>
                  <h5 className="w-100 h-50 text-dark">{article.title}</h5>
                  <p className="text-dark">{article.author}</p>
                  <p className="text-dark">{article.description}</p>
                </a>
              </div>
            ))}
              <button onClick={this.scrollToTop} className="btn btn-outline-info float-right">
                Back to Top
              </button>
          </div>
        </div>
        
      </div>
    );
  }
}

export default ShowBookList;