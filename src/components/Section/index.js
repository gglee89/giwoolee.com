import React from 'react';

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

const Section = ({ title, topics }) => {
  return (
    <div className="section-container">
      <div className="section-header">
        <div className="section-title">{title}</div>
        <div className="section-update-button">
          <div>UPDATE ALL</div>
          <div>+</div>
        </div>
      </div>
      <div className="section-body">
        {topics &&
          topics.length > 0 &&
          topics.map(({ name, level }) => {
            return <SectionItem name={name} level={level} />;
          })}
      </div>
    </div>
  );
};

export default Section;
