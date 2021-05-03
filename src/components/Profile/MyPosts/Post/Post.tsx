import React from "react";
import  s from "./Post.module.css";
const  Post = (props:any) => {
    return  <div className={s.item}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBvOSwFxLROhPcWwDMaTw8bPcz1Yyd_qmxQQ&usqp=CAU" alt=""/>
        { props.message }
        <div>
        <span>like</span> { props.likesCount }
        </div>
    </div>
}
export  default Post;










