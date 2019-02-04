import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './home.css';

class Home extends PureComponent {
  render() {
    return (
      <div className="container">
        <div className="overlay" />
        <img src={logo} className="logo" alt="logo" />
        <p className="text">
          <code>src/GiwooLee.js</code> is under construction.
        </p>
        <a
          className="link"
          href="https://www.linkedin.com/in/leegiwoo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check my linkedin
        </a>
      </div>
    );
  }
}

export default Home;
