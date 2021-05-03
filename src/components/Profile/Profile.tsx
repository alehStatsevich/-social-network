import React from "react";
import Profileinfo from "./Profileinfo/Profileinfo"
import MyPostsContainer from "./MyPosts/MyPostsContainer";





const Profile = (props: any) => {
    return <div>
        <Profileinfo profile={props.profile}/>
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


