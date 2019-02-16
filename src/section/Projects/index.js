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
import * as menuActions from '../../actions/menu';

// Selectors
import * as projectSelectors from '../../reducers/projects';
import * as menuSelectors from '../../reducers/menu';

const Projects = ({ selectMenu, selectedMenu, selectProject, projectName }) => {
  const projectsListAllIds = Object.keys(projectsList);

  return (
    <section id="projects">
      <Container className="project-container">
        <TopBar title="Projects" />
        <TopNavigationMenu
          selectMenu={selectMenu}
          selectedMenu={selectedMenu}
        />
        <div className="project-body">
          <SideMenu
            onItemSelect={selectProject}
            currentItem={projectName}
            menuItems={projectsListAllIds}
          />
          <ContentRenderer />
        </div>
      </Container>
    </section>
  );
};

function mapStateToProps(state) {
  return {
    projectName: projectSelectors.getProjectName(state),
    selectedMenu: menuSelectors.getSelectedMenu(state),
  };
}

const actionCreators = {
  selectProject: projectsActions.selectProject,
  selectMenu: menuActions.selectMenu,
};

export default connect(
  mapStateToProps,
  actionCreators
)(Projects);
