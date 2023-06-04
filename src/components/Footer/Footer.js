import React, { Component } from 'react';
import './Footer.css';
class Footer extends Component {
  render() {
    
    return (
      <div id="footer">
        <div><img src={require('./logo.png')} /></div>
        <div><img src={require('./logo.png')} /></div>
        <div><img src={require('./logo.png')} /></div>
        <div><img src={require('./logo.png')} /></div>
      </div>
    );
  }
}

export default Footer;
