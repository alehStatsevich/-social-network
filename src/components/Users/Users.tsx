import React from 'react';
import Paginator from "./Paginator";
import User, {UsersType} from "./User";

export type PropsType = {
    followingInProgress: Array<number>;
    users: Array<UsersType>;
    currentPage: number;
    pageSize: number;
    totalUsersCount: number;
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    onPageChanged: (p: number) => void;
}

let Users = (props: PropsType) => {
    return <div>
        <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                   totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}/>
        <div>
            {
                props.users.map((u) => <User user={u}
                                             key={u.id}
                                             follow={props.follow}
                                             unfollow={props.unfollow}
                                             followingInProgress={props.followingInProgress}
                />)
            }
        </div>
    </div>
}

export default Users;
