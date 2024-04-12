

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
let initialState = {
    postsData: [
        {id: 1, likeCount: 5, message: 'Hi, how are you?'},
        {id: 2, likeCount: 15, message: 'It\'s my first post!'},
        {id: 3, likeCount: 10, message: 'Yo!'},

    ],
    newPostData: '',
    profile: null
}
type ActionType = UpdateNewPostText | AddPost | SetUserProfile
type StateType = typeof initialState


export type PostDataType = {
    id: number
    likeCount: number
    message: string
}
export type ProfilePageType = {
    postsData: PostDataType[]
    newPostData: string
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
        default: return state;
    }
}

export const updateNewPostTextAC = (text: string) => (
    {type: UPDATE_NEW_POST_TEXT, newText: text}
);
export const setUserProfile = (profile: any) => (
    {type: SET_USER_PROFILE, profile}
)
export const addPostAC = () => ({type: ADD_POST} )

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

