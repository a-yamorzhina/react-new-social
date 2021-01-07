import {createSelector} from "reselect";

const getUsersSimple = (state) => {
  return state.allUsersPage.users
};

export const getUsers = createSelector (getUsersSimple, (users) => {
  return users.filter(u => true);
});


export const getPageSize = (state) => {
  return state.allUsersPage.pageSize;
};

export const getTotalUsersCount = (state) => {
  return state.allUsersPage.totalUsersCount;
};


export const getCurrentPage = (state) => {
  return state.allUsersPage.currentPage;
};


export const getIsFetching = (state) => {
  return state.allUsersPage.isFetching;
};

export const getFollowingInProgress = (state) => {
  return state.allUsersPage.followingInProgress;
};

