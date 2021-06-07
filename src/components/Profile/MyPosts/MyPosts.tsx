import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";
import {Field, reduxForm} from "redux-form";




export type MyPostsPropsType ={
    posts: PostType[]
    newPostText: string
     addPost: (newPostText:any) => void
}

function AddNewPostForm(props: any) {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="newPostText" component="textarea"/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>;
}
const ProfileAddNewPostForm= reduxForm({form:"ProfileAddNewPostForm"})(AddNewPostForm);

const MyPosts = (props:MyPostsPropsType) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    //ссылка ссьлающаяся на  элемент в textarea
    //  let newPostElement = React.createRef();
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = (values:any) => {
        props.addPost(values.newPostText);
    }

    return <div className={s.postsBlock}>
        <h3> my posts</h3>
        <ProfileAddNewPostForm onSubmit={addPost}/>
        <div className={s.posts}>

            {postsElements}
        </div>
    </div>
}
export default MyPosts;
//
// posts: PostType[]
// changeText: (newPostText: string )=> void
//     message: PostType[]
// likesCount: PostType[]
//  addPost: (text: newPostText) => void
//    newPostText: string
//  // const changeTextarea = () => {
//     //     // if (newPostElement.current) {
//     //
//     //     let text= newPostElement.current?.value;
//     //         props.updateNewPostText(text||"")
//     //         // let action = updateNewTextActionCreator(text)
//     //         // props.dispatch(action)
//     //
//     //
//     // }
//






