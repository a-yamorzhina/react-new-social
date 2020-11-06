import React from 'react'
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsers, unfollowAC} from "../../redux/allUsers-reducer";
import * as axios from "axios";
import AllUsers from "./AllUsers";

class AllUsersAPIContainer extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    if (this.props.users.length === 0) {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
          // console.log(response);
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
        })
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
      })
  };

  render() {
    return <AllUsers totalUsersCount={this.props.totalUsersCount}
                     currentPage={this.props.currentPage}
                     pageSize={this.props.pageSize}
                     onPageChanged={this.onPageChanged}
                     users={this.props.users}
                     follow={this.props.follow}
                     unfollow = {this.props.unfollow}/>

  }

}

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

const AllUsersContainer = connect(mapStateToProps, mapDispatchToProps)(AllUsersAPIContainer);

export default AllUsersContainer;
