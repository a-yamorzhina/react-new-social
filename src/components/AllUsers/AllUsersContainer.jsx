import React from "react"
import {connect} from "react-redux";
import {
  follow, followSuccess, getUsers,
  setCurrentPage,
  toggleFollowingProgress, unfollow, unfollowSuccess,
} from "../../redux/allUsers-reducer";
import AllUsers from "./AllUsers";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";



class AllUsersContainer extends React.Component {

  componentDidMount() {

    if (this.props.users.length === 0) {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
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
    users: state.allUsersPage.users,
    pageSize: state.allUsersPage.pageSize,
    totalUsersCount: state.allUsersPage.totalUsersCount,
    currentPage: state.allUsersPage.currentPage,
    isFetching: state.allUsersPage.isFetching,
    followingInProgress: state.allUsersPage.followingInProgress
  }
};

export default  compose(
  connect(mapStateToProps, {
    followSuccess, unfollowSuccess, setCurrentPage, toggleFollowingProgress, getUsers,
    follow, unfollow
  }),
  withAuthRedirect,
)(AllUsersContainer);


