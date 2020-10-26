import React from "react";
import s from "./AllUsers.module.css";
import User from "./User/User";

const AllUsers = (props) => {


  let usersMas = props.users.map(
    u => <User
      key={u.id}
      follow={props.follow}
      unfollow={props.unfollow}
      followOrNot={u.followed}
      id={u.id}
      locationCountry={u.location.country}
      locationCity={u.location.city}
      fullName={u.fullName}
      status={u.status}
      src={u.src}
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
