import React from 'react';
import classnames from 'classnames';

// Styles
import './section.css';

// Icons
import icons from '../../shared/icons';

const SectionItem = ({ name, level, link, mail, icon, iconUrl, seniority }) => {
  return link || mail ? (
    <a
      href={link ? link : mail ? `mailto: ${mail}` : '#'}
      rel="noopener noreferrer"
      target="_blank"
      className="section-item-container"
    >
      {(icon || iconUrl) && (
        <img
          src={icon ? icons[icon] : iconUrl ? iconUrl : ''}
          alt={name}
          className="section-item-icon"
        />
      )}
      <div className="section-topic">
        <div>{name}</div>
        <div className="section-topic-item">{level}</div>
      </div>
    </a>
  ) : (
    <div className="section-item-container">
      {(icon || iconUrl) && (
        <img
          src={icon ? icons[icon] : iconUrl ? iconUrl : ''}
          alt={name}
          className="section-item-icon"
        />
      )}
      <div className="section-topic">
        <div>{name}</div>
        <div className="section-topic-item">{level}</div>
        {seniority && <div className="section-topic-item">{seniority}</div>}
      </div>
    </div>
  );
};

const Section = ({ title, topics, isDisabled }) => {
  let updateButtonClasses = classnames({
    'section-update-button': true,
    disabled: isDisabled,
  });

  return (
    <div className="section-container">
      <div className="section-header">
        <div className="section-title">{title}</div>
        <div className={updateButtonClasses}>
          <div>UPDATE ALL</div>
          <div>+</div>
        </div>
      </div>
      <div className="section-body">
        {topics &&
          topics.length > 0 &&
          topics.map((props, key) => {
            return <SectionItem key={key} {...props} />;
          })}
      </div>
    </div>
  );
};

Section.defaultProps = {
  isDisabled: true,
};

export default Section;
