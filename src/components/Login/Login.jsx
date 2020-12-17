import React from "react";
import s from "./Login.module.css";
import avatar from "../../assets/images/user-guest.svg"
import LoginReduxForm from "./Form/LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";




const Login = (props) => {

  const onSubmit = (formData) => {
   props.login(formData.email, formData.password, formData.rememberMe)
  };

  if (props.isAuth) {
    return <Redirect to="/profile"/>
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

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {login})(Login);

// export default compose(
//   connect(mapStateToProps, {login}),
//   withRouter
// )(Login);
