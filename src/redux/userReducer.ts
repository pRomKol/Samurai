import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_COUNT = 'SET_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

type StateType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: any[]
}

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


const initialState: StateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 2,
    isFetching: false,
    followingInProgress: [],
}

export type ActionsType = UnFollowTypeAC
    | FollowTypeAC
    | SetUsersTypeAC
    | SetCurrentPageAC
    | SetUserCountAC
    | SetFetchingAC
    | SetFollowingInProgressAC
export const usersReducer = (state = initialState, action: ActionsType): {
    users: UsersType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: any[]
} => {
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
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {

                ...state, currentPage: action.pageNumber
            }
        }
        case SET_USERS_COUNT: {
            return {...state, totalUsersCount: action.usersCount}
        }
        case TOGGLE_IS_FETCHING: {
        return { ...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
        return {
            ...state, followingInProgress: action.isFetching ?
                [...state.followingInProgress, action.userId]:
                [...state.followingInProgress.filter(id=> id !== action.userId)]
        }
        default:
            return state

    }
}
export const followAC = (userID: number): FollowTypeAC =>
    ({type: FOLLOW, userID})
export const unFollowAC = (userID: number): UnFollowTypeAC =>
    ({type: UNFOLLOW, userID})
export const setUsersAC = (users: UsersType[]): SetUsersTypeAC =>
    ({type: SET_USERS, users})
export const setCurrentPageAC = (pageNumber: number): SetCurrentPageAC =>
    ({type: SET_CURRENT_PAGE, pageNumber})
export const setUsersCountAC = (usersCount: number): SetUserCountAC =>
    ({type: SET_USERS_COUNT, usersCount})
export const setFetchingAC = (isFetching: boolean): SetFetchingAC =>
    ({type: TOGGLE_IS_FETCHING, isFetching})
export const setFollowingInProgressAC = (isFetching: boolean, userId: number): SetFollowingInProgressAC =>
    ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})
export const getUsersTC = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
   dispatch(setFetchingAC(true));
    usersAPI.getUsers(currentPage, pageSize)
        .then(response => {
            dispatch(setFetchingAC(false))
            dispatch(setUsersAC(response.items));
            dispatch(setUsersCountAC(response.totalCount));
        })
}
export const followTC = (userId: number) => (dispatch: Dispatch) => {
    dispatch(setFollowingInProgressAC(true, userId))
    usersAPI.follow(userId)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(followAC(userId))
            }
            dispatch(setFollowingInProgressAC(false, userId))

        })
}
export const unFollowTC = (userId: number) => (dispatch: Dispatch) => {
    dispatch(setFollowingInProgressAC(true, userId))
    usersAPI.unFollow(userId)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(unFollowAC(userId))
            }
            dispatch(setFollowingInProgressAC(false, userId))

        })
}


//actions types
type UnFollowTypeAC = {
    type: typeof UNFOLLOW,
    userID: number
}
type FollowTypeAC = {
    type: typeof FOLLOW,
    userID: number
}
type SetUsersTypeAC = {
    type: typeof SET_USERS,
    users: UsersType[]
}
type SetCurrentPageAC = {
    type: typeof SET_CURRENT_PAGE,
    pageNumber: number
}
type SetUserCountAC = {
    type: typeof SET_USERS_COUNT,
    usersCount: number
}
type SetFetchingAC = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
}
type SetFollowingInProgressAC = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: boolean
    userId: number
}

