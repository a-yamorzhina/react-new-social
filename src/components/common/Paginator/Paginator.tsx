import React, {useState} from "react";
// @ts-ignore
import s from "./Paginator.module.css";
// @ts-ignore
import arrow from "../../../assets/images/left-arrow.svg";

type PropsType = {
  totalItemsCount: number
  pageSize: number
  onPageChanged: (pageNumber:number) => void
  currentPage: number
  portionSize?: number
}

const Paginator: React.FC<PropsType> = ({totalItemsCount, pageSize, onPageChanged, currentPage, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages:Array<number> = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / pageSize);
    let [portionNumber, setPortionNumber] = useState<number>(1);
    // if (portionNumber === null) portionNumber = 1;

    let leftPortionPageNumber = (portionNumber - 1) * portionSize +1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
      <div className={s.pagesContainer}>
        {portionNumber > 1 &&
        <button className={s.paginatorButton} onClick={() =>  {setPortionNumber(portionNumber - 1) }}>
          <img src={arrow} style={{width: '16px'}} />
        </button>}

          {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
            return <span onClick={(e) => {onPageChanged(p)}}
                         key={p}
                         className={s.page + ' ' + (currentPage === p ? s.selectedPage : s.unselectedPage)}>{p}</span>
          })}

        {portionCount > portionNumber &&
        <button className={s.paginatorButton} onClick={() =>  {setPortionNumber(portionNumber + 1) }}>
          <img src={arrow} style={{width: '16px',  transform: 'scaleX(-1)'}} />
        </button>}
      </div>
    )
};


export default Paginator;
