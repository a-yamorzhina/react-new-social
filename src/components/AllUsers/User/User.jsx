import React from "react";
import s from "../AllUsers.module.css";
import {NavLink} from "react-router-dom";
import * as axios from "axios";


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
          <NavLink to={'/profile/' + props.id}>
            <img src={props.src} alt="ava" className={s.avaImg}/>
          </NavLink>
        </div>
        <div className={s.item}>
          <h4 className={s.h4}>
            {props.name}
          </h4>
          <p className={`${s.activity} ${s.mute}`}>
            {/*{props.locationCountry}, {props.locationCity}*/}
            {props.status}
          </p>
          {/*<ul className={s.connections}>*/}
          {/*<li>*/}
          {/*<span className={s.count}>{props.friends}</span>*/}
          {/*<p className={s.mute}>Friends</p>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*<span className={s.count}>{props.groups}</span>*/}
          {/*<p className={s.mute}>Groups</p>*/}
          {/*</li>*/}
          {/*</ul>*/}
        </div>
        {props.followOrNot
          ? <button className={s.secondButton} onClick={() => {
            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
              withCredentials: true,
              headers: {
                "API-KEY": "88b6ce23-82c2-4b75-8595-b3c7a16fb38a"
              }
            })
              .then(response => {
                if (response.data.resultCode === 0) {
                  changeToUnfollow(props.id);
                }
              });
          }}>
            Unfollow
          </button>
          : <button className={s.secondButton} onClick={() => {
            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {
              withCredentials: true,
              headers: {
                "API-KEY": "88b6ce23-82c2-4b75-8595-b3c7a16fb38a"
              }
            },)
              .then(response => {
                if (response.data.resultCode === 0) {
                  changeToFollow(props.id);
                }
              })
          }}>
            Follow
          </button>}

      </div>
    </div>
  )
};

export default User;
