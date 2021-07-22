import { LOGIN, ROLE, IS_AUTH } from '../constants';

const initialState = {
  isAuth: false,
  login: '',
  role: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_AUTH:
      return {
        ...state,
        isAuth: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        login: action.payload,
      };
    case ROLE:
      return {
        ...state,
        role: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
