import {AppStateType} from "./redux-store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS= 'SET_USERS'

export type UsersType = {
    id: number,
    followed: boolean,
    fullName: string,
    status: string
    photoURL: string
    location: {
        city: string
        country: string
    }
}

const initialState: {users: UsersType[]} = {
    users: [
        // {id: 1, photoURL: 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745', followed: true, fullName: 'Sergey', status: 'yo!', location: {city: 'Minsk', country: 'Belarus'}, },
        // {id: 2, photoURL: 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745', followed: true, fullName: 'Ilya', status: '1', location: {city: 'Bobruisk', country: 'Belarus'}, },
        // {id: 3, photoURL: 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745', followed: false, fullName: 'Sergey', status: 'qwe', location: {city: 'Moscow', country: 'Russia'}, },
        // {id: 4, photoURL: 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745', followed: false, fullName: 'Sergey', status: 'ewq!', location: {city: 'Kiev', country: 'Ukraine'}, },
        // {id: 5, photoURL: 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745', followed: false, fullName: 'Sergey', status: 'zxc', location: {city: 'Minsk', country: 'Belarus'}, },
    ]
}
export type ActionsType = UnFollowTypeAC | FollowTypeAC | setUsersTypeAC
export const usersReducer = (state  = initialState, action: ActionsType):  {users: UsersType[]} => {
switch (action.type) {
    case FOLLOW:
        return  {...state, users: state.users.map( u => {
            if (u.id === action.userID) {
                return {...u, followed: true}
            }
            return u
            } )}

    case UNFOLLOW:
        return  {...state, users: state.users.map( u => {
            if (u.id === action.userID) {
                    return {...u, followed: false}
                }
                return u
            } )}
    case SET_USERS: {
        return  {...state, users: [...state.users, ...action.users]}
    }

    default:
        return state

    }
}
export const followAC = (userID: number): FollowTypeAC => ({type: FOLLOW, userID} )
export const unFollowAC = (userID: number): UnFollowTypeAC => ({type: UNFOLLOW, userID})
export const setUsersAC = (users: UsersType[]) : setUsersTypeAC => ({type:SET_USERS, users})


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