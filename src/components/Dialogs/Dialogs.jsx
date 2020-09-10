import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

  let dialogs = [
    {id:1, name: "Tom Clinton"},
    {id:2, name: "Ciara Tess"},
    {id:3, name: "Jim Kerry"},
    {id:4, name: "Ariana Gray"},
  ];

  let messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "Okay, okay"},
  ];

  let dialogsMas = dialogs.map (
    d => <DialogItem name={d.name} id={d.id}/>
  );

  let messagesMas = messages.map (
    m => <Message message={m.message}/>
  );


  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        {dialogsMas}
      </div>
      <div className={s.messages}>
        {messagesMas}
      </div>
    </div>
  )
};


export default Dialogs;
