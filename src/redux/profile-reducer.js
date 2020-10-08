const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postMessages: [
    {id: 1, message: "hi, how are you?", count: "5"},
    {id: 2, message: "it's my first post. LOL", count: "6"},
  ],
  newPostText: '',
};


const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
        let newPost = {
          id: 3,
          message: state.newPostText,
          count: 0
        };
        let stateCopy = {...state};
        stateCopy.postMessages = [...state.postMessages];
        stateCopy.postMessages.push(newPost);
        stateCopy.newPostText = '';
        return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = {...state};
      stateCopy.newPostText = action.newText;
      return stateCopy;
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

export default profileReducer;
