import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

  let dialogsMas = props.dialogsPage.dialogs.map(
    d => <DialogItem name={d.name} id={d.id} key={d.id} src={d.src}/>
  );

  let messagesMas = props.dialogsPage.messages.map(
    m => <Message message={m.message} key={m.id}/>
  );

  // debugger;

  let onSendMessage = () => {
    props.sendMessage();
  };

  let onMessageChange = (e) => {
    let sendingMessage = e.target.value;
    props.onMessageChange(sendingMessage);
  };



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
      <div className={s.textareaDiv}>
        <textarea className={s.textareaStyle} value={props.dialogsPage.newMessageText}
                  onChange={onMessageChange}> </textarea>
        <button className={s.mainButton} onClick={onSendMessage}>Send</button>
      </div>
    </div>
  )
};


export default Dialogs;
