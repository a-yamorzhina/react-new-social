import React from "react"
import {connect} from "react-redux";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unfollow
} from "../../redux/allUsers-reducer";
import * as axios from "axios";
import AllUsers from "./AllUsers";
import Preloader from "../common/Preloader/Preloader";

 class AllUsersAPIContainer extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {

    if (this.props.users.length === 0) {
      this.props.toggleIsFetching(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true})
        .then(response => {
          // console.log(response);
          this.props.toggleIsFetching(false);
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
        })
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${pageNumber}&count=${this.props.pageSize}`, {withCredentials: true})
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
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
                     unfollow = {this.props.unfollow}
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
    isFetching: state.allUsersPage.isFetching
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

const AllUsersContainer = connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount,
                                  toggleIsFetching})(AllUsersAPIContainer);

export default AllUsersContainer;

