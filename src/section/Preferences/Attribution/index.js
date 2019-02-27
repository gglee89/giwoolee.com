import React from 'react';
import { connect } from 'react-redux';

// Styles
import './attribution.css';

// Components
import Section from '../../../components/Section';

// Selectors
import * as attributionSelectors from '../../../reducers/attribution';

const Attribution = ({ attributions }) => {
  let dataAllIds = Object.keys(attributions);

  return (
    <div className="attribution-container">
      {dataAllIds &&
        dataAllIds.length > 0 &&
        dataAllIds.map(dataId => {
          return (
            <Section
              key={dataId}
              title={dataId}
              topics={attributions[dataId].topics}
            />
          );
        })}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    attributions: attributionSelectors.getAttribution(state),
  };
}

export default connect(mapStateToProps)(Attribution);
