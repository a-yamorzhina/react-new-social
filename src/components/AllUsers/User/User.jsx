import React from "react";
import s from "../AllUsers.module.css";

const User = (props) => {

  let changeToUnfollow = (userId) => {
    props.unfollow(userId);
  };

  let changeToFollow = (userId) => {
    props.follow(userId);
  };

  return (
    <div key={props.id}>
      <div className={s.user}>
        <div className={s.avatar}>
          <a>
            <img src={props.src} alt="ava" className={s.avaImg}/>
          </a>
        </div>
        <div className={s.item}>
          <h4 className={s.h4}>
            {props.fullName}
          </h4>
          <p className={`${s.activity} ${s.mute}`}>
            {props.locationCountry}, {props.locationCity}
          </p>
          <ul className={s.connections}>
            <li>
              <span className={s.count}>{props.friends}</span>
              <p className={s.mute}>Friends</p>
            </li>
            <li>
              <span className={s.count}>{props.groups}</span>
              <p className={s.mute}>Groups</p>
            </li>
          </ul>
        </div>
        {props.followOrNot
          ? <button className={s.secondButton} onClick={() => {changeToUnfollow(props.id)} }>Unfollow</button>
          : <button className={s.secondButton} onClick={ () => {changeToFollow(props.id)} }>Follow</button>}

      </div>
    </div>
  )
};

export default User;
