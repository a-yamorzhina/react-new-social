import React from "react";
import s from "../Login.module.css";
import miniUser from "../../../assets/images/mini-user.svg"
import key from "../../../assets/images/key.svg"
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
  return (
        <form onSubmit={props.handleSubmit} className={s.form}>
          <div className={s.userName}>
            <label></label>
            <span className={s.icon}>
            <img className={s.userIcon} src={miniUser} alt="mini-user"/>
          </span>
            <Field component={"input"} name={"login"} className={s.input} placeholder='Email or username' type='text'/>
          </div>
          <div className={s.password}>
            <label></label>
            <span className={s.iconPassword}>
            <img className={s.passwordIcon} src={key} alt="password"/>
          </span>
            <Field component={"input"} name={"password"} className={s.input} placeholder='Password' type="password"/>
          </div>
          <div className={s.rememberMe}>
            <label className={s.rememberText}>
              <Field component={"input"} name={"rememberMe"} className={s.elementRememberMe} type="checkbox"/>
              Remember me
            </label>

          </div>
          <button type="submit" className={s.submit}>Log Into Your Account</button>
        </form>
  )
};

const LoginReduxForm = reduxForm ({form: 'login'})(LoginForm)

export default LoginReduxForm;
