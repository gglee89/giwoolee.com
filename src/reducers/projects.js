import PROJECTS from '../data/projects';

const initialState = {
  ...PROJECTS,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
