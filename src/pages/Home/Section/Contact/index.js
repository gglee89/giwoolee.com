import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="heading">Contact</h2>
            <Row>
              <p className="social" style={{ width: '100%' }}>
                <a href="#" title="" className="facebook">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#" title="" className="twitter">
                  <i className="fa fa-twitter" />
                </a>
                <a href="#" title="" className="gplus">
                  <i className="fa fa-google-plus" />
                </a>
                <a href="#" title="" className="instagram">
                  <i className="fa fa-instagram" />
                </a>
                <a href="#" title="" className="email">
                  <i className="fa fa-envelope" />
                </a>
              </p>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
