import React from 'react';
import { Container } from 'react-bootstrap';

import logo from '../../../../assets/img/giwoo-lee-logo.png';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg">
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
          >
            <i className="fa fa-bars" />
          </button>
          <div id="navbarSupportedContent" className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="#intro" className="nav-link link-scroll active">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link link-scroll">
                  About{' '}
                </a>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link link-scroll">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="#portfolio" className="nav-link link-scroll">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a href="#text" className="nav-link link-scroll">
                  Text
                </a>
              </li>
              <li className="nav-item">
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
};

export default Header;
