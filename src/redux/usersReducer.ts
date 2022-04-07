import { AppStateType, InfernActionsType } from './reduxStore';
import { UserType } from './../types/types';
import { ResultCodesEnum, usersAPI } from "../api/api";
import { PhotosType } from "../types/types";
import { Dispatch } from 'redux';
import { ThunkAction, ThunkActionDispatch } from 'redux-thunk';




let initialState = {
  users: [] as Array<UserType>,
  pageSize: 5 as number,  
  totalUsersCount: 0 as number, 
  currentPage: 1 as number,
  isFetching: true as boolean,
  followingInProgress: [] as Array<number> // array of users id
};

type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'FOLLOW':
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case 'UNFOLLOW':
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case 'SET_USERS':
      return { ...state, users: action.users };
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.currentPage };
    case 'SET_TOTAL_USERS_COUNT':
      return { ...state, totalUsersCount: action.count };
    case 'TOGGLE_IS_FETCHING':
      return { ...state, isFetching: action.isFetching };
      case 'TOGGLE_IS_FOLLOWING_PROGRESS':
      return { 
        ...state,
        followingInProgress: action.isFetching
      ? [...state.followingInProgress, action.userId]
      : state.followingInProgress.filter(id => id != action.userId)
      }
    default:
      return state;
  }
};

type ActionsTypes = InfernActionsType<typeof actions>

export const actions = {
followSuccess: (userId: number)=> ({ type: 'FOLLOW', userId } as const),
unfollowSuccess: (userId: number) => ({
    type: 'UNFOLLOW',
    userId,
  } as const),
setUsers: (users:  Array<UserType>) => ({
    type: 'SET_USERS',
    users,
  } as const),
  
setCurrentPage: (currentPage: number) => ({
    type: 'SET_CURRENT_PAGE',
    currentPage,
  } as const),
setTotalUsersCount: (totalUsersCount: number) => ({
    type: 'SET_TOTAL_USERS_COUNT',
    count: totalUsersCount,
  } as const),
   toggleIsFetching: (isFetching: boolean) => ({
    type: 'TOGGLE_IS_FETCHING',
    isFetching,
  } as const),
toggleFollowingInProgress: (isFetching: boolean, userId: number) => ({
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
    isFetching,
    userId
  } as const),
  
}


type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getUsers = (currentPage: number, pageSize: number, term: string): ThunkType => async (dispatch, getState, ) => {
  debugger
  dispatch(actions.toggleIsFetching(true));
  let response = await usersAPI.getUsers(currentPage, pageSize, term);
  dispatch(actions.toggleIsFetching(false));
  dispatch(actions.setUsers(response.items));
  dispatch(actions.setTotalUsersCount(response.totalCount));
};

export const follow = (userId: number): ThunkType => async (dispatch) => {
  dispatch(actions.toggleFollowingInProgress(true, userId))
  let followData = await usersAPI.follow(userId);
  if (followData.resultCode === ResultCodesEnum.Success) {
    dispatch(actions.followSuccess(userId));
  }
  dispatch(actions.toggleFollowingInProgress(false, userId))
};

export const unfollow = (userId: number): ThunkType => async (dispatch) => {
  dispatch(actions.toggleFollowingInProgress(true, userId))
  let unfollowData = await usersAPI.unfollow(userId);
  if (unfollowData.resultCode === ResultCodesEnum.Success) {
    dispatch(actions.unfollowSuccess(userId));
  }
  dispatch(actions.toggleFollowingInProgress(false, userId))
};

export default usersReducer;
