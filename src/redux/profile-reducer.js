const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        message: state.newPostText,
        count: 0
      };
      state.postMessages.push(newPost);
      state.newPostText = '';
      break;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      break;
    default:
      return state;
  }
  return state;
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
