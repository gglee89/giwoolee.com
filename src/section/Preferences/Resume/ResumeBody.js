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

const ResumeBody = ({ color }) => {
  return (
    <div className="ResumeBody" style={{ color }}>
      <div className="ResumeBody__50">
        <div className="ResumeBody__content--title">WORK EXPERIENCE</div>
        <ResumeExperience />
        <ResumeExperience />
        <ResumeExperience />
        <ResumeExperience />
        <div className="ResumeBody__content--title">CERTIFICATES/LICENSES</div>
        <div className="ResumeBody__certificates">
          <div className="ResumeBody__certificates--title">Udacity</div>
          <div className="ResumeBody__certificates--body">
            FEND '17, FSND '17, React ND '18
          </div>
          <div className="ResumeBody__certificates--title">Coursera</div>
          <div className="ResumeBody__certificates--body">
            Google Cloud Platform Specialization '18
          </div>
        </div>
      </div>
      <div className="ResumeBody__50">
        <div className="ResumeBody__content--title">SKILLS</div>
      </div>
    </div>
  );
};

export default ResumeBody;
