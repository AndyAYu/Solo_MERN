import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import MainSplash from './components/MainSplash';
import TaskManager from './components/TaskManager';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<MainSplash/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/taskmanager' element={<TaskManager/>} />
          <Route path='/logout' element={<Logout/>} />
        </Routes>
      </Router>
    );
  }
}

export default App;