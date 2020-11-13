import React from "react"
import {connect} from "react-redux";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers, toggleFollowingProgress,
  toggleIsFetching,
  unfollow
} from "../../redux/allUsers-reducer";
import * as axios from "axios";
import AllUsers from "./AllUsers";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../API/api";

class AllUsersAPIContainer extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {

    if (this.props.users.length === 0) {
      this.props.toggleIsFetching(true);

      usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        // console.log(response);
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      })
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);

    usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    })
  };

  render() {
    return <>
      {/*<> - фрагмент, возвращающийся в качестве одного корневого элемента*/}
      {this.props.isFetching ? <Preloader/> : null}
      <AllUsers totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
      />
    </>

  }

}

let mapStateToProps = (state) => {
  return {
    users: state.allUsersPage.users,
    pageSize: state.allUsersPage.pageSize,
    totalUsersCount: state.allUsersPage.totalUsersCount,
    currentPage: state.allUsersPage.currentPage,
    isFetching: state.allUsersPage.isFetching,
    followingInProgress: state.allUsersPage.followingInProgress
  }
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId))
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId))
//     },
//     setUsers: (users) => {
//       dispatch(setUsers(users))
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber))
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountAC(totalCount))
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching))
//     }
//   }
// };

const AllUsersContainer = connect(mapStateToProps, {
  follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount,
  toggleIsFetching, toggleFollowingProgress
})(AllUsersAPIContainer);

export default AllUsersContainer;

