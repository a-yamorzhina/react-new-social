import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

  let dialogsMas = props.state.dialogs.map (
    d => <DialogItem name={d.name} id={d.id} src={d.src}/>
  );

  let messagesMas = props.state.messages.map (
    m => <Message message={m.message}/>
  );

  let newMessageElement = React.createRef();

  let sendMessage = () => {
    props.addMessage();
  };

  let onMessageChange = () => {
    let sendingMessage = newMessageElement.current.value;
    props.updateNewMessageText(sendingMessage);
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
        <textarea className={s.textareaStyle} value={props.state.newMessageText} ref={newMessageElement} onChange={onMessageChange}> </textarea>
        <button className={s.mainButton} onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
};


export default Dialogs;
