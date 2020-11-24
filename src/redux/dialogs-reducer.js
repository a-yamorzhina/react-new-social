const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
  dialogs: [
    {
      id: 1,
      name: "Tom Clinton",
      src: "https://pbs.twimg.com/profile_images/649041329721249793/rKR879eg_400x400.jpg"
    },
    {
      id: 2,
      name: "Ciara Tess",
      src: "https://pbs.twimg.com/profile_images/631522304954994688/KZ40WT4X_400x400.jpg"
    },
    {id: 3, name: "Jim Kerry", src: "https://www.theplace.ru/archive/00_icons/921_icon_128.jpg"},
    {
      id: 4,
      name: "Ariana Gray",
      src: "https://ubisoft-avatars.akamaized.net/6a6ed758-2ad3-4aa2-9b3d-043c8f6e029c/default_256_256.png"
    },
    {
      id: 5,
      name: "Tom Cruz",
      src: "https://image1.thematicnews.com/uploads/topics/preview/00/05/67/03/d8c6011c8f_256crop.jpg"
    },
    {id: 6, name: "Andrew Belle", src: "https://a.wattpad.com/useravatar/lor-enzos.256.397320.jpg"},
  ],
  messages: [
    {id: 1, message: "Hi"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "Okay, okay"},
  ],
  newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        id: 8,
        message: state.newMessageText,
      };

      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: ''
      };
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      return {
        ...state,
        newMessageText: action.newText
      };
    }
    default:
      return state;
  }
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
