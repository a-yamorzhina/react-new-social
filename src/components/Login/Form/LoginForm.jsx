import React from "react";
import s from "../Login.module.css";
import miniUser from "../../../assets/images/mini-user.svg"
import key from "../../../assets/images/key.svg"
import {Field, reduxForm} from "redux-form";
import {required} from "../../../utils/validators/validators";
import {Input} from "../../common/FormsControls/FormsControls";


const LoginForm = (props) => {
  return (
        <form onSubmit={props.handleSubmit} className={s.form}>
          <div className={s.userName}>
            <label></label>
            <span className={s.icon}>
            <img className={s.userIcon} src={miniUser} alt="mini-user"/>
          </span>
            <Field component={Input} validate={[required]} name={"email"} className={s.input} placeholder='Email or username' type='text'/>
          </div>
          <div className={s.password}>
            <label></label>
            <span className={s.iconPassword}>
            <img className={s.passwordIcon} src={key} alt="password"/>
          </span>
            <Field component={Input} name={"password"} validate={[required]} className={s.input} placeholder='Password' type="password"/>
          </div>
          <div className={s.rememberMe}>
            <label className={s.rememberText}>
              <Field component={"input"} name={"rememberMe"} className={s.elementRememberMe} type="checkbox"/>
              Remember me
            </label>
          </div>
          { props.error &&
            <div className={s.formSummaryError}>
            {props.error}
          </div>
          }
          <button type="submit" className={s.submit}>Log Into Your Account</button>
        </form>
  )
};

const LoginReduxForm = reduxForm ({form: 'login'})(LoginForm)

export default LoginReduxForm;
