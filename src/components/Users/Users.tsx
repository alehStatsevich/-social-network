import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../redux/users-reduser";
import {NavLink} from 'react-router-dom';
import axios from "axios";
import {PropsT} from "./UsersContainer";

export type PropsType = {
    users: UserType[]
    pageSize: any
    totalUsersCount: number
    currentPage: number
    onPageChanged: any
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: number[]
    toggleFollowingInProgress: (isFetching: boolean, userId:number) => void

}

let Users = (props: PropsType) => {
    {
        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        // @ts-ignore
        // @ts-ignore
        return <div>
            <div>
                {pages.map(p => {
                    // @ts-ignore
                    return <span className={props.currentPage === p && s.selectedPade}
                                 onClick={(event) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
    <span>
         <div>
             <NavLink to={'/profile/' + u.id}>
             <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.usersPhoto}/>
             </NavLink>
         </div>
       <div>
         {u.followed
             ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                 props.toggleFollowingInProgress(true, u.id)
                 axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                     withCredentials: true,
                     headers: {"API-KEY": "bee89b17-b2e5-4e71-b1fe-edf5e0a03340"}
                 })
                     .then(response => {
                         if (response.data.resultCode === 0) {
                             props.unfollow(u.id)
                         }
                         props.toggleFollowingInProgress(false, u.id)
                     });

             }}>Unfollow</button>
             : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                 props.toggleFollowingInProgress(true, u.id)
                 axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                     withCredentials: true,
                     headers: {"API-KEY": "bee89b17-b2e5-4e71-b1fe-edf5e0a03340"}
                 })
                     .then(response => {
                         if (response.data.resultCode == 0) {
                             props.follow(u.id)
                         }
                         props.toggleFollowingInProgress(false, u.id)
                     });

             }}>Follow</button>}
        </div>
     </span>
                    <span><span>
        <div>{u.fullName}</div>
        <div>{u.status}</div>
    </span>
    <span>
        <div>{'u.location.country'}</div>
        <div>{'u.location.city'}</div>
    </span>
                    </span>
                </div>)
            }
        </div>
    }
}
export default Users;
