import React from "react";
import s from "../AllUsers.module.css";
import {NavLink} from "react-router-dom";


const  User = (props) => {

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
          ? <button disabled={props.followingInProgress.some(id => id === props.id)} className={s.secondButton}
                    onClick={() => {props.unfollow(props.id)}}>
            Unfollow
          </button>
          : <button disabled={props.followingInProgress.some(id => id === props.id)} className={s.secondButton}
                    onClick={() => {props.follow(props.id)}}>
            Follow
          </button>}

      </div>
    </div>
  )
};

export default User;
