import React from 'react'
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {


  return <StoreContext.Consumer>
    {
      store => {

        let state = store.getState();

        let sendMessage = () => {
          store.dispatch(sendMessageCreator());
        };

        let onMessageChange = (sendingMessage) => {
          store.dispatch(updateNewMessageTextCreator(sendingMessage));
        };

        return <Dialogs sendMessage={sendMessage}
                        onMessageChange={onMessageChange}
                        newMessageText={state.dialogsPage.newMessageText}
                        dialogs={state.dialogsPage.dialogs}
                        messages={state.dialogsPage.messages}/>
      }
    }
  </StoreContext.Consumer>

};


export default DialogsContainer;
