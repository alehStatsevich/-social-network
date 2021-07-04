import React from 'react';
import s from './Paginator.module.css'

type PaginatorType = {
    currentPage: number
    onPageChanged: any
    pageSize: number
    totalUsersCount: number
}

let Paginator = (props: PaginatorType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        {pages.map(p => {
            // @ts-ignore
            return <span className={props.currentPage === p && s.selectedPade}
                         onClick={(event) => {
                             props.onPageChanged(p)
                         }}>{p}</span>
        })}
    </div>

}
export default Paginator;
