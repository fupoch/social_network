import { createSelector } from "reselect";
import { AppStateType } from "./reduxStore";

const getUsers = (state: AppStateType) => {
  return state.usersPage.users;
};
export const getUsersSelector = (state: AppStateType) => {
  return getUsers(state).filter((u) => true);
};
export const getUserSuperSelector = createSelector(getUsers, (users) => {
  return users;
});
export const getPageSize = (state: AppStateType) => {
  return state.usersPage.pageSize;
};
export const getTotalUsersCount = (state: AppStateType) => {
  return state.usersPage.totalUsersCount;
};
export const getCurrentPage = (state: AppStateType) => {
  return state.usersPage.currentPage;
};
export const getIsFetching = (state: AppStateType) => {
  return state.usersPage.isFetching;
};
