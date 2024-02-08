import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/propfileReducer";
import {MyPosts} from "./MyPosts";


type PropsType = {
    state: any
}

export function MyPostsContainer(props: PropsType) {
    const updateNewPostText = (text: string) => {
        props.state.dispatch(updateNewPostTextAC(text))
    }
    const addPost = () => {
        props.state.dispatch(addPostAC())
        //props.addPost()
    }
    return (
        <MyPosts addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 postsData={props.state.profileReducer.postsData}
                 newPostData={props.state.profileReducer.newPostData}/>
    )
}