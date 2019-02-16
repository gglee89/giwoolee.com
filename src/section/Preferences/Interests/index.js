import React from 'react';

// Styles
import './interests.css';

// Components
import InterestSection from './InterestSection';

const data = {
  'Machine Learning': {
    topics: [
      {
        name: 'Algorithm',
        level: 'Academic (Undergraduate)',
        seniority: 'Beginner',
      },
      {
        name: 'Prediction',
        level: 'Academic (Undergraduate)',
        seniority: 'Beginner',
      },
      {
        name: 'Probability',
        level: 'Academic (Undergraduate)',
        seniority: 'Beginner',
      },
    ],
  },
  AI: {
    topics: [
      {
        name: 'CNN',
        level: 'Facebook Pytorch Scholar (Dec/2018)',
        seniority: 'Beginner',
      },
      {
        name: 'AGI (Artifical General Intelligence)',
        level: 'Professional (1+ year)',
        seniority: 'Beginner',
      },
    ],
  },
  'Web/Mobile Development': {
    topics: [
      {
        name: 'Finance',
        level: 'Professional (Blockchain 1+ year)',
        seniority: 'Senior',
      },
      {
        name: 'General Purpose App',
        level: 'Professional (4+ years) / Udacity Mentor',
        seniority: 'Senior',
      },
    ],
  },
};

const Interests = () => {
  let dataAllIds = Object.keys(data);

  return (
    <div>
      {dataAllIds &&
        dataAllIds.length > 0 &&
        dataAllIds.map(dataId => {
          return (
            <InterestSection
              key={dataId}
              title={dataId}
              topics={data[dataId].topics}
            />
          );
        })}
    </div>
  );
};

export default Interests;
