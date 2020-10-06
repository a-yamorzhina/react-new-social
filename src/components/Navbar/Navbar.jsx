import React from "react";
import s from "./Navbar.module.css";


const Navbar = (props) => {

  return (

    <nav className={s.nav}>
      <div className={s.navPosition}>
        {props.NavMas}
      </div>
      <div className={s.friendsPosition}>
        {props.FriendsMas}
      </div>
    </nav>
  )
};

export default Navbar;
