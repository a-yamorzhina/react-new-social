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
    </div>
  )
};


export default Dialogs;
