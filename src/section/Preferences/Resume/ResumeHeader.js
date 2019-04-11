import React from 'react';
import classnames from 'classnames';

// Styles
import './resumeHeader.css';

// Assets

const ResumeHeader = ({ color }) => {
  const headerClasses = classnames({
    ResumeHeader: true,
    'dark-theme': color === 'white',
  });

  return (
    <div className={headerClasses}>
      <div className="ResumeHeader__profile">
        <div className="ResumeHeader__profile--name" style={{ color }}>
          Giwoo Gustavo Lee
        </div>
        <div className="ResumeHeader__profile--role" style={{ color }}>
          Software Engineer (Web & Machine Learning)
        </div>
        <div className="ResumeHeader__profile--summary" style={{ color }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quam
          sem, euismod in nisi non, euismod eleifend libero. Cras in augue
          laoreet, tempor diam at, varius nisl. Donec ut ante in nisi
          sollicitudin aliquet in sit amet nulla. Pellentesque vitae orci
          libero.
        </div>
      </div>
      <div className="ResumeHeader__contact" style={{ color }}>
        <div>gglee89@gmail.com</div>
        <div>(407) 450-8519</div>
        <div>Orlando, FL</div>
        <div>giwoolee.com</div>
        <div>linkedin.com/in/leegiwoo</div>
      </div>
    </div>
  );
};

export default ResumeHeader;
