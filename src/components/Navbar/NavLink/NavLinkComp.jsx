import React from "react";
import s from "../Navbar.module.css";
import {NavLink} from "react-router-dom";

const NavLinkComp = (props) => {


  return (

    <NavLink to={props.route} activeClassName={s.active}
             className={`${s.menuLink} ${s.textType}`}>{props.name}</NavLink>

  )
};

export default NavLinkComp;
