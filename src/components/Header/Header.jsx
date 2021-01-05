import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Wikivoyage_Logo_-_White_on_violet.svg/250px-Wikivoyage_Logo_-_White_on_violet.svg.png'/>
        <div className={s.loginBlock}>
          {props.isAuth ?
            <div className={s.flexbox}>
              <span className={s.loginSpan}>{props.login}</span>
            <button className={s.log} onClick={props.logout}>Log out</button>
            </div> : <NavLink to={'/login'} className={s.log}>
            Login
          </NavLink> }

        </div>
    </header>
  )
};

export default Header;
