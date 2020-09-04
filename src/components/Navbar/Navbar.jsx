import React from "react";
import s from "./Navbar.module.css";


const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={`${s.menuLink} ${s.textType}`}>
        <a href='/profile'>Profile</a>
      </div>
      <div className={s.menuLink}>
        <a href='/dialogs'>Messages</a>
      </div>
      <div className={s.menuLink}>
        <a>News</a>
      </div>
      <div className={s.menuLink}>
        <a>Music</a>
      </div>
      <div className={s.menuLink}>
        <a>Settings</a>
      </div>
    </nav>
  )
};

export default Navbar;
