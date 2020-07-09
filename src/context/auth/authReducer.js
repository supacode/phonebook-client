import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR
} from '../types';

const authReducer = (state, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      console.log(action.payload);

      localStorage.setItem('jwt', action.payload.jwt);

      state = {
        ...state,
        token: action.payload.jwt,
        user: action.payload.user,
        loading: false,
        isAuth: true
      };

      return state;
    case REGISTER_FAIL:
      localStorage.removeItem('jwt');
      state = {
        ...state,
        token: null,
        user: null,
        loading: false,
        isAuth: false,
        error: "Couldn't create user, try again"
      };
      return state;
    case USER_LOADED:
      state = { ...state, user: action.payload, isAuth: true };
      return state;
    case AUTH_ERROR:
      state = { ...state };
      return state;
    default:
      return state;
  }
};

export default authReducer;
