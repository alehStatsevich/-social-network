import React from "react";

import {addPostActionCreator, updateNewTextActionCreator} from "../../../redux/profile-reduser";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import  {StateType} from "../../../redux/state";
import {Dispatch} from "redux";





const mapStateToProps = (state: StateType ) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const  mapDispatchToProps = (dispatch:  Dispatch) => {
    return {
        updateNewPostText: (text: string) => {
            let action = updateNewTextActionCreator(text)
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts)


export default MyPostsContainer;



//
// posts: PostType[]
// changeText: (newPostText: string )=> void
//     message: PostType[]
// likesCount: PostType[]
//  addPost: (text: newPostText) => void
//    newPostText: string
// export type MyPostsPropsType = {
//     store:  StoreType
//     dispatch: (action: ActionsType)=> void
//     updateNewPostText:  (text: string) => void
//     newPost: string
// }
//
// const MyPostsContainer = (props: MyPostsPropsType) => {
//     // let postsElements =
//     //     props.store._state.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
//     // //ссылка ссьлающаяся на  элемент в textarea
//     // //  let newPostElement = React.createRef();
//     // let newPostElement = React.createRef<HTMLTextAreaElement>();
//     //переносим в  <StoreContext.Consumer>
// //let state = props.store.getState()
// //     let addPost = () => {
// //         // let text = newPostElement.current.value;
// //         props.store.dispatch(addPostActionCreator())
// //     }
// //     let changeTextarea = (text: string) => {
// //         // if (newPostElement.current) {
// //         //     let text = newPostElement.current.value;
// //             let action = updateNewTextActionCreator(text)
// //             props.store.dispatch(action)
// //     }
//
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState().profilePage
//
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator())
//                 }
//                 let changeTextarea = (text: string) => {
//                     let action = updateNewTextActionCreator(text)
//                     store.dispatch(action)
//                 }
//
//                 return <MyPosts updateNewPostText= {changeTextarea}
//                                 addPost={addPost}
//                                 posts={state.profilePage.posts}
//                                 newPostText={state.profilePage.newPostText}/>}
//             }
//         </StoreContext.Consumer>
//     )
// }







