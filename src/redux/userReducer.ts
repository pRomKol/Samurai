import {AppStateType} from "./redux-store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = 'SET_USERS'

export type UsersType = {
    name: string
    id: number
    uniqueUrlName: null
    photos: {
        large: null
        small: null
    }
    status: null | string
    followed: boolean
}




const initialState: { users: UsersType[] } = {
    users: []
}
export type ActionsType = UnFollowTypeAC | FollowTypeAC | setUsersTypeAC
export const usersReducer = (state = initialState, action: ActionsType): { users: UsersType[] } => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }

        default:
            return state

    }
}
export const followAC = (userID: number): FollowTypeAC => ({type: FOLLOW, userID})
export const unFollowAC = (userID: number): UnFollowTypeAC => ({type: UNFOLLOW, userID})
export const setUsersAC = (users: UsersType[]): setUsersTypeAC => ({type: SET_USERS, users})


//types
type UnFollowTypeAC = {
    type: typeof UNFOLLOW,
    userID: number
}
type FollowTypeAC = {
    type: typeof FOLLOW,
    userID: number
}
type setUsersTypeAC = {
    type: typeof SET_USERS,
    users: UsersType[]
}