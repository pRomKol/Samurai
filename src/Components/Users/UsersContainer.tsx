import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setCurrentPageAC, setUsersAC, setUsersCountAC, unFollowAC, UsersType} from "../../redux/userReducer";
import {Users} from "./UsersC";

let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,


    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unFollow: (userID: number) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (userCount: number) => {
            dispatch(setUsersCountAC(userCount))
    }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);