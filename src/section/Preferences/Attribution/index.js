import React from 'react';

// Styles
import './attribution.css';

// Components
import Section from '../../../components/Section';

// Data
const data = {
  Icons: {
    topics: [
      {
        name: 'Freepik - Cute Food',
        level: 'https://www.flaticon.com/packs/cute-food-3',
        seniority: '',
      },
      {
        name: 'Freepik - Graphic Design',
        level: 'https://www.flaticon.com/packs/graphic-design-84',
        seniority: '',
      },
    ],
  },
};

const Attribution = () => {
  let dataAllIds = Object.keys(data);

  return (
    <div className="attribution-container">
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

export default Attribution;
