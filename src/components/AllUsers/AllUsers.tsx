import React from "react";
// @ts-ignore
import s from "./AllUsers.module.css";
import User from "./User/User";
// @ts-ignore
import userPh from "../../../src/assets/images/user.svg"
// @ts-ignore
import Paginator from "../common/Paginator/Paginator";
import {UserType} from "../../types/types";


type PropsType = {
  totalUsersCount: number
  pageSize: number
  onPageChanged: (pageNumber: number) => void
  currentPage: number
  users: Array<UserType>
  followingInProgress: Array<number>
  unfollow: (userID:number) => void
  follow: (userID:number) => void

}


let AllUsers: React.FC<PropsType> = ({currentPage, totalUsersCount, onPageChanged, pageSize, users, ...props}) => {

  let usersMap = () => {
    return users.map(
      u => <User
        key={u.id}
        follow={props.follow}
        unfollow={props.unfollow}
        followOrNot={u.followed}
        followingInProgress={props.followingInProgress}
        id={u.id}
        name={u.name}
        status={u.status}
        src={u.photos.small != null ? u.photos.small : userPh}
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
      <Paginator currentPage={currentPage}
                 totalItemsCount={totalUsersCount}
                 onPageChanged={onPageChanged}
                 pageSize={pageSize}/>
    </div>
  )
};


export default AllUsers;
