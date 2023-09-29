import CONTACT from '../data/contact';

const initialState = {
  ...CONTACT,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

function select(state) {
  return state.contact;
}

export function getContact(state) {
  return select(state);
}

export default reducer;
