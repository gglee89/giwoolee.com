import React, { PureComponent } from 'react';
import './App.css';
import './Theme.css';

// Images
import backgrounds from './shared/backgrounds';

// Pages
import Home from './pages/Home';

class App extends PureComponent {
  state = {
    bg: 'bg1',
  };

  componentDidMount() {
    setInterval(this.setBg, 10000);
  }

  setBg = () => {
    let bgNumber = (Math.random() * 6).toFixed(0);

    this.setState(prevState => ({
      bg: `bg${bgNumber}`,
    }));
  };

  render() {
    console.log('');
    return (
      <div
        className="App"
        style={{
          backgroundImage: `url(${backgrounds[this.state.bg]})`,
        }}
      >
        <Home />
      </div>
    );
  }
}

export default App;
