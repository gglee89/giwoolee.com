import React from 'react';

import './contentSection.css';

const ContentRendererFormField = ({ label, field }) => {
  return (
    <div className="content-renderer-form-item">
      <div className="content-renderer-form-item-label">{`${label}:`}</div>
      <div className="content-renderer-form-item-field">{field}</div>
    </div>
  );
};

const ContentRendererFormTextArea = ({ label, field }) => {
  return (
    <div className="content-renderer-form-item">
      <div className="content-renderer-form-item-label">{`${label}:`}</div>
      <div className="content-renderer-form-item-textarea">{field}</div>
    </div>
  );
};

const ContentRendererFormKeywords = ({ label, keywords }) => {
  return (
    <div className="content-renderer-form-item">
      <div className="content-renderer-form-item-label">{`${label}:`}</div>
      <div className="content-renderer-form-item-keywords">
        {keywords &&
          keywords.map(keyword => {
            return (
              <div
                key={keyword}
                className="content-renderer-form-item-keyword-item"
              >
                {keyword}
              </div>
            );
          })}
      </div>
    </div>
  );
};

const ContentSection = ({ title, content, isDescription }) => {
  const { name, alias, keywords, role, year } = content;

  return (
    <div className="content-renderer-section">
      <div className="content-renderer-section-title">{title}</div>
      {isDescription ? (
        <div className="content-renderer-form">
          <ContentRendererFormTextArea label="What was done" field={content} />
        </div>
      ) : (
        <div className="content-renderer-form">
          <ContentRendererFormField label="Name" field={name} />
          <ContentRendererFormField label="Alias" field={alias} />
          <ContentRendererFormKeywords label="Keywords" keywords={keywords} />
          <ContentRendererFormField label="Year" field={year} />
          <ContentRendererFormField label="Role" field={role} />
        </div>
      )}
    </div>
  );
};

ContentSection.defaultProps = {
  isDescription: false,
};

export default ContentSection;
