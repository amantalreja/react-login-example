import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer'
class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <NavBar />
        <h2>Home Page</h2>
        <Footer></Footer>
      </div>
    );
  }
}

export default HomePage;
