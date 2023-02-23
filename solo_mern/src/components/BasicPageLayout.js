import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import KommunicateChat from './Chat';


// const apikey = "695d50b87ff846f6afff0a3e53aa2b1b"

class BasicPageLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
        };
  }
  componentDidMount() {
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
              <nav className="navbar navbar-expand-lg navbar-light bg-darkgrey">
                {/* <a className="navbar-brand" href="#">Home</a> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                  </ul>
                </div>
              </nav>
              <br />
              <br />
              <hr />
            </div>
          </div>
              <KommunicateChat className="float-bottom-left bottom: 20px; right: 20px;"/>
        </div>
        
      </div>
    );
  }
}

export default BasicPageLayout;