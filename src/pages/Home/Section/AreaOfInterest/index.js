import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import './areaOfInterest.css';

const AreaOfInterest = () => {
  return (
    <section id="area-of-interest" style={{ backgroundColor: '#eee' }}>
      <Container>
        <Row className="services">
          <Col lg={12}>
            <h2 className="heading">Area of Interest</h2>
            <div className="row">
              <Col md={4}>
                <div className="box">
                  <div className="icon">
                    <i className="fa fa-desktop" />
                  </div>
                  <h4>Machine Learning</h4>
                  <p className="areaofinterest-text">
                    Fifth abundantly made Give sixth hath. Cattle creature I be
                    don't them.
                  </p>
                </div>
              </Col>
              <Col md={4}>
                <div className="box">
                  <div className="icon">
                    <i className="fa fa-lightbulb-o" />
                  </div>
                  <h4>AGI (Artificial General Intelligence)</h4>
                  <p className="areaofinterest-text">
                    Advantage old had otherwise sincerity dependent additions.
                    It in adapted natural.
                  </p>
                </div>
              </Col>
              <Col md={4}>
                <div className="box">
                  <div className="icon">
                    <i className="fa fa-globe" />
                  </div>
                  <h4>Web/Mobile App Development</h4>
                  <p className="areaofinterest-text">
                    Am terminated it excellence invitation projection as. She
                    graceful shy.
                  </p>
                </div>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AreaOfInterest;
