import {
  CURRENT_USER,
  LOGOUT,
  USER_FAIL,
  USER_LOAD,
  USER_SUCC,
} from "../actionsType/user";

const initState = {
  user: {},
  load: false,
  errors: [],
  isAuth: false,
};

const userReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case USER_LOAD:
      return { ...state, load: true };
    case USER_SUCC:
      localStorage.setItem('token',payload.token)
      return { ...state, load: false, user: payload.user , isAuth: true};
    case USER_FAIL:
      return { ...state, load: false, errors: payload.errors , isAuth: false};
    case CURRENT_USER:
      return {...state, user: payload, load: false,  isAuth: true}
    case LOGOUT: 
    localStorage.removeItem('token')
      return {...state, user: {}, load: false , errors: [] , isAuth: false}
    default:
      return state;
  }
};

export default userReducer;
