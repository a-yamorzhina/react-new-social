import React from 'react'
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsers, unfollowAC} from "../../redux/allUsers-reducer";
import AllUsers from "./AllUsers";


let mapStateToProps = (state) => {
  return {
    users: state.allUsersPage.users,
    pageSize: state.allUsersPage.pageSize,
    totalUsersCount: state.allUsersPage.totalUsersCount,
    currentPage: state.allUsersPage.currentPage
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
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount))
    }
  }
};

const AllUsersContainer = connect(mapStateToProps, mapDispatchToProps)(AllUsers);

export default AllUsersContainer;
