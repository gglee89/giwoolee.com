import React from 'react';

// Styles
import './projects.css';

// Components
import SideMenu from '../../../components/SideMenu';
import ContentRenderer from '../../../components/ContentRenderer';

// Data
import projectsList from '../../../data/projects';

const Projects = ({ selectProject, projectName }) => {
  const projectsListAllIds = Object.keys(projectsList);

  console.log('projectsListAllIds', projectsListAllIds);

  return (
    <div className="project-body">
      <SideMenu
        onItemSelect={selectProject}
        currentItem={projectName}
        menuItems={projectsListAllIds}
      />
      <ContentRenderer />
    </div>
  );
};

export default Projects;
