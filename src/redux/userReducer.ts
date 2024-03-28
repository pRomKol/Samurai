const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const initialState = {
    users: [
        {id: 1, followed:true, fullName: 'Sergey', status: 'yo!', location: {city: 'Minsk', country: 'Belarus'}, },
        {id: 2, followed:true, fullName: 'Ilya', status: '1', location: {city: 'Bobruisk', country: 'Belarus'}, },
        {id: 3, followed:false, fullName: 'Sergey', status: 'qwe', location: {city: 'Moscow', country: 'Russia'}, },
        {id: 4, followed:false, fullName: 'Sergey', status: 'ewq!', location: {city: 'Kiev', country: 'Ukraine'}, },
        {id: 5, followed:false, fullName: 'Sergey', status: 'zxc', location: {city: 'Minsk', country: 'Belarus'}, },
    ]
}
export const usersReducer = (state = initialState, action:any) => {
switch (action.type) {
    case FOLLOW:

    case UNFOLLOW:

    default:
        return state

    }
}
export const followAC = () => ({type: FOLLOW})
export const unFollowAC = () => ({type: UNFOLLOW})