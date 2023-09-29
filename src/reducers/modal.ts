import { MODAL_OPEN, MODAL_CLOSE } from '../actions/modal';

const initialState = {
  isOpen: false,
  content: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_OPEN:
      return {
        isOpen: true,
        content: action.payload,
      };
    case MODAL_CLOSE:
      return {
        isOpen: false,
        content: {},
      };
    default:
      return state;
  }
};

function select(state) {
  return state.modal;
}

export function isOpen(state) {
  return select(state).isOpen;
}

export function getContent(state) {
  return select(state).content;
}

export default reducer;
