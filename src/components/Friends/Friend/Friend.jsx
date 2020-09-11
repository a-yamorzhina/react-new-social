import React from 'react'
import s from '../Friends.module.css'


const Friend = (props) => {

  return (
    <div className={s.friendSmall}>
      <img src={props.avatarSrc} className={s.friendAvatarSmall} alt="friend"/>
      <p className={s.friendNameSmall}> {props.name} </p>
    </div>

  )
};


export default Friend;
