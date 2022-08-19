import React from "react";
import { connect } from "react-redux";

// Styles
import "./settings.css";

// Selectors
import * as settingsSelectors from "../../../reducers/settings";

const Settings = ({ settings }) => {
  let dataAllIds = Object.keys(settings);

  return <div className="settings-container"></div>;
};

function mapStateToProps(state) {
  return {
    settings: settingsSelectors.getSettings(state),
  };
}

export default connect(mapStateToProps)(Settings);
