import {profileAPI, usersAPI} from "../API/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';

let initialState = {
  postMessages: [
    {id: 1, message: "hi, how are you?", count: "5"},
    {id: 2, message: "it's my first post. LOL", count: "6"},
  ],
  profile: null,
  status: '',
};


const profileReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export const addPostCreator = (postText) => {
  return {
    type: ADD_POST,
    postText
  }
};


export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile: profile
  }
};

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status: status
  }
};

export const savePhotoSuccess = (photos) => {
  return {
    type: SAVE_PHOTO_SUCCESS,
    photos
  }
};

export const getProfile = (userId) => async (dispatch) => {
  let response = await profileAPI.profile(userId);
  dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export default profileReducer;
