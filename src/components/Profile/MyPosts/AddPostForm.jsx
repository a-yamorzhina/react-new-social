import {Field, reduxForm} from "redux-form";
import s from "./MyPosts.module.css";
import React from "react";



const AddPostForm = (props) => {
  return (
  <form onSubmit={props.handleSubmit}>
    <Field component={"textarea"} name={"postText"} className={s.textareaStyle} placeholder={"Enter new post text"}/>
    <button type={"submit"} className={s.mainButton}>New post</button>
  </form>
  )}

export const NewPostReduxForm = reduxForm ({form: 'profile-add-post'})(AddPostForm)
