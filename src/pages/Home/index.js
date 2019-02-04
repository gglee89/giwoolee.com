import React, { PureComponent } from 'react';

// Sections
import Intro from './Section/Intro';

class Home extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Intro />
      </React.Fragment>
    );
  }
}

export default Home;
