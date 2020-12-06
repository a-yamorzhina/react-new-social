import s from "./Dialogs.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";


const AddMessageForm = (props) => {

  return (
  <form onSubmit={props.handleSubmit} className={s.textareaDiv}>
        <Field name={"newMessageBody"} placeholder={"Enter your message"} component={"textarea"} className={s.textareaStyle}> </Field>
    <button className={s.mainButton}>Send</button>
  </form>
  )}

export const AddMessageFormRedux = reduxForm ({form:'dialog-add-message-form'})(AddMessageForm)

