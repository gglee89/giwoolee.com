import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';

// Data
import projectsList from '../../data/projects';

// Styles
import './projects.css';

// Components
import TopBar from '../../components/TopBar';
import TopNavigationMenu from '../../components/TopNavigationMenu';
import SideMenu from '../../components/SideMenu';
import ContentRenderer from '../../components/ContentRenderer';

// Actions
import * as projectsActions from '../../actions/projects';

const Projects = ({ selectProject }) => {
  const projectsListAllIds = Object.keys(projectsList);

  return (
    <section id="projects">
      <Container className="project-container">
        <TopBar title="Projects" />
        <TopNavigationMenu />
        <div className="project-body">
          <SideMenu
            onItemSelect={selectProject}
            menuItems={projectsListAllIds}
          />
          <ContentRenderer projectName="RockyRobots" />
        </div>
      </Container>
    </section>
  );
};

const actionCreators = {
  selectProject: projectsActions.selectProject,
};

export default connect(
  null,
  actionCreators
)(Projects);
