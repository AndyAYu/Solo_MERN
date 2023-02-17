import React, { Component, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';
import NewsAPI from './News/News.js';
import FlippableCard from './Card.js';


const apikey = "695d50b87ff846f6afff0a3e53aa2b1b"

class ShowBookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: {},
    };
    this.newsFetch = this.newsFetch.bind(this);
  }

  componentDidMount() {
  };

// fetch news api
newsFetch() {
  fetch('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=695d50b87ff846f6afff0a3e53aa2b1b')
    .then(response => response.json())
    .then(data => this.setState({ news: data }))
    .catch(err => console.log(err));
    return this.state.news;
} 

  render() {
    return (
      <div className="ShowBookList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Tech || Collector</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-book" className="btn btn-outline-warning float-right">
                + Add New Book
              </Link>
              <Link to="/signup" className="btn btn-outline-info float-right">
                Signup
              </Link>
              <Link to="/login" className="btn btn-outline-info float-right">
                Login
              </Link>
              <nav className="navbar navbar-expand-lg navbar-light bg-darkgrey">
                <a className="navbar-brand" href="#">Home</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <a className="nav-link" href="mentors">Decks <span className="sr-only">(current)</span></a>
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
            <FlippableCard />
          </div>
        </div>
      </div>
    );
  }
}

export default ShowBookList;