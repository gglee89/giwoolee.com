import React, { Component } from "react";
import { Container } from "react-bootstrap";
import classNames from "classnames";
import moment from "moment";

// Assets
import icons from "../../shared/icons";

// Styles
import "./header.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.navElem = React.createRef();

    this.state = {
      isSticky: false,
      isNavbarShow: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", event => {
      let supportPageOffset = window.pageXOffset !== undefined;
      let isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
      let scroll = {
        x: supportPageOffset
          ? window.pageXOffset
          : isCSS1Compat
          ? document.documentElement.scrollLeft
          : document.body.scrollLeft,
        y: supportPageOffset
          ? window.pageYOffset
          : isCSS1Compat
          ? document.documentElement.scrollTop
          : document.body.scrollTop
      };
    });
  }

  toggleNavbar = () => {
    this.setState({
      isNavbarShow: this.state.isNavbarShow ? false : true
    });
  };

  render() {
    let navClasses = classNames({
      navbar: true,
      "navbar-expand-lg": true,
      sticky: this.state.isSticky
    });

    let currentTime = moment().format("ddd LT");

    return (
      <header ref={this.navElem} className="header">
        <nav className={navClasses}>
          <Container>
            <div className="header-left">
              <img className="brand-logo" src={icons["apple"]} alt="apple" />
              <div>Gustavo Lee</div>
            </div>
            <div className="header-right">
              <a
                href="https://github.com/gglee89/gglee89.github.io"
                rel="noopener noreferrer"
                target="_blank"
                className="header-right-item"
              >
                <img src={icons["github"]} alt="github" />
                <div>GitHub</div>
              </a>
              <div>{currentTime}</div>
            </div>
          </Container>
        </nav>
      </header>
    );
  }
}

export default Header;
