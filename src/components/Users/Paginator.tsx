import React, {useState} from 'react';
import s from './Paginator.module.css';
import cn from 'classnames'


type PaginatorType = {
    currentPage: number
    onPageChanged: any
    pageSize: number
    totalItemCount: number
    // portionSize:number
}


const Paginator = (props: PaginatorType) => {
    let {currentPage} = props;
    let portionSize = 10;
    let pagesCount = Math.ceil(props.totalItemCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize
    return <div className={s.paginator}>
        {portionNumber > 1 &&
        <button className={s.button} onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>PREV</button>}
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
                return <span className={cn({[s.selectedPade]: currentPage === p},
                    s.pageNumber)}
                             key={p}
                             onClick={(event) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        {portionCount > portionNumber &&
        <button className={s.button} onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>NEXT</button>}
    </div>

}
export default Paginator;
