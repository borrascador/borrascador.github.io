import React, { Component } from 'react';
import './App.css';
import portrait from './portrait.jpg'
import Header from './components/Header.js';
import ProjectList from './components/ProjectList.js';

class App extends Component {
  render() {
    return (
      <div className="user-page">
        <Header />
        <ProjectList />
      </div>
    );
  }
}

export default App;
