import {profileAPI, usersAPI} from "../API/api";
import {stopSubmit} from "redux-form";
import {globalErrorOccurredThunk} from "./app-reducer";
import {PhotosType, PostMessagesType, ProfileType } from "../types/types";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';
const SAVE_PROFILE_SUCCESS = 'SAVE-PROFILE-SUCCESS';


let initialState = {
  postMessages: [
    {id: 1, message: "hi, how are you?", count: 5},
    {id: 2, message: "it's my first post. LOL", count: 6},
  ] as Array<PostMessagesType>,
  profile: null as ProfileType | null,
  status: '',
  postText: ' '
};

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action:any):InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 3,
        message: action.postText,
        count: 0
      };
      return {
        ...state,
        postMessages: [...state.postMessages, newPost],
        postText: ''
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      }
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: {...state.profile, photos: action.photos}
      }
    }
    case SAVE_PROFILE_SUCCESS: {
      return {
        ...state,
        profile: action.profile
      }
    }
    default:
      return state;
  }
};

type AddPostCreatorType = {
  type: typeof ADD_POST;
  postText:string
}

type SetUserProfileType = {
  type: typeof SET_USER_PROFILE,
  profile: ProfileType
}

type SetStatusType = {
  type: typeof SET_STATUS,
  status:string
}

type SavePhotoSuccessType = {
  type: typeof SAVE_PHOTO_SUCCESS,
  photos: PhotosType
}

export const addPostCreator = (postText:string):AddPostCreatorType => {
  return {
    type: ADD_POST,
    postText
  }
};


export const setUserProfile = (profile:ProfileType):SetUserProfileType => {
  return {
    type: SET_USER_PROFILE,
    profile: profile
  }
};

export const setStatus = (status:string):SetStatusType => {
  return {
    type: SET_STATUS,
    status: status
  }
};

export const savePhotoSuccess = (photos:PhotosType):SavePhotoSuccessType => {
  return {
    type: SAVE_PHOTO_SUCCESS,
    photos
  }
};


export const getProfile = (userId:number) => async (dispatch:any) => {
  let response = await profileAPI.profile(userId);
  dispatch(setUserProfile(response.data));
};

export const getStatus = (userId:number) => async (dispatch:any) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status:string) => async (dispatch:any) => {
  let response = await profileAPI.updateStatus(status);

  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  } else {
    // throw response.data.messages[0]
    dispatch(globalErrorOccurredThunk(response.data.messages[0]))
  }
};

export const savePhoto = (file:any) => async (dispatch:any) => {
  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile = (profile:ProfileType) => async (dispatch:any, getState:any) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile);

  if (response.data.resultCode === 0) {
    dispatch(getProfile(userId));
  } else {
    let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
    dispatch(stopSubmit('edit-profile', {_error: message}));
    return Promise.reject(message);
  }
};

export default profileReducer;
