import React, {ComponentType} from 'react'
import {connect, ConnectedProps} from "react-redux";
import {
    follow, getUsersThunkCreator,
    initialStateType,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingInProgress, toggleIsFetching, unfollow,
    UserType
} from "../../redux/users-reduser";
import {AppStateType} from "../../redux/redux-store";
import Users from "./Users";
import Preloader from "../Preloader";
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

class UsersContainer extends React.Component <UsersPropsType>{
    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize);
        // this.props.toggleIsFetching(true);
        // userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(data.items);
        //     this.props.setTotalUsersCount(data.totalCount);
        // });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        // this.props.setCurrentPage(pageNumber);
        // this.props.toggleIsFetching(true);
        // userAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //     });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                   followingInProgress={this.props.followingInProgress}
            /></>
    }
}

// let mapStateToProps = (state: AppStateType) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }
let mapStateToProps = (state: AppStateType) => {
    return {
        users:  getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount:  getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching:  getIsFetching(state),
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
        getUsers:getUsersThunkCreator
    })
)(UsersContainer);
// let mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId));
//             //диспатчим результат работы followAC
//         },
//         unfollow: (userId: number) => {
//             dispatch(followAC(userId));
//         },
//         setUsers:(users: UserType[]) => {
//         dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber: number) =>{
//             dispatch(setCurrentPageAC (pageNumber))
//         },
//         setTotalUsersCount: (totalCount: number) =>{
//             dispatch(setTotalUsersCountAC (totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean)=> {
//             dispatch( toggleIsFetching(isFetching))
//         }
//     }
// }
//переделали без АС
// export default connect(mapStateToProps, {
//     follow,
//     unfollow,
//     setUsers,
//     setCurrentPage,
//     setTotalUsersCount,
//     toggleIsFetching,
//     toggleFollowingInProgress
// })(UsersContainer);

// let withRedirect = WithAuthRedirect(UsersContainer)
// const connector = connect(mapStateToProps, {
//     follow,
//     unfollow,
//     // setUsers,
//     setCurrentPage,
//     // setTotalUsersCount,
//     // toggleIsFetching,
//     toggleFollowingInProgress,
//     getUsers:getUsersThunkCreator
// })
// export type PropsT = ConnectedProps<typeof connector>
// export default connector(withRedirect);
