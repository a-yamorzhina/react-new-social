import React from 'react'
import {connect} from "react-redux";
import {followAC, setUsers, unfollowAC} from "../../redux/allUsers-reducer";
import AllUsersC from "./AllUsersC";


let mapStateToProps = (state) => {
  return {
    users: state.allUsersPage.users,
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsers(users))
    }
  }
};

const AllUsersContainer = connect(mapStateToProps, mapDispatchToProps)(AllUsersC);

export default AllUsersContainer;
