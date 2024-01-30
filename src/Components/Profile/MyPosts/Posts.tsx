import s from './Posts.module.css'
import {Post} from "./Post";
import {addPostAC, PostType, updateNewPostTextAC} from "../../../redux/state";
import React from "react";

type PropsType = {
    newPostData: any;
    postsData: PostType[]
    dispatch: any

}

export function MyPosts(props: PropsType) {

    const updateNewPostText = (e: any) => {
        let text = e.currentTarget.value
        props.dispatch(updateNewPostTextAC(text))

    }
    const addPost = () => {
        props.dispatch(addPostAC())
    }
    return (
        <div>
            <h2>
                My Posts
            </h2>
            <div>
                <textarea onChange={updateNewPostText} value={props.newPostData}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            <div>
                Nwe Posts
            </div>
            <div className={s.posts}>
                {props.postsData.map(({id, message, likeCount}) => (
                    <Post key={id} likeCount={likeCount} message={message}/>))}
            </div>
        </div>


    )
}