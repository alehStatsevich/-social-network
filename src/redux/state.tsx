import {addPostActionCreator, profileReducer, updateNewTextActionCreator} from "./profile-reduser";
import {dialogsReducer, sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reduser";
import {ActionsType} from "./redux-store";

//перенесли в profile-reduser,dialogs-reduser
// const ADD_POST = "ADD-POST";
// const UPDATE_NEW_POST_TEXT ="UPDATE-NEW-POST-TEXT";
// const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
// const SEND_MESSAGE = "SEND-MESSAGE"

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    usersPage:usersPageType
}
export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
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
    fullName:string
    status:string
    location: object
}
// export type LocationType = {
//     city: string
//     country: string
// }

// export type ActionsType =
//     addPostType
//     |sendMessageType
//     |updateNewMessageBodyType
//     |updateNewText
//     |followType
//     |unfollowType
//     |setUsersType
// |setCurrentPageType
// export type  addPostType = ReturnType<typeof addPostActionCreator>
// export type sendMessageType = ReturnType<typeof sendMessageCreator>
// export type updateNewMessageBodyType = ReturnType<typeof updateNewMessageBodyCreator>
// export type updateNewText = ReturnType<typeof updateNewTextActionCreator>
// export type followType = ReturnType<typeof followAC>
// export type unfollowType = ReturnType<typeof unfollowAC>
// export type setUsersType = ReturnType<typeof setUsersAC>
// export type setCurrentPageType = ReturnType<typeof setCurrentPageAC>

//
// let store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'Hi,how are you?', likesCount: 10},
//                 {id: 2, message: 'its my first post', likesCount: 18},
//                 {id: 3, message: 'i knows it', likesCount: 9}
//
//             ],
//             newPostText: ""
//         },
//         dialogsPage: {
//             messages: [
//                 {id: 1, message: 'Hi'},
//                 {id: 2, message: 'How is your'},
//                 {id: 3, message: 'Yo'},
//                 {id: 4, message: 'Yo'},
//                 {id: 5, message: 'Yo'}
//             ],
//             dialogs: [
//                 {id: 1, name: 'Dima'},
//                 {id: 2, name: 'Andrey'},
//                 {id: 3, name: 'Sveta'},
//                 {id: 4, name: 'Sasha'},
//                 {id: 5, name: 'Viktor'},
//                 {id: 6, name: 'Valera'}
//             ],
//             newMessageBody: ""
//         },
//         usersPage: {
//             users: [
//                 {
//                     id: 1,
//                     photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSujODEKwrdvmj6jufsQRsId0hv3Wr6vfppsA&usqp=CAU',
//                     followed: false,
//                     fullName: "Dima",
//                     status: "Hello",
//                     location: {city: "Minsk", country: "Belarus"}
//                 },
//                 {
//                     id: 2,
//                     photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBR5SL43JjDN9N0r_q0FLWhi1WSTq1nDi_Q&usqp=CAU',
//                     followed: false,
//                     fullName: "Eska",
//                     status: "Hello",
//                     location: {city: "Brest", country: "Belarus"}
//                 },
//                 {
//                     id: 3,
//                     photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI3DxknKrLBlFGLEtUQmCbc0adqoOYc0VLYQ&usqp=CAU',
//                     followed: true,
//                     fullName: "Leonid",
//                     status: "Hello",
//                     location: {city: "Lida", country: "Belarus"}
//                 }
//             ],
//         },
//     },
//     getState() {
//         return this._state;
//     },
//     subscribe(observer: () => void) {
//         this._callSubscriber = observer;
//     },
//     _callSubscriber() {
//         console.log('State changed')
//     },
//
//     dispatch(action) { //{type: 'ADD-POST'}
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._callSubscriber();
//     }
// }
// export default store;
//перенесли в profile-reduser,dialogs-reduser переделываем в switch
// if (action.type === 'ADD-POST') {
//     let newPost: PostType = {
//         id: 5,
//         message: action.newPost,
//         likesCount: 0
//     };
//     this._state.profilePage.posts.push(newPost);
//     this._state.profilePage.newPostText="";
//     this._callSubscriber();//функция отрисовывает посты
// }
// else if (action.type === 'UPDATE-NEW-POST-TEXT'){
//     this._state.profilePage.newPostText = action.newPostText
//     this._callSubscriber();
// }else if(action.type === 'UPDATE-NEW-MESSAGE-BODY'){
//     this._state.dialogsPage.newMessageBody = action.body;
//     this._callSubscriber(this._state);
// }else if(action.type === 'SEND-MESSAGE'){
//     let body = this._state.dialogsPage.newMessageBody;
//     this._state.dialogsPage.newMessageBody = '';
//     this._state.dialogsPage.messages.push({id: 6, message: body})
//     this._callSubscriber(this._state);
// }

//перенесли в reduser
// export const addPostActionCreator = ( newPost: string) => {
//     return{type: 'ADD-POST', newPost: newPost} as const
// }
// export const updateNewTextActionCreator = ( newPostText: string) => {
//     return {type: 'UPDATE-NEW-POST-TEXT', newPostText:  newPostText} as const
// }
// export const sendMessageCreator = () => {
//     return{type: 'SEND-MESSAGE'} as const
// }
// export const updateNewMessageBodyCreator = (body: string) => {
//     return {type: 'UPDATE-NEW-MESSAGE-BODY', body: body} as const
// }

// window.store= store;
// ReturnType<typeof sendMessageCreator>
// | ReturnType<typeof updateNewMessageBodyCreator>
// | ReturnType<typeof addPostActionCreator>
// | ReturnType<typeof updateNewTextActionCreator>