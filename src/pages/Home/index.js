import React, { PureComponent } from 'react';

// Sections
import Intro from '../../section/Intro';
import Header from '../../section/Header';
import Preferences from '../../section/Preferences';
import Footer from '../../section/Footer';

class Home extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Intro text="portfolio/giwoolee.js" />
        <Header />
        <Preferences />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
