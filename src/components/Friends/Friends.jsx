import React from 'react'
import s from './Friends.module.css'
import StoreContext from "../../StoreContext";


const Friends = () => {

  return <StoreContext.Consumer>
    {
      store => {
        return <div className={s.friends}>
          Friends
        </div>
      }
    }
      </StoreContext.Consumer>
};


export default Friends;
