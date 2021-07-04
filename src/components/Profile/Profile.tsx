import React from "react";
import ProfileInfo from "./Profileinfo/Profileinfo"
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {PostType} from "../../redux/state";



export type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: any
}
export type ProfileType = {
    posts: PostType[]
    newPostText: string
}
const Profile = (props: ProfilePropsType) => {
    return <div>

        <ProfileInfo profile={props.profile} status={props.status}
                     updateStatus={props.updateStatus}/>
        <MyPostsContainer/>

    </div>

}
export default Profile;


