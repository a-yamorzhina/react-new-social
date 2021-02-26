// @ts-ignore
import {createSelector} from "reselect";
import {AppStateType} from "./redux-store";


const getUsersSimple = (state:AppStateType) => {
  return state.allUsersPage.users
};

export const getUsers = createSelector (getUsersSimple,
  (users:any) => {
  //@ts-ignore
  return users.filter(u => true);
});


export const getPageSize = (state:AppStateType) => {
  return state.allUsersPage.pageSize;
};

export const getTotalUsersCount = (state:AppStateType) => {
  return state.allUsersPage.totalUsersCount;
};


export const getCurrentPage = (state:AppStateType) => {
  return state.allUsersPage.currentPage;
};


export const getIsFetching = (state:AppStateType) => {
  return state.allUsersPage.isFetching;
};

export const getFollowingInProgress = (state:AppStateType) => {
  return state.allUsersPage.followingInProgress;
};

