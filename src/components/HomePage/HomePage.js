import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer'
import Question from '../Question/Question'
class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <NavBar />
        <h2>Home Page</h2>
        <Question></Question>
        <Footer></Footer>
      </div>
    );
  }
}

export default HomePage;
