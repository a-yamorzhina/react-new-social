import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "../Dialogs/DialogItem/DialogItem";
import NavLinkComp from "./NavLink/NavLinkComp";
import Friend from "../Friends/Friend/Friend";
import StoreContext from "../../StoreContext";
import Navbar from "./Navbar";


const NavbarContainer = () => {


  return <StoreContext.Consumer>
    {
      store => {

        let state = store.getState();

        let NavMas = state.sidebar.nav.map(
          n => <NavLinkComp route={n.route} name={n.name}/>
        );

        let FriendsMas = state.sidebar.friendsBlock.map(
          f => <Friend name={f.name} id={f.id} avatarSrc={f.src}/>
        );

        return <Navbar NavMas={NavMas} FriendsMas={FriendsMas}/>
      }
    }
  </StoreContext.Consumer>
};

export default NavbarContainer;
