import {ActionsType} from "./redux-store";
import {ProfileType} from "../components/Profile/Profile";

export type StateType = {
    profilePage: ProfileType
    dialogsPage: DialogsPageType
    usersPage: usersPageType
    auth: any
}
export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type   DialogsPageType = {
    messages: MessageType[]
    dialogs: DialogType[]
    newMessageBody: string
}
export type MessageType = {
    id: number
    message: string
}
export type DialogType = {

    id: number
    name: string
}
export type  usersPageType = {
    users: UsersType[]
}
export type UsersType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: object
}
