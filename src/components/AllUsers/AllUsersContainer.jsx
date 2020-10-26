import React from 'react'
import {connect} from "react-redux";
import AllUsers from "./AllUsers";
import {followAC, setUsers, unfollowAC} from "../../redux/allUsers-reducer";


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

const AllUsersContainer = connect(mapStateToProps, mapDispatchToProps)(AllUsers);

export default AllUsersContainer;
