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

const ContentSection = ({ title, content }) => {
  let contentAllIds = Object.keys(content);

  return (
    <div className="content-renderer-section">
      <div className="content-renderer-section-title">{title}</div>
      {contentAllIds &&
        contentAllIds.map(contentId => {
          console.log('content[contentId]}.type', content[contentId].type);
          return (
            <div key={contentId} className="content-renderer-form">
              {content[contentId].type === 'array' ? (
                <ContentRendererFormKeywords
                  label={contentId}
                  keywords={content[contentId].content}
                />
              ) : content[contentId].type === 'field' ? (
                <ContentRendererFormField
                  label={contentId}
                  field={content[contentId].content}
                />
              ) : (
                <ContentRendererFormTextArea
                  label={contentId}
                  field={content[contentId].content}
                />
              )}
            </div>
          );
        })}
    </div>
  );
};

ContentSection.defaultProps = {
  isDescription: false,
};

export default ContentSection;
