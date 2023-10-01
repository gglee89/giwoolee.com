import React from 'react'

// Styles
import './projects.css'

// Components
import SideMenu from './SideMenu'
import ContentRenderer from './ContentRenderer'

// Data
import projectsList from 'data/projects'

interface ProjectsProps {
    selectProject: (name: string) => void
    projectName: string
}
const Projects: React.FC<ProjectsProps> = ({ selectProject, projectName }) => {
    const projectsListAllIds = Object.keys(projectsList)

    return (
        <div className="project-body">
            <SideMenu
                onItemSelect={selectProject}
                currentItem={projectName}
                menuItems={projectsListAllIds}
            />
            <ContentRenderer />
        </div>
    )
}

export default Projects
