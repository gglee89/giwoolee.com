import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store'

import projects, {
    ProjectsName,
    ProjectsType,
    type ProjectsNameType,
} from '@/data/projects'

// Define a type for the slice state
interface ProjectsState {
    projects: ProjectsType | null
    projectName: ProjectsNameType
}

// Define the initial state
const initialState: ProjectsState = {
    projects,
    projectName: ProjectsName.LifebitAI,
}

export const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        selectProjectName: (state, action: PayloadAction<ProjectsNameType>) => {
            state.projectName = action.payload
        },
    },
})

export const { selectProjectName } = projectsSlice.actions

// Selectors
const rootSelector = (state: RootState) => state.projects

export const getProjectName = (state: RootState) =>
    rootSelector(state).projectName

export const getProjects = (state: RootState) => rootSelector(state).projects

export const getProject = (state: RootState) => {
    const projectName = getProjectName(state)

    const projects = getProjects(state)
    if (!projects) return null

    return projects[projectName]
}

export default projectsSlice.reducer
