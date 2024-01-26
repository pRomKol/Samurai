import s from './Posts.module.css'
import {Post} from "./Post";
import {PostType} from "../../../redux/state";
import React from "react";

type PropsType = {
    newPostData: any;
    postsData: PostType[]
    addPost: ()=> void
    updateNewPostText: (newText: string) => void
}

export function MyPosts(props: PropsType) {
    let newPostElement = React.createRef<any>();
    const updateNewPostText = () => {
        let text = newPostElement.current.value
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
                <textarea onChange={updateNewPostText} value={props.newPostData} ref={newPostElement}></textarea>
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