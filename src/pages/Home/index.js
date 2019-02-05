import React, { PureComponent } from 'react';

// Sections
import Intro from './Section/Intro';
import Header from './Section/Header';
import About from './Section/About';
import Portfolio from './Section/Portfolio';
import Mission from './Section/Mission';
import Contact from './Section/Contact';

class Home extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Intro />
        <Header />
        <About />
        <Portfolio />
        <Mission />
        <Contact />
      </React.Fragment>
    );
  }
}

export default Home;
