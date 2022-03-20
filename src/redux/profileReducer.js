import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS_PROFILE = "SET_STATUS_PROFILE";
const DELETE_POST = "DELETE_POST";

let initialState = {
  posts: [
    { id: 1, message: "Hello all", likeCount: 12 },
    { id: 2, message: "It's my first post", likeCount: 23 },
  ],
  profile: null,
  profileStatus: "",
};

export const profileReducer = (state = initialState, action) => {
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
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
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
export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId,
});

export const getProfile = (userId) => async (dispatch) => {
  let response = await profileAPI.getProfileId(userId);
  dispatch(setUserProfile(response.data));
};

export const getProfileStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getProfileStatusId(userId);
  dispatch(setProfileStatus(response.data));
};

export const putProfileStatus = (status) => async (dispatch) => {
  let response = await profileAPI.putProfileStatusId(status);
  if (response.data.resultCode === 0) {
    dispatch(setProfileStatus(status));
  }
};

export default profileReducer;
