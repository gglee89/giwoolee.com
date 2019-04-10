import React from 'react';

// Styles
import './resume.css';

// Content
import ResumeHeader from './ResumeHeader';
import ResumeBody from './ResumeBody';
import ResumeFooter from './ResumeFooter';

const FONT_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  EXTRA_LARGE: 'extra-large',
};

const Resume = () => {
  return (
    <div className="resume">
      <ResumeHeader />
      <ResumeBody />
      <ResumeFooter />
    </div>
  );
};

export default Resume;
