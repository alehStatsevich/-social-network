import {Dispatch} from "redux";
import {userAPI} from "../api/api";


export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
export const TOGGLE_IS_FETCHING_PROGRESS = 'TOGGLE_IS_FETCHING_PROGRESS';

export type UserType = {
    id: number
    photos: any
    followed: boolean
    fullName: string
    status: string
    location: any

}

export type initialStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}


let initialState: initialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                //делаем копию обьекта юзерс мапим если юзер ид ===action.userId(берем его из const followAC = (userId))
                // возращаем копию обьекта ...u ( {id: 1,followed:false, fullName: "Dima",) и меняем значение followed на противоположное
                //иначе возращаем не измененный обьект
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                //делаем копию обьекта юзерс мапим если юзер ид ===action.userId(берем его из const followAC = (userId))
                // возращаем копию обьекта ...u ( {id: 1,followed:false, fullName: "Dima",) и меняем значение followed на противоположное
                //иначе возращаем не измененный обьект
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            //делаем копию стейта,берем копию старых юзеров и добавляем к ним юзеров которые пришли из action.users
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FETCHING_PROGRESS : {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }

        default:
            return state;
    }
}
export const followSuccess = (userId: number) => {
    return {type: 'FOLLOW', userId} as const
}
export const unfollowSuccess = (userId: number) => {
    return {type: 'UNFOLLOW', userId} as const
}
export const setUsers = (users: UserType[]) => {
    return {type: 'SET_USERS', users} as const
}
export const setCurrentPage = (currentPage: number) => {
    return {type: SET_CURRENT_PAGE, currentPage: currentPage} as const
}
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {type: SET_TOTAL_USERS_COUNT, count: totalUsersCount} as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {type: TOGGLE_IS_FETCHING, isFetching} as const
}
export const toggleFollowingInProgress = (isFetching: boolean, userId: number) => {
    return {type: TOGGLE_IS_FETCHING_PROGRESS, isFetching, userId} as const
}

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage))

        const data = await userAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}
//thunk
export const follow = (userId: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
        const response = await userAPI.follow(userId)
        if (response.data.resultCode === 0) {
            dispatch(followSuccess(userId))
        }
        dispatch(toggleFollowingInProgress(false, userId))
    }
}
//thunk
export const unfollow = (userId: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
        const response = await userAPI.unfollow(userId)
        if (response.data.resultCode === 0) {
            dispatch(unfollowSuccess(userId))
        }
        dispatch(toggleFollowingInProgress(false, userId))
    }
}

export default usersReducer;
