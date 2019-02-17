import React from 'react';
import { connect } from 'react-redux';

// Styles
import './contact.css';

// Components
import Section from '../../../components/Section';

// Selectors
import * as contactSelectors from '../../../reducers/contact';

const Contact = ({ contacts }) => {
  let dataAllIds = Object.keys(contacts);

  return (
    <div className="contact-container">
      {dataAllIds &&
        dataAllIds.length > 0 &&
        dataAllIds.map(dataId => {
          return (
            <Section
              key={dataId}
              title={dataId}
              topics={contacts[dataId].topics}
            />
          );
        })}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    contacts: contactSelectors.getContact(state),
  };
}

export default connect(mapStateToProps)(Contact);
