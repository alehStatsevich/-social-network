import {applyMiddleware, combineReducers, createStore} from "redux";
import {addPostActionCreator, profileReducer} from "./profile-reduser";
import {dialogsReducer, sendMessageCreator} from "./dialogs-reduser";
import usersReducer, {follow, setCurrentPage, setUsers, unfollow} from "./users-reduser";
import {authReducer} from "./auth-reduser";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';
import appReducer from "./app-reduser";

export type ActionsType =
    addPostType
    | sendMessageType
    | followType
    | unfollowType
    | setUsersType
    | setCurrentPageType
export type  addPostType = ReturnType<typeof addPostActionCreator>
export type sendMessageType = ReturnType<typeof sendMessageCreator>
export type followType = ReturnType<typeof follow>
export type unfollowType = ReturnType<typeof unfollow>
export type setUsersType = ReturnType<typeof setUsers>
export type setCurrentPageType = ReturnType<typeof setCurrentPage>


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});
export type AppStateType = ReturnType<typeof rootReducer>
let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


export default store;