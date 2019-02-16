import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#111' }}>
      <Container>
        <Row className="copyright">
          <Col md={6}>
            <p className="mb-md-0 text-center text-md-left">©2019 Giwoo Lee</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
