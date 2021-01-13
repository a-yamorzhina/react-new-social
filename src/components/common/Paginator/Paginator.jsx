import React from "react";
import s from "./Paginator.module.css";

const Paginator = ({totalUsersCount, pageSize, onPageChanged, currentPage, ...props}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    // debugger;

    return (
      <div className={s.pagesContainer}>
          {pages.map(p => {
            return <span onClick={(e) => {onPageChanged(p)}}
                         key={p}
                         className={s.page + ' ' + (currentPage === p ? s.selectedPage : s.unselectedPage)}>{p}</span>
          })}
      </div>
    )
};


export default Paginator;
