import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Wikivoyage_Logo_-_White_on_violet.svg/250px-Wikivoyage_Logo_-_White_on_violet.svg.png'/>
        <div className={s.loginBlock}>
          {props.isAuth ? props.login : <NavLink to={'/login'} className={s.loginLink}>
            login
          </NavLink> }

        </div>
    </header>
  )
};

export default Header;
