import {Field, reduxForm} from "redux-form";
import s from "./MyPosts.module.css";
import React from "react";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
  return (
  <form onSubmit={props.handleSubmit}>
    <Field component={Textarea} name={"postText"} className={s.textareaStyle} placeholder={"Enter new post text"}
    validate={[required, maxLength10]}/>
    <button type={"submit"} className={s.mainButton}>New post</button>
  </form>
  )}

export const NewPostReduxForm = reduxForm ({form: 'profile-add-post'})(AddPostForm)

