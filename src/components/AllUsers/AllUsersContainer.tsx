import React from "react"
import {connect} from "react-redux";
import {follow,requestUsers, unfollow} from "../../redux/allUsers-reducer";
// @ts-ignore
import AllUsers from "./AllUsers";
import Preloader from "../common/Preloader/Preloader";
// @ts-ignore
import {compose} from "redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount, getUsers
} from "../../redux/users-selectors";
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
  currentPage: number
  pageSize: number
  users: any
  isFetching: boolean
  totalUsersCount: number
  followingInProgress: Array<number>
}

type MapDispatchPropsType = {
  follow: (userID:number) => void,
  unfollow: (userID:number) => void
  requestUsers: (currentPage:number, pageSize:number) => void
}

// type OwnProps = {
//
// }


type PropsType = MapStatePropsType & MapDispatchPropsType

class AllUsersContainer extends React.Component<PropsType> {

  componentDidMount() {
    let {currentPage, pageSize } = this.props;
    // if (this.props.users.length === 0) {
      this.props.requestUsers(currentPage, pageSize);
    // }
  }

  onPageChanged = (pageNumber:number) => {
    let {pageSize} = this.props;
    this.props.requestUsers(pageNumber, pageSize);
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
                unfollow={this.props.unfollow}/>
    </>

  }

}

let mapStateToProps = (state: AppStateType):MapStatePropsType => {
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
  connect<MapStatePropsType, MapDispatchPropsType, AppStateType>(mapStateToProps, {
    requestUsers,
    follow, unfollow
  }),
)(AllUsersContainer);


