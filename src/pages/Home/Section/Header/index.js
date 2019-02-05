import React from 'react';
import { Container, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <header className="header">
      <Nav
        activeKey="/home"
        onSelect={selectedKey => console.log('selectedKey', selectedKey)}
      >
        <Container>
          <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Current</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Contact
            </Nav.Link>
          </Nav.Item>
        </Container>
      </Nav>
    </header>
  );
};

export default Header;
