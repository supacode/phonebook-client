import {
  ADD_CONTACT,
  SET_EDIT_CONTACT,
  CLEAR_CURRENT,
  DELETE_CONTACT
} from '../types';

const contactReducer = (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      state = { ...state, contacts: [...state.contacts, action.payload] };
      return state;
    case SET_EDIT_CONTACT:
      state = {
        ...state,
        current: state.contacts.find((contact) => contact.id === action.payload)
      };
      return state;
    case CLEAR_CURRENT:
      state = { ...state, current: null };
      return state;
    case DELETE_CONTACT:
      state = {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        )
      };
      return state;
    default:
      return state;
  }
};
export default contactReducer;
