import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const Mission = () => {
  return (
    <section id="mission" className="section-inverse">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="heading">Mission</h2>
            <Row>
              <Col mg={6}>
                <p>
                  <span style={{ textDecoration: 'underline' }}>
                    Never stop learning.
                  </span>{' '}
                  Always try to understand one's view prior to formulating an
                  output. Live by Bayes's Theorem applied to approaching one's
                  understanding of the unknown source event by measuring the
                  outcome of subsequent events. Putting it simply, is to expose
                  one's self to new experiences in order to find why the first
                  one even took place.
                </p>
                <p>
                  <span
                    style={{
                      textDecoration: 'underline',
                    }}
                  >
                    Rebecca Murphy's quote that resonates with many selves
                    including my me:
                  </span>
                  "For me, I don't want to get a job; I want to get invited to
                  great jobs. I don't want to go to work; I want to go to work
                  with talented people. And I don't want to be satisfied with
                  knowing enough to do the work that needed to be done
                  yesterday; I want to know how to do the work that will need to
                  get done tomorrow.""
                </p>
              </Col>
              <Col mg={6}>
                <p>
                  To incessantly respect others regardless of the prior. And
                  from my favorite book: The Alchemist. The most famous quote to
                  reference is: "When you want something; all the universe
                  conspire in helping you to achieve it." And thus, one's prime
                  goal (as referring to my own) is to speak up as to be listened
                  and to be acknowledged.
                </p>
                <p>
                  Lastly, in a more technical note, is to be part of the Machine
                  Learning movement. Helping others with state-of-the-art tools
                  that can bring intelligent solutions to unforseen
                  circumstances.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Mission;
