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
          Praesent egestas elit est, eget convallis sem placerat quis. Ut eu
          velit erat.
        </li>
        <li>
          Praesent egestas elit est, eget convallis sem placerat quis. Ut eu
          velit erat.
        </li>
        <li>
          Praesent egestas elit est, eget convallis sem placerat quis. Ut eu
          velit erat.
        </li>
      </ul>
    </div>
  );
};

const ResumeEducation = () => {
  return (
    <div className="ResumeBody__education-item">
      <div className="ResumeBody__education-item--title">
        Ph.D. in Computer Science
      </div>
      <div className="ResumeBody__education-item--subtitle">
        University of Mississippi
      </div>
      <div className="ResumeBody__education-item--date">
        <div>08/2008 - 05/2010</div>
        <div>Oxford, MS</div>
      </div>
      <div className="ResumeBody__education-item--list">
        <div className="ResumeBody__education-item--list-title">
          Selected Courses
        </div>
        <div className="ResumeBody__education-item--list-wrapper">
          <ul>
            <li>Computer-Aided Design</li>
            <li>Dynamic Engineering Systems</li>
          </ul>
          <ul>
            <li>Progamming for Engineers</li>
            <li>Circuits</li>
          </ul>
        </div>
      </div>
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
        <div className="ResumeBody__skills">
          <div className="ResumeBody__skills--item">
            UI Engineer (Web/Native)
          </div>
          <div className="ResumeBody__skills--item">ReactJS</div>
          <div className="ResumeBody__skills--item">NodeJS</div>
          <div className="ResumeBody__skills--item">Machine Learning</div>
          <div className="ResumeBody__skills--item">Python</div>
          <div className="ResumeBody__skills--item">ML/NLP</div>
        </div>
        <div className="ResumeBody__content--title">TECHNICAL SKILLS</div>
        <div className="ResumeBody__technical">
          <div className="ResumeBody__technical-item">
            <div className="ResumeBody__technical-item--title">Front End</div>
            <div className="ResumeBody__technical-item--body">
              Autodesk Revit, Building Information Modeling, Load Analysis
              Programs, Energy Modeling Programs, AutoCad
            </div>
          </div>
          <div className="ResumeBody__technical-item">
            <div className="ResumeBody__technical-item--title">Back End</div>
            <div className="ResumeBody__technical-item--body">
              Autodesk Revit, Building Information Modeling, Load Analysis
              Programs, Energy Modeling Programs, AutoCad
            </div>
          </div>
          <div className="ResumeBody__technical-item">
            <div className="ResumeBody__technical-item--title">
              Machine Learning
            </div>
            <div className="ResumeBody__technical-item--body">
              Autodesk Revit, Building Information Modeling, Load Analysis
              Programs, Energy Modeling Programs, AutoCad
            </div>
          </div>
        </div>
        <div className="ResumeBody__content--title">EDUCATION</div>
        <div className="ResumeBody__education">
          <ResumeEducation />
          <ResumeEducation />
          <ResumeEducation />
        </div>
      </div>
    </div>
  );
};

export default ResumeBody;
