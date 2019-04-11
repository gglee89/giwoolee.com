import React from 'react';

// Styles
import './resumeBody.css';

const ResumeExperience = () => {
  return (
    <div className="ResumeBody__experience-box">
      <div className="ResumeBody__experience-box--title">
        Mechanical/HVAC Engineer
      </div>
      <div className="ResumeBody__experience-box--company">TechUSA</div>
      <div className="ResumeBody__experience-box--date">11/2014 - Present</div>
      <ul className="ResumeBody__experience-box--achievements">
        <li>
          <span>
            Praesent egestas elit est, eget convallis sem placerat quis. Ut eu
            velit erat.
          </span>
        </li>
        <li>
          <span>
            Praesent egestas elit est, eget convallis sem placerat quis. Ut eu
            velit erat.
          </span>
        </li>
        <li>
          <span>
            Praesent egestas elit est, eget convallis sem placerat quis. Ut eu
            velit erat.
          </span>
        </li>
      </ul>
    </div>
  );
};

const ResumeBody = () => {
  return (
    <div className="ResumeBody">
      <div className="ResumeBody__50">
        <div className="ResumeBody__content--title">WORK EXPERIENCE</div>
        <ResumeExperience />
        <ResumeExperience />
        <ResumeExperience />
        <ResumeExperience />
      </div>
      <div className="ResumeBody__50">
        <div className="ResumeBody__content--title">SKILLS</div>
      </div>
    </div>
  );
};

export default ResumeBody;
