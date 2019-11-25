import React from 'react';

import './general.css';

const General = () => {
  return (
    <div className="general-container">
      <p className="lead">Todo 2019</p>
      <p className="about-text">
        <code># giwoogustavolee @ Giwoo-MacBook-Pro in ~</code>
        <span>$ [Coursera]</span>Bayes Statistics [Full Scholarship Award]{' '}
        <br />
        <span>$ [Research]</span>ML + NLP Research
        <br />
      </p>
      <p className="lead">Currently...</p>
      <p className="about-text">
        <code># giwoogustavolee @ Giwoo-MacBook-Pro in ~</code>
        <span>$</span>python
        <code>Python 2.7.10 (default, Oct 6 2017, 22:29:07)</code>
        <code>
          [GCC 4.2.1 Compatible Apple LLVM 9.0.0 (clang-900.0.31)] on darwin
        </code>
        <code>
          Type "help", "copyright", "credits" or "license" for more information.
        </code>
        <code>>>> </code>
        <code>>>> import activities_doing from general</code>
        <code>>>> print(activities_doing.currently)</code>
        <code>
          A Machine Learning & Web Development Enthusiast. A PhD student in
          Computer Science at Florida State University under{' '}
          <a
            className="link"
            href="https://www.cs.fsu.edu/~liux/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Professor Dr.PhD.Xiuwen Liu
          </a>
        </code>
        <span>$</span> This is not really a terminal (It's just CSS)
      </p>
      <p className="lead">So far</p>
      <p className="about-text">
        <code># giwoogustavolee @ Giwoo-MacBook-Pro in ~</code>
        <span>$ [Research ML+NLP]</span> Research in Online Deception and building Conversational-AI application with <a
            className="link"
            href="https://www.shuyuanmaryho.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Professor Dr.PhD.Shuyuan Mary Ho
          </a>
        in the iSensor department at FSU
        <span>$ [Web Development]</span> 5+ years advancing in the IT industry. Shaped
        products as a Data Engineer with BI, with Mainframes (batch processing),
        and Web/Mobile development. Experienced in developing internal web
        platforms for the entertainment and financial industries and also with
        B2C customer facing applications. Actively contributed on UI/UX,
        software specification, and project management in parallel with web
        development.
        <span className="blink-cursor" />
      </p>
    </div>
  );
};

export default General;
