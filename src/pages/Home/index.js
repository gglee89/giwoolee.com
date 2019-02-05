import React, { PureComponent } from 'react';

// Sections
import Intro from './Section/Intro';
import Header from './Section/Header';
import About from './Section/About';

class Home extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Intro />
        <Header />
        <About />
      </React.Fragment>
    );
  }
}

export default Home;
