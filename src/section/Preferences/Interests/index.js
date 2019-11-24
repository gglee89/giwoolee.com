import React from 'react';
import { connect } from 'react-redux';

// Styles
import './interests.css';

// Components
import Section from '../../../components/Section';

// Selectors
import * as interestsSelectors from '../../../reducers/interests';

const Interests = ({ interests }) => {
  let dataAllIds = Object.keys(interests);

  return (
    <div>
      {dataAllIds &&
        dataAllIds.length > 0 &&
        dataAllIds.map(dataId => {
          return (
            <Section
              key={dataId}
              title={dataId}
              topics={interests[dataId].topics}
            />
          );
        })}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    interests: interestsSelectors.getInterests(state),
  };
}

export default connect(mapStateToProps)(Interests);
