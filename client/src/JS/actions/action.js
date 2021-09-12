import axios from "axios";
import {
  USER_FAIL,
  USER_LOAD,
  USER_SUCC,
  CURRENT_USER,
  LOGOUT,
} from "../actionsType/user";

// register
export const register = (newUser, history) => async (dispatch) => {
  dispatch({ type: USER_LOAD });
  try {
    const result = await axios.post("/api/user/register", newUser);
    dispatch({ type: USER_SUCC, payload: result.data }); //{msg, user , token}
    history.push("/profile");
  } catch (error) {
      const errors = error.response.data.errors
      errors.map(error => alert(error.msg))
    dispatch({ type: USER_FAIL, payload: error.response.data }); //{errors: []}
  }
};

// login
export const login = (user, history) => async (dispatch) => {
  dispatch({ type: USER_LOAD });
  try {
    const result = await axios.post("/api/user/login", user);
    dispatch({ type: USER_SUCC, payload: result.data }); //{msg, user , token}
    user.email === "admin@mayway.tn"
      ? history.push("/transports")
      : history.goBack();
  } catch (error) {
    dispatch({ type: USER_FAIL, payload: error.response.data }); //{errors: []}
  }
};

// Current user

export const currentUser = () => async (dispatch) => {
  dispatch({ type: USER_LOAD });
  try {
    const config = {
      headers: { authorization: localStorage.getItem("token") },
    };
    const result = await axios.get("/api/user/current", config);
    dispatch({ type: CURRENT_USER, payload: result.data }); //{user}
  } catch (error) {
    dispatch({ type: USER_FAIL, payload: error.response.data }); //{errors: []}
  }
};

// logout
export const logout = () => {
  return { type: LOGOUT };
};
