import { createSelector } from "reselect";

const getUsers = (state) => {
  return state.usersPage.users;
};
export const getUsersSelector = (state) => {
  return getUsers(state).filter((u) => true);
};
export const getUserSuperSelector = createSelector(getUsers, (users) => {
  return users;
});
export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};
export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
};
export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};
export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};
