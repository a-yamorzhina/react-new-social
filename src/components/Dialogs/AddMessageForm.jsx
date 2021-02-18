import s from "./Dialogs.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
  return (
  <form onSubmit={props.handleSubmit} className={s.textareaDiv}>
        <Field name={"newMessageBody"}
               placeholder={"Enter your message"}
               component={Textarea}
               className={s.textareaStyle}
               validate={[required, maxLength100]}>
        </Field>
    <button className={s.mainButton}>Send</button>
  </form>
  )};

export const AddMessageFormRedux = reduxForm ({form:'dialog-add-message-form'})(AddMessageForm);

