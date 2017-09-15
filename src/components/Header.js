import React, { Component } from 'react';
import portrait from '../portrait.jpg';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>
          Code by Jan
        </h1>
        <img
          className="portrait" 
          src={portrait}
          alt="" />
        <h3>
          Here are some of my favorite projects so far
        </h3>
      </div>
    );
  }
}

export default Header;
