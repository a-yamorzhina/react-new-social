import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {AddMessageFormRedux} from "./AddMessageForm";


const Dialogs = (props) => {

  let dialogsMas = props.dialogsPage.dialogs.map(
    d => <DialogItem name={d.name} id={d.id} key={d.id} src={d.src}/>
  );

  let messagesMas = props.dialogsPage.messages.map(
    m => <Message message={m.message} key={m.id}/>
  );

  // debugger;

  const addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  }

  if(!props.isAuth) {
    return <Redirect to='/login'/>
  }


  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <div>
        </div>
        {dialogsMas}
      </div>
      <div className={s.messages}>
        {messagesMas}
      </div>
      <div>

      </div>
      <AddMessageFormRedux onSubmit={addNewMessage}/>
    </div>
  )
};


export default Dialogs;
