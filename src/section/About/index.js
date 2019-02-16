import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../shared.css';
import './about.css';
import classNames from 'classnames';

// Images
import reactLogo from '../../assets/img/react-js-logo-min.png';
import pythonLogo from '../../assets/img/python-logo-generic.svg';
import pytorchLogo from '../../assets/img/pytorch-logo-min.png';
import rLogo from '../../assets/img/r-logo.svg';
import mongoDBLogo from '../../assets/img/mongodb-logo-min.png';
import awsLogo from '../../assets/img/aws-logo-min.png';
import gcpLogo from '../../assets/img/gcp-logo-min.png';
import personalPicture from '../../assets/img/personal-picture-bew.jpg';
import personalPicture2 from '../../assets/img/personal-picture-bew-2.jpg';

const SKill = ({ title, percentage, description, type }) => {
  let progressClass = classNames({
    'progress-bar': true,
    'bg-success': type === 1,
    'bg-info': type === 2,
    'bg-warning': type === 3,
    'progress-bar-striped': true,
    'progress-bar-animated': true,
  });

  return (
    <Col lg={6} className="skill">
      <div className="skill-container">
        <div className="skill-title">{title}</div>
        {/* <div className="skill-percentage">
          <div className="progress">
            <div
              className={progressClass}
              role="progressbar"
              aria-valuenow={percentage}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: `${percentage}%` }}
            >
              {percentage}%
            </div>
          </div>
        </div> */}
      </div>
      <div className="skill-description">
        <div class="icon">
          <i className="fa fa-plus-circle" />
        </div>
        <div className="skill-description-text">{description}</div>
      </div>
    </Col>
  );
};

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showFirstPicture: false,
    };

    this.timer = null;
  }

  /* componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        showFirstPicture: this.state.showFirstPicture ? false : true,
      });
    }, 5000);
  }

  componentWillUnmount() {
    this.timer = null;
  } */

  render() {
    return (
      <section id="about">
        <Container>
          <Row>
            <Col lg={6}>
              <h2 className="heading">About</h2>
              <p className="lead">Currently...</p>
              <p className="about-text">
                <code># giwoogustavolee @ Giwoo-MacBook-Pro in ~</code>
                <span>$</span> A Machine Learning & Web Development Enthusiast.
                A PhD candidate in Computer Science at the University of
                Mississippi under{' '}
                <a className="link" href="https://olemiss.edu/people/dwilkins">
                  Professor Dr.Wilkins.
                </a>
              </p>
              <p className="lead">So far</p>
              <p className="about-text">
                <code># giwoogustavolee @ Giwoo-MacBook-Pro in ~</code>
                <span>$</span> 5+ years advancing in the IT industry. Shaped
                products as a Data Engineer with BI, with Mainframes (batch
                processing), and Web/Mobile development. Experienced in
                developing internal web platforms for the entertainment and
                financial industries and also with B2C customer facing
                applications. Actively contributed on UI/UX, software
                specification, and project management in parallel with web
                development.
                <span className="blink-cursor" />
              </p>
            </Col>
            <Col lg={5}>
              <p>
                <img
                  src={
                    this.state.showFirstPicture
                      ? personalPicture
                      : personalPicture2
                  }
                  alt=""
                  className="img-load img-fluid rounded-circle"
                />
              </p>
            </Col>
          </Row>
          {/* <Row>
            <Col lg={12} style={{ textAlign: 'left' }}>
              <p className="lead">Main Stacks</p>
              <div className="company-logoes">
                <img src={reactLogo} className="lead-image" />
                <img src={pythonLogo} className="lead-image" />
                <img src={pytorchLogo} className="lead-image" />
                <img src={rLogo} className="lead-image" />
                <img src={mongoDBLogo} className="lead-image" />
                <img src={awsLogo} className="lead-image" />
                <img src={gcpLogo} className="lead-image" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12} style={{ textAlign: 'left' }}>
              <p className="lead">Main Skills</p>

              <p className="lead-sub">ML</p>
              <Row className="skill-section">
                <SKill
                  title="Python"
                  percentage={60}
                  type={1}
                  description="1+ year of professional experience with Flask/Django."
                />
                <SKill
                  title="Numpy"
                  percentage={60}
                  type={1}
                  description="1+ years with academic and personal projects."
                />
                <SKill
                  title="Pytorch"
                  percentage={50}
                  type={1}
                  description='1+ years with academic and personal projects plus awarded the "Facebook PyTorch scholarship."'
                />
              </Row>

              <p className="lead-sub">Backend</p>
              <Row className="skill-section">
                <SKill
                  title="MongoDB"
                  percentage={75}
                  type={2}
                  description="2+ years wo"
                />
                <SKill title="PostgreSQL" percentage={75} type={2} />
                <SKill title="Firebase" percentage={75} type={2} />
              </Row>

              <p className="lead-sub">Frontend</p>
              <Row className="skill-section">
                <SKill title="Javascript" percentage={75} type={3} />
                <SKill title="ReactJS" percentage={85} type={3} />
                <SKill title="Redux" percentage={95} type={3} />
              </Row>
            </Col>
          </Row> */}
        </Container>
      </section>
    );
  }
}

export default About;
