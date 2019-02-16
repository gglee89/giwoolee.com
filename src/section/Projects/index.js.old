import React from 'react';
import { connect } from 'react-redux';
import { Container, Col, Row } from 'react-bootstrap';

// Actions
import * as modalActions from '../../actions/modal';

// Styles
import './projects.css';

// Images
// SAP
import sapHanaHDBCSI from '../../assets/img/sap-labs-hdbcsi.jpeg';
import sapHanaLogo from '../../assets/img/sap-hana-logo.png';

// Rocky
import rockyApp from '../../assets/img/rocky/rocky-app-min.png';
import rockyLogo from '../../assets/img/rocky/rocky-logo-2-min.png';
import rockyAppHome from '../../assets/img/rocky/home-min.jpeg';
import rockyAppHabits from '../../assets/img/rocky/habits-select-min.jpeg';
import rockyAppDashboard from '../../assets/img/rocky/dashboard-min.jpeg';
import rockyAppCategory from '../../assets/img/rocky/category-select-min.jpeg';

// Sccoaching
import mgApp from '../../assets/img/sccoaching/marshall-goldsmith-logo.jpg';
import sccoachingLogo from '../../assets/img/sccoaching/sccoaching-logo.jpg';

// Proof Suite
import proofLogo from '../../assets/img/proofsuite/proof-avocado-logo.jpg';
import proofInstitutionsScreen from '../../assets/img/proofsuite/proof-institutions-screen.png';
import proofMainScreen from '../../assets/img/proofsuite/proof-main-screen.png';
import proofMainScreen2 from '../../assets/img/proofsuite/proof-main-screen-2.jpg';
import proofMultipleCharts from '../../assets/img/proofsuite/proof-multiple-charts.png';

const Projects = props => {
  const { openModal } = props;

  return (
    <section id="projects">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="heading">Projects</h2>
            <p>
              Few major projects worked on within the last 5 years. The
              relevancy of these works lies on the author's complete
              authenticity in terms of its end-to-end implementation; in other
              terms WYSIWYG. The mesh of the Project Management role combined
              with Software Engineering duties made consistent throughout most
              of the journey; even though one's not having accredited
              experience.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="box-wrapper">
            <div className="box">
              <img
                src={sapHanaHDBCSI}
                alt="image"
                className="img-fluid"
                onClick={() =>
                  openModal(
                    'SAP Hana',
                    sapHanaLogo,
                    [sapHanaHDBCSI],
                    'HDBCSI (Hana DB Crash Similarity Inspector)',
                    'jQuery, OpenUI5, Python, XSJS, HanaDB',
                    "In charge of implementing QA (Quality Assurance)'s new task optimizer with SAP's UI5 (http://openui5.org/). Intuitive UI/UX added to smooth interactibility, made possible for the synergy between System tester and Developers to flourish."
                  )
                }
              />
            </div>
            <div>SAP Labs Korea</div>
          </Col>
          <Col md={4} className="box-wrapper">
            <div className="box">
              <img
                src={rockyApp}
                alt="image"
                className="img-fluid"
                onClick={() =>
                  openModal(
                    'Rocky Robots',
                    rockyLogo,
                    [
                      rockyAppHome,
                      rockyAppHabits,
                      rockyAppDashboard,
                      rockyAppCategory,
                    ],
                    'Rocky (Android & iOS)',
                    'React Native, Redux, Material UI, Firebase, NodeJS (Express)',
                    "Interace built to challenge the status-quo of AGI (Artificial General Intelligence) with a robust Conversation AI app. React Native's hybrid compatibility, makes assembling an interface for both iOS and android super fun!"
                  )
                }
              />
            </div>
            <div>Rocky App</div>
          </Col>
          <Col md={4} className="box-wrapper">
            <div className="box">
              <img
                src={mgApp}
                alt="image"
                className="img-fluid"
                onClick={() =>
                  openModal(
                    'Marshall Goldsmith',
                    sccoachingLogo,
                    [],
                    'LGPR - Leadership Growth Progress Review',
                    'PHP, Laravel, MySQL, Browserify, SASS, Bootstrap',
                    "Assessment tool for executive coach leaders. The coach checks in with the stakeholders approximately every quarter via a short internet based survey, to measure the stakeholders' perceptions on how they see the leader’s effectiveness has been changing in the two leadership growth areas. This Leadership Growth Progress Review is reported back to the leader (and the sponsor) so that (s)he can gauge how his/her leadership change efforts have been perceived by the stakeholders. This survey also plays a key role in guaranteeing and measuring leadership growth for the leader and the organization."
                  )
                }
              />
            </div>
            <div>Marshall Goldsmith SCCoaching</div>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="box-wrapper">
            <div className="box">
              <img
                src={proofLogo}
                alt="image"
                className="img-fluid"
                onClick={() =>
                  openModal(
                    'SAP Hana',
                    proofLogo,
                    [
                      proofInstitutionsScreen,
                      proofMainScreen,
                      proofMainScreen2,
                      proofMultipleCharts,
                    ],
                    'HDBCSI (Hana DB Crash Similarity Inspector)',
                    'jQuery, OpenUI5, Python, XSJS, HanaDB',
                    "In charge of implementing QA (Quality Assurance)'s new task optimizer with SAP's UI5 (http://openui5.org/). Intuitive UI/UX added to smooth interactibility, made possible for the synergy between System tester and Developers to flourish."
                  )
                }
              />
            </div>
            <div>SAP Labs Korea</div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const actionCreators = {
  openModal: modalActions.openModal,
};

export default connect(
  null,
  actionCreators
)(Projects);
