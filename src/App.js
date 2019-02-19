import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import './App.css';
import './Theme.css';

// Images
import backgrounds from './shared/backgrounds';

// Actions
import * as modalActions from './actions/modal';

// Selectors
import * as modalSelectors from './reducers/modal';

// Pages
import Home from './pages/Home';

class App extends Component {
  render() {
    const { isModalOpen, modalContent } = this.props;

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
      <div
        className="App"
        style={{
          background: `url(${backgrounds['bgPalmTree']})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Home />
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
