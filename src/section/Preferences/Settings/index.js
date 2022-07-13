import React from "react";
import { connect } from "react-redux";

// Styles
import "./attribution.css";

// Components
import Section from "../../../components/Section";

// Selectors
import * as settingsSelectors from "../../../reducers/settings";

const Settings = ({ settings }) => {
  let dataAllIds = Object.keys(settings);

  return (
    <div className="settings-container">
      {dataAllIds &&
        dataAllIds.length > 0 &&
        dataAllIds.map((dataId) => {
          return (
            <Section
              key={dataId}
              title={dataId}
              topics={settings[dataId].topics}
            />
          );
        })}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    settings: settingsSelectors.getSettings(state),
  };
}

export default connect(mapStateToProps)(Settings);
