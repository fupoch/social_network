import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS_PROFILE = "SET_STATUS_PROFILE";

let initialState = {
  posts: [
    { id: 1, message: "Hello all", likeCount: 12 },
    { id: 2, message: "It's my first post", likeCount: 23 },
  ],
  profile: null,
  profileStatus: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostBody,
        likeCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS_PROFILE: {
      return {
        ...state,
        profileStatus: action.profileStatus,
      };
    }

    default:
      return state;
  }
};

export const addPostActionCreator = (newPostBody) => ({
  type: ADD_POST,
  newPostBody,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setProfileStatus = (profileStatus) => ({
  type: SET_STATUS_PROFILE,
  profileStatus,
});

export const getProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfileId(userId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  };
};
export const getProfileStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getProfileStatusId(userId).then((response) => {
      dispatch(setProfileStatus(response.data));
    });
  };
};
export const putProfileStatus = (status) => {
  return (dispatch) => {
    profileAPI.putProfileStatusId(status).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setProfileStatus(status));
      }
    });
  };
};

export default profileReducer;
