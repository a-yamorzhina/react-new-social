import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {required, unrequired} from "../../../utils/validators/validators";
import {reduxForm} from "redux-form";
import s from '../Profile.module.css'



const ProfileDataForm = ({handleSubmit, profile, error}) => {
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

      <div>Contacts:
        {Object.keys(profile.contacts).map(key => {
        return <div key={key}> {key}:
          {createField(key, 'contacts.' +  key, [], Input, [], 'input')}
          </div>
      })}</div>

      {error &&
      <div className={s.formSummaryError}>
        {error}
      </div>
      }

      <button>Save</button>
    </form>)
};

export const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);


