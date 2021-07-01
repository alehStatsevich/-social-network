import {PostType} from "./state";
import {Dispatch} from "redux";
import {profileAPI, userAPI} from "../api/api";

export const ADD_POST = "ADD-POST";
export const DELETE_POST = "DELETE_POST";
export const SET_USER_PROFILE = "SET_USER_PROFILE";
export const SET_STATUS = "SET_STATUS";

type ProfilePageType = {
    status: string;
    posts: PostType[]
    newPostText: string
    profile: null

}

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi,how are you?', likesCount: 10},
        {id: 2, message: 'its my first post', likesCount: 18},
        {id: 3, message: 'i knows it', likesCount: 9}
    ],
    newPostText: "",
    profile: null,
    status: ""
}

export const profileReducer = (state = initialState, action: any): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)};
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}
export const addPostActionCreator = (newPostText: any) => {
    return {type: 'ADD-POST', newPostText} as const
}
export const deletePost = (postId: number) => {
    return {type: 'DELETE_POST', postId} as const
}
export const setStatus = (status: string) => {
    return {type: 'SET_STATUS', status} as const
}
export const setUsersProfile = (profile: null) => {
    return {type: 'SET_USER_PROFILE', profile} as const
}
//санкрейтор это функция которая возращает функцию санку ,Санка это функция которая принимает диспатчь и делает внутри
//асинхронные операции и различные мелкие диспатчи
export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    userAPI.getProfile(userId)
        .then(response => {
            dispatch(setUsersProfile(response.data));
        })
}
export const getStatus = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        })
}
export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
}

