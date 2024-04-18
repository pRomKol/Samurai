const SET_USER_DATA = 'SET_USER_DATA'

type ActionsType = SetUserData


let initialState : UserData = {
    userID: null,
    login: null,
    email: null,
    isAuth: false

}
export const authReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            {
                return state
            }
    }
}


export const setAuthUserData = (userID: null | string, login: null | string, email: null | string) => ({
    type: 'SET_USER_DATA',
    data: {userID, login, email}
})
type UserData = {
    userID: null | string
    email: null | string
    login: null | string
    isAuth: boolean
}
type SetUserData = {
    type: typeof SET_USER_DATA
    data: UserData


}