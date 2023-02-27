import React, { Component } from 'react';
import '../App.css';
import { Link, NavLink } from 'react-router-dom';
import Session from './Session';
import Logout from  './Logout';
import KommunicateChat from './Chat';
import News from './News';
import beehive from '../images/beehive.png';

// const apikey = "695d50b87ff846f6afff0a3e53aa2b1b"

class MainSplash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
        };
    this.isLoggedIn = this.isLoggedIn.bind(this);
    // this.newsFetch = this.newsFetch.bind(this);
    // this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    this.isLoggedIn();
    // this.newsFetch();
  };

  isLoggedIn() {
    const authToken = localStorage.getItem('token'); 
    const isLoggedIn = authToken !== null;
    if (isLoggedIn) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div className="mainSplash">
        <div className="container-fluid">
            <div className="text-center">
              <br />
              <Link href="/"><a className="display-4 text-light">The| | Co| |ector</a>
              <img src={beehive}></img>
              </Link>
            </div>

            <div className="col-md">
              {/* <Link to="/create-book" className="btn btn-outline-warning float-right">
                + Add New Book
              </Link> */}
              <div>
                {this.isLoggedIn() ? <div className="text-center">Welcome fellow collector!</div> : 
                <Link to="/login" className="btn btn-warning float-right">
                Login
              </Link>}
              </div>
              <nav className="navbar navbar-expand-lg navbar-light bg-darkgrey">
                {/* <a className="navbar-brand" href="#">Home</a> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse float-left" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <a className="nav-link" href="taskmanager">TaskManager <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Pricing</a>
                    </li>
                    {/* <li className="nav-item">
                      <a className="nav-link disabled" href="#">Disabled</a>
                    </li> */}
                  </ul>
                </div>
                {this.isLoggedIn() && <NavLink to={'#'}>{Logout}</NavLink>}
              </nav>
              <br />
              <br />
              <hr />
            </div>
          </div>
          <News />
              <KommunicateChat className="float-bottom-left bottom: 20px; right: 20px;"/>
        </div>
    );
  }
}

export default MainSplash;