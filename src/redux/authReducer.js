import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";

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

export const getUserLogin = () => {
  return (dispatch) => {
    authAPI.loginDataGet().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        dispatch(setAuthUserData(id, login, email, true));
      }
    });
  };
};
export const signIn = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.signIn(email, password, rememberMe).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData());
      } else {
        let message =
          response.data.messages.length > 0
            ? response.data.messages[0]
            : "some error";
        dispatch(stopSubmit("login", { _error: message }));
      }
    });
  };
};
export const signOut = () => {
  return (dispatch) => {
    authAPI.signOut().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
};

export default authReducer;
