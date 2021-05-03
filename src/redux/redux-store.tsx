import {combineReducers, createStore} from "redux";
import {addPostActionCreator, profileReducer, updateNewTextActionCreator} from "./profile-reduser";
import {dialogsReducer, sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reduser";
import usersReducer, {follow, setCurrentPage, setUsers, unfollow} from "./users-reduser";

export type ActionsType =
    addPostType
    |sendMessageType
    |updateNewMessageBodyType
    |updateNewText
    |followType
    |unfollowType
    |setUsersType
    |setCurrentPageType
export type  addPostType = ReturnType<typeof addPostActionCreator>
export type sendMessageType = ReturnType<typeof sendMessageCreator>
export type updateNewMessageBodyType = ReturnType<typeof updateNewMessageBodyCreator>
export type updateNewText = ReturnType<typeof updateNewTextActionCreator>
export type followType = ReturnType<typeof follow>
export type unfollowType = ReturnType<typeof unfollow>
export type setUsersType = ReturnType<typeof setUsers>
export type setCurrentPageType = ReturnType<typeof setCurrentPage>


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
});
export type AppStateType = ReturnType<typeof rootReducer>
let store = createStore(rootReducer);


export default store;