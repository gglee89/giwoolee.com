import resume from '../data/resume';

const initialState = {
  ...resume,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

function select(state) {
  return state.resume;
}

export function getHeader(state) {
  return select(state).header;
}
export function getBody(state) {
  return select(state).body;
}
export function getFooter(state) {
  return select(state).footer;
}

export default reducer;
