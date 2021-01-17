import React from "react";
import s from "./AllUsers.module.css";
import User from "./User/User";
import userPh from "../../../src/assets/images/user.svg"
import Paginator from "../common/Paginator/Paginator";


let AllUsers = ({currentPage, totalUsersCount, onPageChanged, pageSize, users, ...props}) => {

 let usersMap = () => {
    return users.map(
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

    return (
      <div>
        <div className={s.firstWrap}>
          <div className={s.secondWrap}>
            <h3 className={s.h3}>All users</h3>
          </div>
        </div>
        <main className={s.main}>
          {usersMap()}
        </main>
        <Paginator currentPage = {currentPage}
                   totalItemsCount={totalUsersCount}
                   onPageChanged={onPageChanged}
                   pageSize={pageSize}/>
      </div>
    )
};


export default AllUsers;
