import React, { PureComponent } from 'react';

// Sections
import Intro from '../../section/Intro';
import Header from '../../section/Header';
import About from '../../section/About';
import AreaOfInterest from '../../section/AreaOfInterest';
import Preferences from '../../section/Preferences';
import Mission from '../../section/Mission';
import Contact from '../../section/Contact';
import Footer from '../../section/Footer';

class Home extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Intro text="portfolio/giwoolee.js" />
        <Header />
        <About />
        <AreaOfInterest />
        <Preferences />
        <Mission />
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
