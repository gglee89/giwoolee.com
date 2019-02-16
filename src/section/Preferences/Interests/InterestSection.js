import React from 'react';

// Styles
import './interestSection.css';

const IntersectSectionItem = ({ name, level }) => {
  return (
    <div className="interest-section-topic">
      <div>{name}</div>
      <div className="interest-section-topic-item">{level}</div>
    </div>
  );
};

const InterestSection = ({ title, topics }) => {
  return (
    <div className="interest-section-container">
      <div className="interest-section-header">
        <div className="interest-section-title">{title}</div>
        <div className="interest-section-update-button">
          <div>UPDATE ALL</div>
          <div>+</div>
        </div>
      </div>
      <div className="interest-section-body">
        {topics &&
          topics.length > 0 &&
          topics.map(({ name, level }) => {
            return <IntersectSectionItem name={name} level={level} />;
          })}
      </div>
    </div>
  );
};

export default InterestSection;
