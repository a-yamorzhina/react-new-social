import React from "react";
import NavLinkComp from "./NavLink/NavLinkComp";
import Friend from "../Friends/Friend/Friend";
import Navbar from "./Navbar";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
  return {
    NavMas: state.sidebar.nav.map(
      n => <NavLinkComp route={n.route} name={n.name} key={n.id}/>),
    FriendsMas: state.sidebar.friendsBlock.map(
      f => <Friend name={f.name} id={f.id} avatarSrc={f.src} key={f.id}/>)
  }
};

let mapDispatchToProps = (dispatch) => {
  return {}
};

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;
