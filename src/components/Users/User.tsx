import React from 'react';
import s from "./Users.module.css";
import {NavLink} from 'react-router-dom';
import userPhoto from "../../assets/images/user.png"

export type PropsType = {
    user: UsersType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: number[]


}
export type UsersType =
    {
        name: string,
        id: number,
        uniqueUrlName: null,
        photos: {
            small: string | undefined,
            large: string | undefined
        },
        status: null,
        followed: boolean,
        fullName: string
    }


let User = (props: PropsType) => {
    const {user} = props
    return <div>
        <span>
         <div>
             <NavLink to={'/profile/' + user.id}>
             <img src={user.photos?.small != null ? user.photos.small : userPhoto} className={s.usersPhoto}/>
             </NavLink>
         </div>
       <div>
         {user.followed
             ?
             <button
                 disabled={props.followingInProgress.some((id: string | number | null | undefined) => id === user.id)}
                 onClick={() => {

                     props.unfollow(user.id)
                 }}>Unfollow</button>
             : <button disabled={props.followingInProgress.some((id: number) => id === user.id)} onClick={() => {
                 props.follow(user.id)
             }}>Follow</button>}
        </div>
     </span>
        <span><span>
        <div>{user.fullName}</div>
        <div>{user.status}</div>
    </span>
    <span>
        <div>{'user.location.country'}</div>
        <div>{'user.location.city'}</div>
    </span>
                    </span>
    </div>

}

export default User;
