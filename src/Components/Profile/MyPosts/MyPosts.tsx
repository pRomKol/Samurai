import s from './Posts.module.css'
import {Post} from "./Post";
import React from "react";

type PropsType = {
    newPostData: any;
    updateNewPostText: (text: string) => void
    addPost: () => void
    posts: any[]
}

export function MyPosts(props: PropsType) {

    const updateNewPostText = (e: any) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)

    }
    const addPost = () => {
        props.addPost()
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
                {props.posts.map(({id, message, likeCount}) => (
                    <Post key={id} likeCount={likeCount} message={message}/>))}
            </div>
        </div>


    )
}