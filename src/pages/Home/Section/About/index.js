import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg={6}>
            <h2 className="heading">About Me</h2>
            <p className="lead">This can be an about section.</p>
            <p>
              Impossible considered invitation him men instrument saw celebrated
              unpleasant. Put rest and must set kind next many near nay. He
              exquisite continued explained middleton am. Voice hours young
              woody has she think equal. Estate moment he at on wonder at season
              little. Six garden result summer set family esteem nay estate. End
              admiration mrs unreserved discovered comparison especially
              invitation.{' '}
            </p>
            <p>
              Delightful unreserved impossible few estimating men favourable see
              entreaties. She propriety immediate was improving. He or entrance
              humoured likewise moderate. Much nor game son say feel. Fat make
              met can must form into gate. Me we offending prevailed discovery.{' '}
            </p>
          </Col>
          <Col lg={5}>
            <p>
              <img
                src="https://d19m59y37dris4.cloudfront.net/blackandwhite/2-0-0/img/japan-mountains.jpg"
                alt=""
                className="img-fluid rounded-circle"
              />
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
