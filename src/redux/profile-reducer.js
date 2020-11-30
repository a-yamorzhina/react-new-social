import {profileAPI, usersAPI} from "../API/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

let initialState = {
  postMessages: [
    {id: 1, message: "hi, how are you?", count: "5"},
    {id: 2, message: "it's my first post. LOL", count: "6"},
  ],
  newPostText: '',
  profile: null,
  status: '',
};


const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
        let newPost = {
          id: 3,
          message: state.newPostText,
          count: 0
        };
        return  {
          ...state,
          postMessages: [...state.postMessages, newPost],
          newPostText: '',
        };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return  {
        ...state,
        status: action.status,
      }
    }
    default:
      return state;
  }
};

export const addPostCreator = () => {
  return {
    type: ADD_POST
  }
};

export const updateNewPostTextCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
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
}


export const getProfile = (userId) => {
  return (dispatch) => {
    profileAPI.profile(userId).then(response => {
      dispatch(setUserProfile(response.data));
    })
  }
};

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId)
      .then(response => {
        dispatch(setStatus(response.data));
    })
  }
};

export const  updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(setStatus(status));
        }
      });
  };

export default profileReducer;
