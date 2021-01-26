import React from "react";
import s from "./ProfileInfo.module.css";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {required, unrequired} from "../../../utils/validators/validators";
import {reduxForm} from "redux-form";


const ProfileDataForm = (handleSubmit) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>Full name:
        {createField('Full name', 'fullName', required, Input, 'text', 'input')}</div>

      <div>Looking for a job:
        {createField('', 'lookingForAJob', unrequired, Input, 'checkbox', 'elementRememberMe')}</div>

      <div>My professional skills:
        {createField('My professional skills', 'lookingForAJobDescription', unrequired, Textarea, 'input', 'input')}</div>

      <div>About me:
        {createField('About me', 'aboutMe', unrequired, Textarea, 'input', 'input')}</div>

      {/*<div className={s.contacts}>Contacts: {Object.keys(props.profile.contacts).map(key => {*/}
      {/*  return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>*/}
      {/*})}</div>*/}
      <button>Save</button>
    </form>)
};

export const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);


