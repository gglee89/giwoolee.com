import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const Portfolio = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="heading">Portfolio</h2>
            <p>
              Put your portfolio or gallery images here for example. Able an
              hope of body. Any nay shyness article matters own removal nothing
              his forming. Gay own additions education satisfied the perpetual.
              If he cause manor happy. Without farther she exposed saw man led.
              Along on happy could cease green oh.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <div className="box">
              <a
                href="img/portfolio-1.jpg"
                data-lightbox="image-1"
                data-title="Some footer information"
                className="has-border"
              >
                <img
                  src="https://d19m59y37dris4.cloudfront.net/blackandwhite/2-0-0/img/portfolio-1.jpg"
                  alt="image"
                  className="img-fluid"
                />
              </a>
            </div>
          </Col>
          <Col md={4}>
            <div className="box">
              <a
                href="img/portfolio-2.jpg"
                data-lightbox="image-1"
                data-title="Some footer information"
                className="has-border"
              >
                <img
                  src="https://d19m59y37dris4.cloudfront.net/blackandwhite/2-0-0/img/portfolio-2.jpg"
                  alt="image"
                  className="img-fluid"
                />
              </a>
            </div>
          </Col>
          <Col md={4}>
            <div className="box">
              <a
                href="img/portfolio-3.jpg"
                data-lightbox="image-1"
                data-title="Some footer information"
                className="has-border"
              >
                <img
                  src="https://d19m59y37dris4.cloudfront.net/blackandwhite/2-0-0/img/portfolio-3.jpg"
                  alt="image"
                  className="img-fluid"
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
