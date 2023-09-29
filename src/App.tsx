import React, { PureComponent } from "react";
import "./App.css";
import "./Theme.css";

// Images
import backgrounds from "./shared/backgrounds";

// Pages
import Home from "./pages/Home";

class App extends PureComponent {
  state = {
    bg: "bg1",
  };

  render() {
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
