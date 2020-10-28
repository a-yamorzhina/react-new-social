import React from "react";
import s from "./AllUsers.module.css";
import User from "./User/User";
import * as axios from 'axios'
import userPh from "../../../src/assets/images/user.svg"

const AllUsers = (props) => {

  let getUsers = () => {

    if (props.users.length === 0) {

      axios.get("http://localhost:8080/users.json").then(response => {
        props.setUsers(response.data.items);
      })

    }

  };

  let usersMas = props.users.map(
    u => <User
      key={u.id}
      follow={props.follow}
      unfollow={props.unfollow}
      followOrNot={u.followed}
      id={u.id}
      locationCountry={u.location.country}
      locationCity={u.location.city}
      name={u.name}
      status={u.status}
      src={u.src != null ? u.src : userPh}
      friends={u.friends}
      groups={u.groups}
    />
  );

  return (
    <div>
      <div className={s.firstWrap}>
        <div className={s.secondWrap}>
          <h3 className={s.h3}>All users</h3>
        </div>
      </div>
      <main className={s.main}>
        <button onClick={getUsers}>Get Users</button>
        {usersMas}
      </main>
    </div>
  )
};

export default AllUsers;
