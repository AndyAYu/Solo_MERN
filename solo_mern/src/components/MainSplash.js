import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
// import BookCard from './BookCard';
// import newsJson from './news.json';
import KommunicateChat from './Chat';
import News from './News';


// const apikey = "695d50b87ff846f6afff0a3e53aa2b1b"

class MainSplash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
        };
    // this.newsFetch = this.newsFetch.bind(this);
    // this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    // this.newsFetch();
  };

  
  



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
              </Link> */}
              
              {/* <Link to="/login" className="btn btn-outline-info float-right">
                Login
              </Link> */}
              <nav className="navbar navbar-expand-lg navbar-light bg-darkgrey">
                {/* <a className="navbar-brand" href="#">Home</a> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <a className="nav-link" href="google-maps">Google Maps <span className="sr-only">(current)</span></a>
                    </li>
                    {/* <li className="nav-item">
                      <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" href="#">Disabled</a>
                    </li> */}
                  </ul>
                </div>
              </nav>
              <br />
              <br />
              <hr />
            </div>
          </div>
          <News />
              <KommunicateChat className="float-bottom-left bottom: 20px; right: 20px;"/>
        </div>
        
      </div>
    );
  }
}

export default MainSplash;