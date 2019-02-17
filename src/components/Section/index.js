import React from 'react';
import classnames from 'classnames';

// Styles
import './section.css';

const SectionItem = ({ name, level }) => {
  return (
    <div className="section-topic">
      <div>{name}</div>
      <div className="section-topic-item">{level}</div>
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
          topics.map(({ name, level }) => {
            return <SectionItem key={name} name={name} level={level} />;
          })}
      </div>
    </div>
  );
};

Section.defaultProps = {
  isDisabled: true,
};

export default Section;
