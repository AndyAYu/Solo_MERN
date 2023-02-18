import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import CreateBook from './components/CreateBook';
import MainSplash from './components/MainSplash';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';
// import Google from './components/Google';
import Login from './components/Login';
import Signup from './components/Signup';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<MainSplash/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/create-book' element={<CreateBook/>} />
          <Route path='/edit-book/:id' element={<UpdateBookInfo/>} />
          <Route path='/show-book/:id' element={<ShowBookDetails/>} />
          {/* <Route path='/google' element={<Google/>} /> */}
        </Routes>
      </Router>
    );
  }
}

export default App;