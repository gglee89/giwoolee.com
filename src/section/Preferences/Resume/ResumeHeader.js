import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

// Styles
import './resumeHeader.css';

// Assets
import icons from '../../../shared/icons';

// Selectors
import * as resumeSelectors from '../../../reducers/resume';

const ResumeHeader = ({ color, header }) => {
  const headerClasses = classnames({
    ResumeHeader: true,
    'dark-theme': color === 'white',
  });

  const { profile, contact } = header;

  const iconHeight = 20;

  return (
    <div className={headerClasses}>
      <div className="ResumeHeader__profile">
        <div className="ResumeHeader__profile--name">{profile.name}</div>
        <div className="ResumeHeader__profile--role" style={{ color }}>
          {profile.role}
        </div>
        <div className="ResumeHeader__profile--summary" style={{ color }}>
          {profile.summary}
        </div>
      </div>
      <div className="ResumeHeader__contact" style={{ color }}>
        <div>
          <a href={`mailto: ${contact.email[0]}`}>
            {contact.email[0]}
            <img
              src={icons[contact.email[1]]}
              alt="email"
              style={{ height: iconHeight }}
            />
          </a>
        </div>
        <div>
          {contact.phone[0]}
          <img
            src={icons[contact.phone[1]]}
            alt="email"
            style={{ height: iconHeight }}
          />
        </div>
        <div>
          {contact.location[0]}
          <img
            src={icons[contact.location[1]]}
            alt="email"
            style={{ height: iconHeight }}
          />
        </div>
        <div>
          <a href={`https://${contact.website[0]}`}>
            {contact.website[0]}
            <img
              src={icons[contact.website[1]]}
              alt="email"
              style={{ height: iconHeight }}
            />
          </a>
        </div>
        <div>
          <a href={`https://${contact.social[0]}`}>
            {contact.social[0]}
            <img
              src={icons[contact.social[1]]}
              alt="email"
              style={{ height: iconHeight }}
            />
          </a>
        </div>
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
