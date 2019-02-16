import React from 'react';

import './general.css';

const General = () => {
  return (
    <div className="general-container">
      <p className="lead">Currently...</p>
      <p className="about-text">
        <code># giwoogustavolee @ Giwoo-MacBook-Pro in ~</code>
        <span>$</span> A Machine Learning & Web Development Enthusiast. A PhD
        candidate in Computer Science at the University of Mississippi under{' '}
        <a className="link" href="https://olemiss.edu/people/dwilkins">
          Professor Dr.Wilkins.
        </a>
      </p>
      <p className="lead">So far</p>
      <p className="about-text">
        <code># giwoogustavolee @ Giwoo-MacBook-Pro in ~</code>
        <span>$</span> 5+ years advancing in the IT industry. Shaped products as
        a Data Engineer with BI, with Mainframes (batch processing), and
        Web/Mobile development. Experienced in developing internal web platforms
        for the entertainment and financial industries and also with B2C
        customer facing applications. Actively contributed on UI/UX, software
        specification, and project management in parallel with web development.
        <span className="blink-cursor" />
      </p>
    </div>
  );
};

export default General;
