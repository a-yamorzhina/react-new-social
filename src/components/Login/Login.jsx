import React from "react";
import s from "./Login.module.css";
import avatar from "../../assets/images/user-guest.svg"
import miniUser from "../../assets/images/mini-user.svg"
import key from "../../assets/images/key.svg"


const Login = (props) => {
  return (
    <div className={s.overlay}>
      <div className={s.loginBlock}>
        <img className={s.avatarGuest} alt='avatar-guest' src={avatar}/>
        <h1 className={s.title}>Log into your account</h1>
        <form className={s.form}>
          <div className={s.userName}>
            <label></label>
            <span className={s.icon}>
            <img className={s.userIcon} src={miniUser} alt="mini-user"/>
          </span>
            <input className={s.input} placeholder='Email or username' type='text'/>
          </div>
          <div className={s.password}>
            <label></label>
            <span className={s.iconPassword}>
            <img className={s.passwordIcon} src={key} alt="password"/>
          </span>
            <input className={s.input} placeholder='Password' type="password"/>
          </div>
            <button type="submit" className={s.submit}>Log Into Your Account</button>
        </form>
      </div>
    </div>
  )
};

export default Login;
