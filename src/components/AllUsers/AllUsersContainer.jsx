import React from "react"
import {connect} from "react-redux";
import {
  follow, followSuccess, requestUsers,
  setCurrentPage,
  toggleFollowingProgress, unfollow, unfollowSuccess,
} from "../../redux/allUsers-reducer";
import AllUsers from "./AllUsers";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount, getUsers
} from "../../redux/users-selectors";


class AllUsersContainer extends React.Component {

  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.requestUsers(pageNumber, this.props.pageSize);
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
                followingInProgress={this.props.followingInProgress}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
      />
    </>

  }

}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
};

export default compose(
  connect(mapStateToProps, {
    followSuccess, unfollowSuccess, setCurrentPage, toggleFollowingProgress, requestUsers,
    follow, unfollow
  }),
)(AllUsersContainer);


