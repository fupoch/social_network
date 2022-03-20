import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA";

let initialState = {
  userId: null,
  login: null,
  password: null,
  rememberMe: false,
  email: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

const setAuthUserData = (userId, login, email, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, login, email, isAuth },
});

export const getUserLogin = () => async (dispatch) => {
  let response = await authAPI.loginDataGet();
  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setAuthUserData(id, login, email, true));
  }
};

export const signIn = (email, password, rememberMe) => async (dispatch) => {
  let response = await authAPI.signIn(email, password, rememberMe);
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData());
  } else {
    let message =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "some error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const signOut = () => async (dispatch) => {
  let response = await authAPI.signOut();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
