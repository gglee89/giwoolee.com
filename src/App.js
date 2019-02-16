import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import './App.css';
import './Theme.css';
import { Row, Col } from 'react-bootstrap';

// Actions
import * as modalActions from './actions/modal';

// Selectors
import * as modalSelectors from './reducers/modal';

// Pages
import Home from './pages/Home';

class App extends Component {
  render() {
    const { closeModal, isModalOpen, modalContent } = this.props;

    let modalClasses = classNames({
      modal: true,
      fade: true,
      show: isModalOpen,
    });

    const {
      title,
      primaryLogo,
      images,
      projectName,
      technologyStack,
      textContent,
    } = modalContent;

    return (
      <div className="App">
        <Home />
        <div className={modalClasses}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="title-wrapper">
                  <h4 className="heading">{title}</h4>
                  <div className="close icon" onClick={() => closeModal()}>
                    <i className="fa fa-close" />
                  </div>
                </div>
                <Row>
                  <Col lg={3} className="wrapper">
                    <div className="sub-title">Company</div>
                    <img className="modal-primary-logo" src={primaryLogo} />
                  </Col>
                  <Col lg={5} className="wrapper">
                    <div className="sub-title">Project Name</div>
                    <p className="text-content">{projectName}</p>
                  </Col>
                  <Col lg={4} className="wrapper">
                    <div className="sub-title">Technology Stack</div>
                    <p className="text-content">{technologyStack}</p>
                  </Col>
                </Row>
                <div className="wrapper">
                  <Row>
                    <Col lg={6}>
                      <div className="sub-title">Images</div>
                      <div className="images-container">
                        {images && images.length > 0 ? (
                          images.map((image, key) => {
                            return (
                              <img
                                key={key}
                                className="modal-image"
                                src={image}
                              />
                            );
                          })
                        ) : (
                          <div style={{ textAlign: 'left' }}>
                            No Images Available
                          </div>
                        )}
                      </div>
                    </Col>
                    <Col lg={6} className="wrapper">
                      <div className="sub-title">Description</div>
                      <p className="text-content">{textContent}</p>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isModalOpen: modalSelectors.isOpen(state),
    modalContent: modalSelectors.getContent(state),
  };
}

const actionCreators = {
  closeModal: modalActions.closeModal,
};

export default connect(
  mapStateToProps,
  actionCreators
)(App);
