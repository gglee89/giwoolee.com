import React from 'react';

// Styles
import './contact.css';

// Components
import Section from '../../../components/Section';

// Data
const data = {
  Academic: {
    topics: [
      {
        name: 'University of Mississippi - Oxford',
        level: 'gglee@go.olemiss.edu',
        seniority: 'Weir Hall',
      },
    ],
  },
  Professional: {
    topics: [
      {
        name: 'RockyRobots',
        level: 'gustavo@rockyrobots.com',
        seniority: '',
      },
    ],
  },
  Personal: {
    topics: [
      {
        name: 'Gmail',
        level: 'gglee89@gmail.com',
        seniority: '',
      },
    ],
  },
  'Social Media': {
    topics: [
      {
        name: 'Linkedin',
        level: 'High usage',
        seniority: '',
      },
      {
        name: 'Twitter',
        level: 'Medium usage',
        seniority: '',
      },
      {
        name: 'Instagram',
        level: 'Medium usage',
        seniority: '',
      },
      {
        name: 'Facebook',
        level: 'Low usage',
        seniority: '',
      },
    ],
  },
};

const Contact = () => {
  let dataAllIds = Object.keys(data);

  return (
    <div className="contact-container">
      {dataAllIds &&
        dataAllIds.length > 0 &&
        dataAllIds.map(dataId => {
          return (
            <Section key={dataId} title={dataId} topics={data[dataId].topics} />
          );
        })}
    </div>
  );
};

export default Contact;
