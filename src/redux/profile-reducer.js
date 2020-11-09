const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  postMessages: [
    {id: 1, message: "hi, how are you?", count: "5"},
    {id: 2, message: "it's my first post. LOL", count: "6"},
  ],
  newPostText: '',
  profile: null
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
          // postMessages.push(newPost),
          newPostText: '',
        };
        // stateCopy.postMessages = [...state.postMessages];
        // stateCopy.postMessages.push(newPost);
        // stateCopy.newPostText = '';
        // return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
      // stateCopy.newPostText = action.newText;
      // return stateCopy;
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
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

export default profileReducer;
