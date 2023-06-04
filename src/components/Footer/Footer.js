import React, { Component } from 'react';
import './Footer.css';

class NavBar extends Component {
  render() {
    return (
      <div id="footer">
        <h1>footer</h1>
        <img src={require('./logo.png')} />
      </div>
    );
  }
}

export default NavBar;
