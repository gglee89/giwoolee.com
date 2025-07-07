// Styles
import './projects.css'

// Components
import SideMenu from './SideMenu'
import ContentRenderer from './ContentRenderer'

import projectsList, { ProjectsNameType } from '@/data/projects'

interface ProjectsProps {
    projectName: string
}
const Projects: React.FC<ProjectsProps> = ({ projectName }) => {
    const projectsListAllIds: ProjectsNameType[] = Object.keys(
        projectsList
    ) as ProjectsNameType[]

    return (
        <div className="project-body">
            <SideMenu
                currentItem={projectName}
                menuItems={projectsListAllIds}
            />
            <ContentRenderer />
        </div>
    )
}

export default Projects
