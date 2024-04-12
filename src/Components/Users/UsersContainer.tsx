import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import {
    followAC,
    setCurrentPageAC,
    setFetchingAC,
    setUsersAC,
    setUsersCountAC,
    unFollowAC,
    UsersType
}
from "../../redux/userReducer";
import React from 'react';
import axios from 'axios';
import {Users} from './Users';

import {Preloader} from "../Common/Preloader";

type ResponseType<G> = {
    items: G
    totalCount: number
}

export type PropsType = {
    users: UsersType[]
    setCurrentPage: (pageNumber: number) => void
    follow: (usedID: number) => void
    unFollow: (usedID: number) => void
    setUsers: (users: UsersType[]) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    setTotalUsersCount: (usersCount: number) => void
    isFetching: boolean
    setFetching: (isFetching: boolean) => void
}

export class UsersAPIContainer extends React.Component<PropsType, any> {
    componentDidMount() {
        this.props.setFetching(true)
        axios.get<ResponseType<UsersType[]>>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFetching(false)
                this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount)
                }
            );
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setFetching(true)
        this.props.setCurrentPage(pageNumber);
        axios.get<ResponseType<UsersType[]>>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items))
        this.props.setFetching(false)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/>: null   }
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   users={this.props.users}

            />
        </>
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching
    }
}
// let mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         follow: (userID: number) => {
//             dispatch(followAC(userID))
//         },
//         unFollow: (userID: number) => {
//             dispatch(unFollowAC(userID))
//         },
//         setUsers: (users: UsersType[]) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (userCount: number) => {
//             dispatch(setUsersCountAC(userCount))
//         },
//         setFetching: (isFetching: boolean) => {
//             dispatch(setFetchingAC(isFetching))
//         }
//     }
// }
 export const UsersContainer = connect(mapStateToProps, {
    follow: followAC,
    unFollow: unFollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setUsersCountAC,
    setFetching: setFetchingAC
})(UsersAPIContainer);