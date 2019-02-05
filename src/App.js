import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import './App.css';

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
                <div className="wrapper">
                  <div className="sub-title">Company</div>
                  <img className="modal-primary-logo" src={primaryLogo} />
                </div>
                <div className="wrapper">
                  <div className="sub-title">Images</div>
                  {images && images.length > 0 ? (
                    images.map(image => {
                      return <img className="modal-image" src={image} />;
                    })
                  ) : (
                    <div style={{ textAlign: 'left' }}>No Images Available</div>
                  )}
                </div>
                <div className="wrapper">
                  <div className="sub-title">Project Name</div>
                  <p className="text-content">{projectName}</p>
                </div>
                <div className="wrapper">
                  <div className="sub-title">Technology Stack</div>
                  <p className="text-content">{technologyStack}</p>
                </div>
                <div className="wrapper">
                  <div className="sub-title">Description</div>
                  <p className="text-content">{textContent}</p>
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
