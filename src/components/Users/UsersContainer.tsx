import React, {ComponentType} from 'react'
import {connect} from "react-redux";
import {
    follow, getUsersThunkCreator,
    setCurrentPage,
    toggleFollowingInProgress, unfollow,
    UserType
} from "../../redux/users-reduser";
import {AppStateType} from "../../redux/redux-store";
import Users from "./Users";
import {Preloader} from "../Preloader";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors.";


type MapStatePropsType = {
    users: UserType[]
    pageSize: any
    totalUsersCount: number
    currentPage: number
    onPageChanged: any
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}
type MapDispatchToPropsType = {

    setUsers: (users: UserType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: any) => void

}
type UsersPropsType = any

//MapStatePropsType & MapDispatchToPropsType

class UsersContainer extends React.Component <UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalItemCount={this.props.totalItemCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            /></>
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalItemCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowInProgress(state)
    }
}
export default compose<ComponentType>(
    WithAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingInProgress,
        getUsers: getUsersThunkCreator
    })
)(UsersContainer);
