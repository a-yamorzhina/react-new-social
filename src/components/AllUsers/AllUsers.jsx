import React from "react";
import s from "./AllUsers.module.css";
import User from "./User/User";
import userPh from "../../../src/assets/images/user.svg"

let AllUsers = (props) => {

 let usersMap = () => {
    return props.users.map(
      u => <User
        key={u.id}
        follow={props.follow}
        unfollow={props.unfollow}
        followOrNot={u.followed}
        toggleFollowingProgress={props.toggleFollowingProgress}
        followingInProgress={props.followingInProgress}
        id={u.id}
        // locationCountry={u.location.country}
        // locationCity={u.location.city}
        name={u.name}
        status={u.status}
        src={u.photos.small != null ? u.photos.small : userPh}
        // friends={u.friends}
        // groups={u.groups}
      />);
  };

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

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
            return <span onClick={(e) => {props.onPageChanged(p)}}
                         key={p}
                         className={s.page + ' ' + (props.currentPage === p ? s.selectedPage : s.unselectedPage)}>{p}</span>
          })}
        </div>
        <main className={s.main}>
          {usersMap()}
        </main>
      </div>
    )
};


export default AllUsers;
