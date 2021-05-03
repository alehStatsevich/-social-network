import {PostType} from "./state";

export const ADD_POST = "ADD-POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
export const SET_USER_PROFILE = "SET_USER_PROFILE";

type ProfilePageType = {
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
    profile: null
}

export const profileReducer = (state = initialState, action: any): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;
        case UPDATE_NEW_POST_TEXT:
            let stateCopy2 = {...state}
            stateCopy2.newPostText = action.newPostText;
            return stateCopy2;
        case SET_USER_PROFILE:{
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}
export const addPostActionCreator = () => {
    return {type: 'ADD-POST'} as const
}
export const updateNewTextActionCreator = (newPostText: string) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newPostText: newPostText} as const
}
export const setUsersProfile = (profile: null) => {
    return {type: 'SET_USER_PROFILE', profile} as const
}
// 41 урок схема
//    if (action.type === 'ADD-POST') {
//       let newPost: PostType = {
//          id: 5,
//          message: action.newPost,
//          likesCount: 0
//       };
//       state.profilePage.posts.push(newPost);
//       state.profilePage.newPostText="";
//       // this._callSubscriber();функция отрисовывает посты
//    }
//    else if (action.type === 'UPDATE-NEW-POST-TEXT') {
//       state.profilePage.newPostText = action.newPostText
//    }
//    return state
// }

// export default profileReducer;