import React from "react";
import s from "./AllUsers.module.css";
import User from "./User/User";
import * as axios from 'axios'
import userPh from "../../../src/assets/images/user.svg"

class AllUsers extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    if (this.props.users.length === 0) {
      axios.get(`http://localhost:8080/users.json?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.setUsers(response.data.items);
        })
    }
  }

  usersMap = () => {
    return this.props.users.map(
      u => <User
        key={u.id}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        followOrNot={u.followed}
        id={u.id}
        locationCountry={u.location.country}
        locationCity={u.location.city}
        name={u.name}
        status={u.status}
        src={u.src != null ? u.src : userPh}
        friends={u.friends}
        groups={u.groups}
      />);
  };


  render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        <div className={s.firstWrap}>
          <div className={s.secondWrap}>
            <h3 className={s.h3}>All users</h3>
          </div>
        </div>
        <div className={s.pagesContainer}>
          {pages.map(p => {
            return <span key={p} className={s.page + ' ' + (this.props.currentPage === p ? s.selectedPage : s.unselectedPage)}>{p}</span>
          })}
        </div>
        <main className={s.main}>
          {this.usersMap()}
        </main>
      </div>
    )
  }
}

export default AllUsers ;
