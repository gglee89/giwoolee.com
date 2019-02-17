import PROJECTS from '../data/projects';
import { PROJECTS_SELECT } from '../actions/projects';

const initialState = {
  ...PROJECTS,
  projectName: 'Rocky Robots',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PROJECTS_SELECT:
      return {
        ...state,
        projectName: action.payload,
      };
    default:
      return state;
  }
};

function select(state) {
  return state.projects;
}

export function getProject(state, projectName) {
  const projects = select(state);

  return projects[projectName];
}

export function getProjectName(state) {
  return select(state).projectName;
}

export default reducer;
