import React from "react";
import s from "../Login.module.css";
import miniUser from "../../../assets/images/mini-user.svg"
import key from "../../../assets/images/key.svg"
import {Field, reduxForm} from "redux-form";
import {required, unrequired} from "../../../utils/validators/validators";
import {createField, Input} from "../../common/FormsControls/FormsControls";


const LoginForm = ({handleSubmit, error, captchaUrl}) => {
  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <div className={s.userName}>
        <label></label>
        <span className={s.icon}>
            <img className={s.userIcon} src={miniUser} alt="mini-user"/>
          </span>
        {createField('Email or username', 'email', required, Input, 'text', 'input')}
      </div>
      <div className={s.password}>
        <label></label>
        <span className={s.iconPassword}>
            <img className={s.passwordIcon} src={key} alt="password"/>
          </span>
        {createField('Password', 'password', required, Input, 'password', 'input')}
      </div>
      <div className={s.rememberMe}>
        <label className={s.rememberText}>
          {createField(null, 'rememberMe', unrequired, Input, 'checkbox', 'elementRememberMe')}
          <span>Remember me</span>
        </label>
      </div>

      {captchaUrl && <img src={captchaUrl}/>}
      {captchaUrl && createField('Image symbols', 'captcha', required, Input, [], 'input')}

      {error &&
      <div className={s.formSummaryError}>
        {error}
      </div>
      }
      <button type="submit" className={s.submit}>Log Into Your Account</button>
    </form>
  )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default LoginReduxForm;
