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
      axios.get("http://localhost:8080/users.json")
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

    let pagesCount = this.props.totalUsersCount / this.props.pageSize;

    return (
      <div>
        <div className={s.firstWrap}>
          <div className={s.secondWrap}>
            <h3 className={s.h3}>All users</h3>
          </div>
        </div>
        <div>
          <span className={`${s.selectedPage} ${s.page}`}>1</span>
          <span className={`${s.unselectedPage} ${s.page}`}>2</span>
          <span className={`${s.unselectedPage} ${s.page}`}>3</span>
          <span className={`${s.unselectedPage} ${s.page}`}>4</span>
          <span className={`${s.unselectedPage} ${s.page}`}>5</span>
        </div>
        <main className={s.main}>
          {this.usersMap()}
        </main>
      </div>
    )
  }
}

export default AllUsers ;
