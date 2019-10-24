import React from 'react';
import portrait from '../portrait.jpg';

const Header = () => (
  <div className="header">
    <h1>
      <a href="https://github.com/borrascador">
        Code by Jan
      </a>  
    </h1>
    <img
      className="portrait"
      src={portrait}
      alt="" />
  </div>
);

export default Header;
