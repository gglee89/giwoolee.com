import React, { PureComponent } from 'react';

// Sections
import Intro from './Section/Intro';
import Header from './Section/Header';
import About from './Section/About';
import AreaOfInterest from './Section/AreaOfInterest';
import Projects from './Section/Projects';
import Mission from './Section/Mission';
import Contact from './Section/Contact';
import Footer from './Section/Footer';

class Home extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Intro />
        <Header />
        <About />
        <AreaOfInterest />
        <Projects />
        <Mission />
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
