import React from "react";
import s from "./Login.module.css";
import avatar from "../../assets/images/user-guest.svg"
import LoginReduxForm from "./Form/LoginForm";



const Login = (props) => {

  const onSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <div className={s.overlay}>
      <div className={s.loginBlock}>
        <img className={s.avatarGuest} alt='avatar-guest' src={avatar}/>
        <h1 className={s.title}>Log into your account</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
      </div>
    </div>
  )
};



export default Login;
