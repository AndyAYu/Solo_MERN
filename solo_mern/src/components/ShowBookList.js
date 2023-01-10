import React, { Component } from 'react';
import '../App.css';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';
import newsFetch from './News/News';

const apikey = "695d50b87ff846f6afff0a3e53aa2b1b"

class ShowBookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: {},
    };
  }

  componentDidMount() {
  };


  render() {
    const books = this.state.books;
    console.log("PrintBook: " + books);
    let cardList;
    // let buttonList;

    if(!books) {
      cardList = "there is no book record!";
    } else {
      cardList = books.map((book, k) =>
        <BookCard book={book} key={k} />
      );
    }
    // buttonList = (Object.keys(this.state))

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
              <nav class="navbar navbar-expand-lg navbar-light bg-darkgrey">
                <a class="navbar-brand" href="#">Home</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item active">
                      <a class="nav-link" href="mentors">Decks <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link disabled" href="#">Disabled</a>
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
                {cardList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowBookList;