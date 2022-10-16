import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';

class ShowBookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: [],
      sets: [],
      types: [],
      factions: [],
      qualities: [],
      races: [],
    };
  }

  componentDidMount() {

  // const options = {
  //   method: 'GET',
  //   url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/info',
  //   headers: {
  //     'X-RapidAPI-Key': 'a17e0f9684msh88dfd90d6f6341ap1810eajsn3bf7c5c17948',
  //     'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
  //   }
  // };

  // axios.request(options)
  // .then(function (response){console.log(response.data);})
  // .catch(function (error) {console.error(error);});
  };


  render() {
    const books = this.state.books;
    console.log("PrintBook: " + books);
    let cardList;
    let buttonList;

    if(!books) {
      cardList = "there is no book record!";
    } else {
      cardList = books.map((book, k) =>
        <BookCard book={book} key={k} />
      );
    }
    buttonList = (Object.keys(this.state))

    return (
      <div className="ShowBookList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Log || Log</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-book" className="btn btn-outline-warning float-right">
                + Add New Book
              </Link>
              <nav class="navbar navbar-expand-lg navbar-light bg-darkgrey">
                <a class="navbar-brand" href="#">Home</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item active">
                      <a class="nav-link" href="mentors">Mentors <span class="sr-only">(current)</span></a>
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