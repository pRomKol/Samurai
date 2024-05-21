import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {
    followTC, getUsersTC,
    setCurrentPageAC,
    setFollowingInProgressAC,
    unFollowTC,
    UsersType
}
    from "../../redux/userReducer";
import React, {FC} from 'react';
import {Users} from './Users';
import {Preloader} from "../Common/Preloader";
import {Redirect} from "react-router-dom";

import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";





export type PropsType = {
    users: UsersType[]
    unFollow: (usedId: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    setFollowingInProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: any[]
    getUsers:(currentPage: number, pageSize: number) => void
    follow: ( userId:number) => void
}

export class UsersAPIContainer extends React.Component<PropsType, any> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {
                this.props.isFetching ?
                <Preloader/> : null
            }
            <Users
                followingInProgress={this.props.followingInProgress}
                setFollowingInProgress={this.props.setFollowingInProgress}
                totalUsersCount={this.props.totalUsersCount}
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

let
    mapStateToProps = (state: AppStateType) => {
        return {
            users: state.usersReducer.users,
            pageSize: state.usersReducer.pageSize,
            totalUsersCount: state.usersReducer.totalUsersCount,
            currentPage: state.usersReducer.currentPage,
            isFetching: state.usersReducer.isFetching,
            followingInProgress: state.usersReducer.followingInProgress,


        }
    }



export const UsersContainer =
compose<FC>( WithAuthRedirect,
    connect (mapStateToProps, {
    unFollow: unFollowTC,
    setCurrentPage: setCurrentPageAC,
    setFollowingInProgress: setFollowingInProgressAC,
    getUsers: getUsersTC,
    follow: followTC
}))(UsersAPIContainer)