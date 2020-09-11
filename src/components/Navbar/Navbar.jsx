import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "../Dialogs/DialogItem/DialogItem";
import NavLinkComp from "./NavLink/NavLinkComp";
import Friend from "../Friends/Friend/Friend";


const Navbar = (props) => {

let NavMas = props.state.nav.map (
  n => <NavLinkComp route={n.route} name={n.name}/>
);

let FriendsMas = props.state.friendsBlock.map(
  f => <Friend name={f.name} id={f.id} avatarSrc={f.src}/>
);



  return (

    <nav className={s.nav}>
      <div className={s.navPosition}>
        {NavMas}
      </div>
      <div className={s.friendsPosition}>
        {FriendsMas}
      </div>
    </nav>
  )
};

export default Navbar;
