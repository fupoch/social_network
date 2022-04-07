import { profileAPI, ResultCodesEnumWithCaptcha } from './../api/api';
import { authAPI, ResultCodesEnum, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import { ThunkAction } from "redux-thunk";
import { AppStateType, InfernActionsType } from "./reduxStore";
import { PhotosType } from '../types/types';

export type initialStateType = typeof initialState

export type initialStateType2 = {
  userId: number | null,
  login: string | null,
  email: string | null,
  isAuth: boolean,
  captchaUrl: string | null,
  photos: PhotosType
  toggleClass: boolean,
  toggleDarkMode: boolean
};

let initialState  = {
  userId: null as number | null,
  login: null as string | null,
  email: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null,
  photos:  null as PhotosType | null,
  toggleClass: true,
  toggleDarkMode: false
};

const authReducer = (state = initialState, action: ActionsType): initialStateType2 => {
  switch (action.type) {
    case 'SET_USER_DATA':
    case 'GET_CAPTCHA_URL':
      return {
        ...state,
        ...action.payload,
      };
      case 'SET_PHOTO':
        return {
          ...state,
          ...action.payload,
        };
        case 'SET_TOGGLE_CLASS':
          return {
            ...state,
            ...action.payload,
          };
          case 'SET_TOGGLE_DARK_MODE':
            return {
              ...state,
              ...action.payload,
            };
    default:
      return state;
  }
};

type ActionsType = InfernActionsType<typeof actions>

const actions = {
  setAuthUserData: (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
    type: 'SET_USER_DATA',
    payload: { userId, login, email, isAuth },
  }),
  setCaptchaUrlAction: (captchaUrl: string) => ({
    type: 'GET_CAPTCHA_URL',
    payload: { captchaUrl },
  }),
  setPhotoAction: (photos: PhotosType) => ({
    type: 'SET_PHOTO',
    payload: {photos}
  }),
  setToggleClass: (toggleClass: boolean) => ({
    type: 'SET_TOGGLE_CLASS',
    payload: {toggleClass}
  }),
  setDarkMode: (toggleDarkMode: boolean) => ({
    type: 'SET_TOGGLE_DARK_MODE',
    payload: {toggleDarkMode}
  })

}




type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const setDarkMode = (toggleDarkMode: boolean): ThunkType => 
  async (dispatch) => {

    dispatch(actions.setDarkMode(toggleDarkMode));
  };
  export const setToggleClass = (toggleClass: boolean): ThunkType => 
  async (dispatch) => {
    dispatch(actions.setToggleClass(toggleClass));
  };

export const getPhotos = (userId: number): ThunkType => async (dispatch) => {
  let profileData = await profileAPI.getProfileId(userId);
  dispatch(actions.setPhotoAction(profileData.photos));
};

export const getUserLogin = (): ThunkType => async (dispatch) => {
  let meData = await authAPI.loginDataGet();
  if (meData.resultCode === ResultCodesEnum.Success) {
    let { id, login, email } = meData.data;
    dispatch(actions.setAuthUserData(id, login, email, true));
    let profileData = await profileAPI.getProfileId(id);
    dispatch(actions.setPhotoAction(profileData.photos));
  }
};

export const signIn =
  (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => 
  {
    let loginData = await authAPI.signIn(email, password, rememberMe, captcha);
    debugger
    if (loginData.resultCode === ResultCodesEnum.Success) {
      debugger
      await dispatch(getUserLogin());

    } else {
      if (loginData.resultCode === ResultCodesEnumWithCaptcha.CaptchaIsRequired) {
        dispatch(getCaptchaUrl());
      }
      let message =
      loginData.messages.length > 0
          ? loginData.messages[0]
          : "some error";
      dispatch(stopSubmit("login", { _error: message }));
    }
  };

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  const captchaData = await securityAPI.getCaptchaUrl();
  const captchaUrl = captchaData.url;
  dispatch(actions.setCaptchaUrlAction(captchaUrl));
};

export const signOut = (): ThunkType => async (dispatch) => {
  let response = await authAPI.signOut();
  if (response.data.resultCode === 0) {
    dispatch(actions.setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
