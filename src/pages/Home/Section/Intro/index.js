import React from 'react';
import logo from './logo.svg';
import { Container, Col, Row } from 'react-bootstrap';
import './intro.css';

const Intro = () => {
  return (
    <section className="intro bg-container">
      <div className="overlay" />
      <div className="content">
        <Container>
          <Row>
            <Col lg="8" md="12" mx="auto" className="column">
              <img src={logo} className="logo" alt="logo" />
              <p className="italic">Hi, hello, nice to meet you!</p>
              <h1 className="text">
                <code>src/GiwooLee.js</code> is under construction.
              </h1>
              <p className="italic">
                Here you'll find Gustavo's portfolio, and couple of his
                projects.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Intro;
