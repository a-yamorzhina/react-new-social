import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

  let state = props.store.getState();

  let sendMessage = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onMessageChange = (sendingMessage) => {
    props.store.dispatch(updateNewMessageTextCreator(sendingMessage));
  };


  return (
    <Dialogs sendMessage={sendMessage} onMessageChange={onMessageChange}
             newMessageText={state.dialogsPage.newMessageText}
             dialogs={state.dialogsPage.dialogs}
             messages={state.dialogsPage.messages}/>
  )
};


export default DialogsContainer;
