import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";


const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
let initialState = {
    postsData: [
        {id: 1, likeCount: 5, message: 'Hi, how are you?'},
        {id: 2, likeCount: 15, message: 'It\'s my first post!'},
        {id: 3, likeCount: 10, message: 'Yo!'},

    ],
    newPostData: '',
    profile: null,
    status: ''
}
type ActionType = UpdateNewPostText | AddPost | SetUserProfile | SetStatus
type StateType = typeof initialState


export type PostDataType = {
    id: number
    likeCount: number
    message: string
}
export type ProfilePageType = {
    postsData: PostDataType[]
    newPostData: string,
    status: string
}

export const profileReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostDataType = {
                id: 5,
                message: state.newPostData,
                likeCount: 0
            }
            let stateCopy = {...state}
            stateCopy.postsData = [...state.postsData]
            stateCopy.postsData.push(newPost)
            stateCopy.newPostData = ''
            console.log(stateCopy)
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT:
            let stateCopy = {...state}
            stateCopy.newPostData = action.newText
            return stateCopy;
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.newStatus}
        }
        default:
            return state;
    }
}

export const updateNewPostTextAC = (text: string) => (
    {type: UPDATE_NEW_POST_TEXT, newText: text}
);
export const setStatus = (newStatus: string) => (
    {type: SET_STATUS, newStatus}
);
export const setUserProfileAC = (profile: any) => (
    {type: SET_USER_PROFILE, profile}
)
export const getUserProfileTC = (userId: number) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId)
        .then(res => dispatch(setUserProfileAC(res.data)))
}
export const addPostAC = () => ({type: ADD_POST})

export const getStatusTC = (userId: number) => (dispatch: Dispatch) => {

    profileAPI.getStatus(userId)
         .then(res => {
            dispatch(setStatus(res.data))
        })
}
export const updateStatusTC = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(res => {
            if (res.data.resoultCode === 0) {
                dispatch(setStatus(status))
            }
        })

}


//types
type AddPost = {
    type: typeof ADD_POST
}
type UpdateNewPostText = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}

type SetUserProfile = {
    type: typeof SET_USER_PROFILE
    profile: any
}
type SetStatus = {
    type: typeof SET_STATUS
    newStatus: string
}

