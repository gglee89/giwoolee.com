export const MODAL_OPEN = 'modal/MODAL_OPEN';
export const MODAL_CLOSE = 'modal/MODAL_CLOSE';

export function openModal(
  title,
  primaryLogo,
  images,
  projectName,
  technologyStack,
  textContent
) {
  return dispatch => {
    dispatch({
      type: MODAL_OPEN,
      payload: {
        title,
        primaryLogo,
        images,
        projectName,
        technologyStack,
        textContent,
      },
    });
  };
}

export function closeModal() {
  return dispatch => {
    dispatch({ type: MODAL_CLOSE });
  };
}
