import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

// Styles
import './resumeHeader.css';

// Selectors
import * as resumeSelectors from '../../../reducers/resume';

const ResumeHeader = ({ color, header }) => {
  const headerClasses = classnames({
    ResumeHeader: true,
    'dark-theme': color === 'white',
  });

  const { profile, contact } = header;

  return (
    <div className={headerClasses}>
      <div className="ResumeHeader__profile">
        <div className="ResumeHeader__profile--name" style={{ color }}>
          {profile.name}
        </div>
        <div className="ResumeHeader__profile--role" style={{ color }}>
          {profile.role}
        </div>
        <div className="ResumeHeader__profile--summary" style={{ color }}>
          {profile.summary}
        </div>
      </div>
      <div className="ResumeHeader__contact" style={{ color }}>
        <div>{contact.email}</div>
        <div>{contact.phone}</div>
        <div>{contact.location}</div>
        <div>{contact.website}</div>
        <div>{contact.social}</div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    header: resumeSelectors.getHeader(state),
  };
};

export default connect(mapStateToProps)(ResumeHeader);
