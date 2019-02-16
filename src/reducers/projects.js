import PROJECTS from '../data/projects';
import { PROJECTS_SELECT } from '../actions/projects';

const initialState = {
  ...PROJECTS,
  projectName: 'RockyRobots',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PROJECTS_SELECT:
      let projectName = action.payload.replace(/ +/g, ''); // Remove spaces between words

      return {
        ...state,
        projectName,
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

export default reducer;
