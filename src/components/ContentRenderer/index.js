import React from 'react';
import { connect } from 'react-redux';

import './contentRenderer.css';

// Selectors
import * as projectsSelectors from '../../reducers/projects';

// Components
import TopNavigationMenu from './TopNavigationMenu';
import ContentSection from './ContentSection';

const ContentRenderer = ({ project }) => {
  const { basics, description } = project;

  return (
    <div className="renderer-container">
      <TopNavigationMenu />
      <ContentSection title="Basics" content={basics} />
      <ContentSection title="Description" content={description} isDescription />
    </div>
  );
};

function mapStateToProps(state, { projectName }) {
  return {
    project: projectsSelectors.getProject(state, projectName),
  };
}

export default connect(mapStateToProps)(ContentRenderer);
