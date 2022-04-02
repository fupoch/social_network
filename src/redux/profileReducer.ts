import { PhotosType, ProfileType } from './../types/types';
import { profileAPI, ResultCodesEnum } from "../api/api";
import { PostsType } from "../types/types";
import { ThunkAction } from 'redux-thunk';
import { AppStateType, InfernActionsType } from './reduxStore';

let initialState = {
  posts: [
    { id: 1, message: "Hello all", likeCount: 12 },
    { id: 2, message: "It's my first post", likeCount: 23 },
  ] as Array<PostsType>,
  profile: null as ProfileType | null,
  profileStatus: '',
  newPostBody: '',
};

export type InitialStateType = typeof initialState

export const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'ADD_POST': {
      let newPost = {
        id: 5,
        message: action.newPostBody,
        likeCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostBody: ''
      };
    }

    case 'SET_USER_PROFILE': {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case 'SET_STATUS_PROFILE': {
      return {
        ...state,
        profileStatus: action.profileStatus,
      };
    }
    case 'DELETE_POST': {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    }
    case 'SAVE_PHOTOS_SUCCESS': {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    }
    default:
      return state;
  }
};

type ActionsType = InfernActionsType<typeof actions>

export const actions = {
  addPostActionCreator: (newPostBody: string) => ({
    type: 'ADD_POST',
    newPostBody,
  } as const),
  
  setUserProfile: (profile: ProfileType) => ({
    type: 'SET_USER_PROFILE',
    profile,
  } as const),
  
  setProfileStatus: (profileStatus: string) => ({
    type: 'SET_STATUS_PROFILE',
    profileStatus,
  } as const),
  
  deletePost: (postId: number) => ({
    type: 'DELETE_POST',
    postId,
  } as const),
  
  savePhotoSuccess: (photos: PhotosType) => ({
    type: 'SAVE_PHOTOS_SUCCESS',
    photos,
  } as const),
}



type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const getProfile = (userId: number): ThunkType => async (dispatch) => {
  let profileData = await profileAPI.getProfileId(userId);
  dispatch(actions.setUserProfile(profileData));
};

export const getProfileStatus = (userId: number): ThunkType => async (dispatch) => {
  let profileData = await profileAPI.getProfileStatusId(userId);
  dispatch(actions.setProfileStatus(profileData));
};

export const putProfileStatus = (status: string): ThunkType => async (dispatch) => {
  try {
    let statusData = await profileAPI.putProfileStatusId(status);
    if (statusData.resultCode === ResultCodesEnum.Success) {
      dispatch(actions.setProfileStatus(status));
    }
  } catch (error) {
    console.log(error.status);
    debugger;
  }
};
export const savePhoto = (file: PhotosType): ThunkType => async (dispatch) => {
  let photoData = await profileAPI.savePhoto(file);
  if (photoData.resultCode === ResultCodesEnum.Success) {
    dispatch(actions.savePhotoSuccess(photoData.data.photos));
  }
};

export const editProfileData =
  (profile: ProfileType, setStatus): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const editData = await profileAPI.editProfileData(profile);

    if (editData.resultCode === ResultCodesEnum.Success) {
      dispatch(getProfile(userId));
    }
  };

export default profileReducer;
