import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";


const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink to='/profile' activeClassName={s.active} className={`${s.menuLink} ${s.textType}`}>Profile</NavLink>
      </div>
      <div>
        <NavLink to='/dialogs' activeClassName={s.active} className={`${s.menuLink} ${s.textType}`}>Messages</NavLink>
      </div>
      <div>
        <NavLink to='/news' activeClassName={s.active} className={`${s.menuLink} ${s.textType}`}>News</NavLink>
      </div>
      <div>
        <NavLink to='/music'activeClassName={s.active} className={`${s.menuLink} ${s.textType}`}>Music</NavLink>
      </div>
      <div>
        <NavLink to='/settings' activeClassName={s.active} className={`${s.menuLink} ${s.textType}`}>Settings</NavLink>
      </div>
    </nav>
  )
};

export default Navbar;
