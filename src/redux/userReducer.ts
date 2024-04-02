const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_COUNT = 'SET_USERS_COUNT'


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


const initialState: { users: UsersType[], pageSize: number, totalUsersCount: number, currentPage: number } = {
    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 2
}

export type ActionsType = UnFollowTypeAC | FollowTypeAC | SetUsersTypeAC | SetCurrentPageAC | SetUserCountAC
export const usersReducer = (state = initialState, action: ActionsType): {
    users: UsersType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
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
            return {...state,totalUsersCount: action.usersCount}
        }
        default:
            return state

    }
}
export const followAC = (userID: number): FollowTypeAC => ({type: FOLLOW, userID})
export const unFollowAC = (userID: number): UnFollowTypeAC => ({type: UNFOLLOW, userID})
export const setUsersAC = (users: UsersType[]): SetUsersTypeAC => ({type: SET_USERS, users})
export const setCurrentPageAC = (pageNumber: number): SetCurrentPageAC => ({type: SET_CURRENT_PAGE, pageNumber})
export const setUsersCountAC = (usersCount: number): SetUserCountAC => ({type: SET_USERS_COUNT, usersCount})



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