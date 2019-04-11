import React from 'react';
import { connect } from 'react-redux';

// Styles
import './resumeBody.css';

// Selectors
import * as resumeSelectors from '../../../reducers/resume';

const ResumeExperience = ({ role, company, date, achievements }) => {
  return (
    <div className="ResumeBody__experience-box">
      <div className="ResumeBody__experience-box--title">{role}</div>
      <div className="ResumeBody__experience-box--company">{company}</div>
      <div className="ResumeBody__experience-box--date">{date}</div>
      <ul className="ResumeBody__experience-box--achievements">
        {achievements.map(achievement => {
          return <li key={`achivement_${achievement}`}>{achievement}</li>;
        })}
      </ul>
    </div>
  );
};

const ResumeEducation = ({
  title,
  university,
  dates_attended,
  location,
  courses,
}) => {
  return (
    <div className="ResumeBody__education-item">
      <div className="ResumeBody__education-item--title">{title}</div>
      <div className="ResumeBody__education-item--subtitle">{university}</div>
      <div className="ResumeBody__education-item--date">
        <div>{dates_attended}</div>
        <div>{location}</div>
      </div>
      <div className="ResumeBody__education-item--list">
        <div className="ResumeBody__education-item--list-title">
          Selected Courses
        </div>
        <div className="ResumeBody__education-item--list-wrapper">
          <ul>
            {courses.map((course, idx) => {
              return idx % 2 === 0 && <li key={`even_${idx}`}>{course}</li>;
            })}
          </ul>
          <ul>
            {courses.map((course, idx) => {
              return idx % 2 > 0 && <li key={`odd_${idx}`}>{course}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ResumeBody = ({ color, body }) => {
  const { experiences, certificates, skills, technicals, educations } = body;

  return (
    <div className="ResumeBody" style={{ color }}>
      <div className="ResumeBody__50">
        <div className="ResumeBody__content--title">WORK EXPERIENCE</div>
        {experiences.map(({ role, company, date, achievements }, idx) => {
          return (
            <ResumeExperience
              key={`experience_${idx}`}
              role={role}
              company={company}
              date={date}
              achievements={achievements}
            />
          );
        })}
        <div className="ResumeBody__content--title">CERTIFICATES/LICENSES</div>
        <div className="ResumeBody__certificates">
          {certificates.map(({ institution, licenses }, idx) => {
            return (
              <React.Fragment key={`experience_${idx}`}>
                <div className="ResumeBody__certificates--title">
                  {institution}
                </div>
                <div className="ResumeBody__certificates--body">
                  {licenses.map((license, idx) => {
                    return <span key={`license_${idx}`}>{license}</span>;
                  })}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <div className="ResumeBody__50">
        <div className="ResumeBody__content--title">SKILLS</div>
        <div className="ResumeBody__skills">
          {skills.map((skill, idx) => {
            return (
              <div key={`skill_${idx}`} className="ResumeBody__skills--item">
                {skill}
              </div>
            );
          })}
        </div>
        <div className="ResumeBody__content--title">TECHNICAL SKILLS</div>
        <div className="ResumeBody__technical">
          {technicals.map(({ title, body }, idx) => {
            return (
              <div
                key={`technicals_${idx}`}
                className="ResumeBody__technical-item"
              >
                <div className="ResumeBody__technical-item--title">{title}</div>
                <div className="ResumeBody__technical-item--body">{body}</div>
              </div>
            );
          })}
        </div>
        <div className="ResumeBody__content--title">EDUCATION</div>
        <div className="ResumeBody__education">
          {educations.map(
            ({ title, university, dates_attended, location, courses }, idx) => {
              return (
                <ResumeEducation
                  key={`education_${idx}`}
                  title={title}
                  university={university}
                  dates_attended={dates_attended}
                  location={location}
                  courses={courses}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    body: resumeSelectors.getBody(state),
  };
};

export default connect(mapStateToProps)(ResumeBody);
