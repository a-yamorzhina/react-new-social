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
    axios.get("http://localhost:8080/users.json")
      .then(response => {
        this.props.setUsers(response.data.items);
      })
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
    return (
      <div>
        <div className={s.firstWrap}>
          <div className={s.secondWrap}>
            <h3 className={s.h3}>All users</h3>
          </div>
        </div>
        <main className={s.main}>
          {/*<button onClick={this.getUsers}>Get Users</button>*/}
          {this.usersMap()}
        </main>
      </div>
    )
  }
}

export default AllUsers ;
