import {usersAPI} from "../API/api";
import {updateObjectsInArray} from "../utils/objects-helpers";
import {UserType} from "../types/types";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';



let initialState = {
  users: [] as Array<UserType>,
  pageSize: 4 as number,
  totalUsersCount: 0 as number,
  currentPage: 1 as number,
  isFetching: false,
  followingInProgress: [] as Array<number> //array of usersId
};

type InitialStateType = typeof initialState

const allUsersReducer = (state = initialState, action:any):InitialStateType => {
    switch (action.type) {
      case FOLLOW: {
        return {
          ...state,
          users: updateObjectsInArray(state.users, action.userId, ["id"], {followed: true})
        }
      }
      case UNFOLLOW: {
        return {
          ...state,
          users: updateObjectsInArray(state.users, action.userId, ["id"], {followed: false})
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
  };

type FollowSuccessType = {
  type: typeof FOLLOW,
  userId: number
}

type UnfollowSuccessType = {
  type: typeof UNFOLLOW,
  userId: number
}

type SetUsersType = {
  type: typeof SET_USERS,
  users: UserType
}

type SetCurrentPageType = {
  type: typeof SET_CURRENT_PAGE,
  currentPage: number
}

type TotalUsersCountType = {
  type: typeof SET_TOTAL_USERS_COUNT,
  count: number
}

type ToggleIsFetchingType = {
  type: typeof TOGGLE_IS_FETCHING,
  isFetching: boolean
}

type ToggleFollowingProgressType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching: boolean,
  userId: number
}

export const followSuccess = (userId:number):FollowSuccessType => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId:number):UnfollowSuccessType => ({type: UNFOLLOW, userId});
export const setUsers = (users:UserType):SetUsersType => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage:number):SetCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const setTotalUsersCount = (totalUsersCount:number):TotalUsersCountType => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching:boolean):ToggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching:boolean, userId:number):ToggleFollowingProgressType => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId
});

export const requestUsers = (page:number, pageSize:number) => async (dispatch:any) => {
  dispatch(toggleIsFetching(true));
  let data = await usersAPI.getUsers(page, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
  dispatch(setCurrentPage(page));
};

const followUnfollowFlow = async (dispatch:any, userId:number, apiMethod:any, actionCreator:any) => {
  dispatch(toggleFollowingProgress(true, userId));
  let response = await apiMethod(userId);
  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

export const follow = (userId:number) => async (dispatch:any) => {
  await followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
};

export const unfollow = (userId:number) => async (dispatch:any) => {
  await followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
};

export default allUsersReducer;
