import {usersAPI} from "../API/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';


let initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
};


const allUsersReducer = (state = initialState, action) => {
    switch (action.type) {
      case FOLLOW: {
        return {
          ...state,
          users: state.users.map(u => {
            if (u.id === action.userId) {
              return {...u, followed: true}
            }
            return u;
          }),
        }
      }
      case UNFOLLOW: {
        return {
          ...state,
          users: state.users.map(u => {
            if (u.id === action.userId) {
              return {...u, followed: false}
            }
            return u;
          }),
        }
      }
      case SET_USERS: {
        return {...state, users: action.users}
      }
      case SET_CURRENT_PAGE: {
        return {...state, currentPage: action.currentPage}
      }
      case SET_TOTAL_USERS_COUNT: {
        return {...state, totalUsersCount: action.count}
      }
      case TOGGLE_IS_FETCHING: {
        return {...state, isFetching: action.isFetching}
      }
      case TOGGLE_IS_FOLLOWING_PROGRESS: {
        return {
          ...state,
          followingInProgress: action.isFetching
            ? [...state.followingInProgress, action.userId]
            : [state.followingInProgress.filter(id => id !== action.userId)]
        }
        //    пропускаем через фильтр только те айди, которые не равны пришедшему action.userId
      }
      default:
        return state;
    }
  }
;

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId
});

export const requestUsers = (page, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  let data = await usersAPI.getUsers(page, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
  dispatch(setCurrentPage(page));
};

export const follow = (userId) => async (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId));
  let response = await usersAPI.follow(userId);
  if (response.data.resultCode === 0) {
    dispatch(followSuccess(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

export const unfollow = (userId) => async (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId));
  let response = await usersAPI.unfollow(userId);
  if (response.data.resultCode === 0) {
    dispatch(unfollowSuccess(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

export default allUsersReducer;
