import {PostType} from "./store";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let initialState = {
    postsData: [
        {id: 1, likeCount: 5, message: 'Hi, how are you?'},
        {id: 2, likeCount: 15, message: 'It\'s my first post!'},
        {id: 3, likeCount: 10, message: 'Yo!'},
    ],
    newPostData: ''
}
export type PostDataType = {
    id: number
    likeCount: number
    message: string
}
export type ProfilePageType = {
    postsData: PostDataType[]
    newPostData: string
}
const profileReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: 5,
                message: state.newPostData,
                likeCount: 0
            }
            state.postsData.push(newPost)
            state.newPostData = ''
            //store.renderEntireTree(state);
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostData = action.newText
            //store.renderEntireTree(state)
            return state;
        default: return state;
    }
}

export const updateNewPostTextAC = (text: string) => (
    {type: UPDATE_NEW_POST_TEXT, newText: text}
);
export const addPostAC = () => ({type: ADD_POST})

export default profileReducer;
