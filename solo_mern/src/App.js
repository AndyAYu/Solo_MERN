import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import MainSplash from './components/MainSplash';
import TaskManager from './components/TaskManager';
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
          <Route path='/taskmanager' element={<TaskManager/>} />
        </Routes>
      </Router>
    );
  }
}

export default App;