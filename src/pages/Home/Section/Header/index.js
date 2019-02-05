import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import classNames from 'classnames';

import logo from '../../../../assets/img/giwoo-lee-logo.png';

class Header extends Component {
  constructor(props) {
    super(props);

    this.navElem = React.createRef();

    this.state = {
      isSticky: false,
      isNavbarShow: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', event => {
      let supportPageOffset = window.pageXOffset !== undefined;
      let isCSS1Compat = (document.compatMode || '') === 'CSS1Compat';
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
          : document.body.scrollTop,
      };

      if (scroll.y > this.navElem.current.offsetTop) {
        this.setState({
          isSticky: true,
        });
      } else {
        this.setState({
          isSticky: false,
        });
      }
    });
  }

  toggleNavbar = () => {
    this.setState({
      isNavbarShow: this.state.isNavbarShow ? false : true,
    });
  };

  render() {
    let navClasses = classNames({
      navbar: true,
      'navbar-expand-lg': true,
      sticky: this.state.isSticky,
    });

    let navbarCollapse = classNames({
      collapse: true,
      'navbar-collapse': true,
      show: this.state.isNavbarShow,
    });

    return (
      <header ref={this.navElem} className="header">
        <nav className={navClasses}>
          <Container>
            <a href="#intro" className="navbar-brand link-scroll">
              <img
                src={logo}
                alt=""
                className="img-logo img-fluid"
                style={{ width: '150px', padding: '10px 0' }}
              />
            </a>
            <button
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              className="navbar-toggler navbar-toggler-right collapsed"
              onClick={() => this.toggleNavbar()}
            >
              <i className="fa fa-bars" />
            </button>
            <div id="navbarSupportedContent" className={navbarCollapse}>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item" onClick={() => this.toggleNavbar()}>
                  <a href="#about" className="nav-link link-scroll">
                    About
                  </a>
                </li>
                <li className="nav-item" onClick={() => this.toggleNavbar()}>
                  <a href="#area-of-interest" className="nav-link link-scroll">
                    Area of Interest
                  </a>
                </li>
                <li className="nav-item" onClick={() => this.toggleNavbar()}>
                  <a href="#projects" className="nav-link link-scroll">
                    Projects
                  </a>
                </li>
                <li className="nav-item" onClick={() => this.toggleNavbar()}>
                  <a href="#mission" className="nav-link link-scroll">
                    Mission
                  </a>
                </li>
                <li className="nav-item" onClick={() => this.toggleNavbar()}>
                  <a href="#contact" className="nav-link link-scroll">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </Container>
        </nav>
      </header>
    );
  }
}

export default Header;
