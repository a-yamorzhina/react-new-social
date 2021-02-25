const ADD_MESSAGE = 'ADD-MESSAGE';

type DialogType = {
  id: number
  name: string
  src: string
}

type MessagesType = {
  id: number
  message: string
}

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
  ] as Array<DialogType>,
  messages: [
    {id: 1, message: "Hi"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "Okay, okay"},
  ] as Array<MessagesType>
};

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        id: 8,
        message: action.newMessageBody,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    }
    default:
      return state;
  }
};

type SendMessageCreatorType = {
  type: typeof ADD_MESSAGE,
  newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorType => {
  return {
    type: ADD_MESSAGE,
    newMessageBody
  }
};

export default dialogsReducer;
