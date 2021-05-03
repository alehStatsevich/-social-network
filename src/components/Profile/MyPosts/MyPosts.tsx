import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";


class newPostText {
}

export type MyPostsPropsType ={
    posts: PostType[]
    newPostText: string
     addPost: () => void
    updateNewPostText: (text: string)=> void
}

const MyPosts = (props:MyPostsPropsType) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    //ссылка ссьлающаяся на  элемент в textarea
    //  let newPostElement = React.createRef();
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        props.addPost();
        // let text = newPostElement.current.value;
        // props.dispatch(addPostActionCreator())
    }

    const changeTextarea = () => {
        // if (newPostElement.current) {

        let text= newPostElement.current?.value;
            props.updateNewPostText(text||"")
            // let action = updateNewTextActionCreator(text)
            // props.dispatch(action)


    }

    return <div className={s.postsBlock}>
        <h3> my posts</h3>
        <div>
            <div>
                <textarea ref={newPostElement} onChange={changeTextarea}
                          value={props.newPostText}/>
            </div>
            <div>
                <button onClick={props.addPost}>Add post</button>
            </div>
        </div>
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
//
//






