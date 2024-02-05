import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/propfileReducer";
import {MyPosts} from "./MyPosts";


type PropsType = {
    store: any
}

export function MyPostsContainer(props: PropsType) {
    let state = props.store.getState()
    const updateNewPostText = (text: string) => {
        props.store.dispatch(updateNewPostTextAC(text))
    }
    const addPost = () => {
        props.store.dispatch(addPostAC())
        //props.addPost()
    }
    return (
        <MyPosts addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 posts={state.profilePage.postsData}
                 newPostData={state.profilePage.newPostData}/>
    )
}