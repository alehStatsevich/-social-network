import {Dispatch} from "react";
import {stopSubmit} from "redux-form";
import {authAPI} from "../api/api";

const SET_USER_DATA = "auth/SET_USER_DATA";


let initialState: AuthStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};


export const authReducer = (state: AuthStateType = initialState, action: AuthActionType): AuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                id: action.userId,
                email: action.email,
                login: action.login,
                isAuth: true
            }
        default:
            return state
    }
}
// ACTIONS CREATORS

export const setUserDataAC = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) =>
    ({type: SET_USER_DATA, userId, email, login, isAuth} as const)


//thunks
export const getAuthUserDataTC = () => {
    return async (dispatch: Dispatch<AuthActionType>) => {
        let response = await authAPI.me()
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data
            dispatch(setUserDataAC(id, login, email, true))
        }
    }
}

export const LoginTC = (email: string, password: string, rememberMe: boolean) => {
    return async (dispatch: Dispatch<any>) => {
        let response = await authAPI.login(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserDataTC())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
            dispatch(stopSubmit("login", {_error: `${message}`}))
        }
    }
}

export const logoutTC = () => {
    return async (dispatch: Dispatch<AuthActionType>) => {
        let response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setUserDataAC(null, null, null, false))
        }
    }
}
//types
export type AuthStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
export type AuthActionType = ReturnType<typeof setUserDataAC>