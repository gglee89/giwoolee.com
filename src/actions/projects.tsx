export const PROJECTS_SELECT = 'projects/PROJECTS_SELECT';

export function selectProject(projectName) {
  return dispatch => {
    dispatch({ type: PROJECTS_SELECT, payload: projectName });
  };
}
