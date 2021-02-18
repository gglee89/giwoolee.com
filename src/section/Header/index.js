import React from 'react';
import { Container } from 'react-bootstrap';
import classNames from 'classnames';
import moment from 'moment';

// Assets
import icons from '../../shared/icons';

// Styles
import './header.css';

const Header = () => {
  let navClasses = classNames({
    navbar: true,
    'navbar-expand-lg': true,
    sticky: false,
  });

  let currentTime = moment().format('ddd LT');

  return (
    <header className="header">
      <nav className={navClasses}>
        <Container>
          <div className="header-left">
            <img className="brand-logo" src={icons['apple']} alt="apple" />
            <div>Gustavo Lee</div>
          </div>
          <div className="header-right">
            <a
              href="https://github.com/gglee89/gglee89.github.io"
              rel="noopener noreferrer"
              target="_blank"
              className="header-right-item"
            >
              <img src={icons['github']} alt="github" />
              <div>GitHub</div>
            </a>
            <div>{currentTime}</div>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
