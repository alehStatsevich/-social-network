import React from "react";
import Profileinfo from "./Profileinfo/Profileinfo"
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {PostType} from "../../redux/state";



export type ProfilePropsType ={
    profile: ProfileType | null
    status: string
    updateStatus:any
}
export type ProfileType = {
    posts: PostType[]
    newPostText: string
}
const Profile = (props: ProfilePropsType) => {
    return <div>
        <Profileinfo profile={props.profile}  status={props.status}
                     updateStatus={props.updateStatus}/>
        <MyPostsContainer/>

    </div>

}
export default Profile;
//   типизация
// posts: PostType[]
// likesCount: PostType[]
// message: PostType[]
// addPost: () => void
//     changeText: (newPostText: string) => void
//my post
// posts={props.posts}
// likesCount={props.likesCount}
// message={props.message}
// <MyPostsContainer store={props.store}
//                   dispatch={props.dispatch}/>
// type ProfilePropsType = {
//    store:  StoreType
//     dispatch: (action: ActionsType)=> void
// }


