import React, { PureComponent } from 'react';

// Sections
import Header from '../../section/Header';
import Preferences from '../../section/Preferences';

class Home extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Preferences />
      </React.Fragment>
    );
  }
}

export default Home;
