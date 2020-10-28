import React from "react";
import s from "./AllUsers.module.css";
import User from "./User/User";
import * as axios from 'axios'

const AllUsers = (props) => {


  if (props.users.length === 0) {

    axios.get("http://localhost:8080/users.json").then(response => {
      // console.log(response);
      // alert('bbbb');
      props.setUsers(response.data.items);
    })

  }

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
      src={u.src}
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
        {usersMas}
      </main>
    </div>
  )
};

export default AllUsers;
