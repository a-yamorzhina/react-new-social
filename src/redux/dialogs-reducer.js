const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 8,
        message: state.newMessageText,
      };
      state.messages.push(newMessage);
      state.newMessageText = '';
      break;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      break;
    default:
      return state;
  }
  return state;
};


export const sendMessageCreator = () => {
  return {
    type: ADD_MESSAGE
  }
};

export const updateNewMessageTextCreator = (sendingMessage) => {

  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: sendingMessage
  }
};

export default dialogsReducer;
