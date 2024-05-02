import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {
    followAC,
    setCurrentPageAC,
    setFetchingAC,
    setFollowingInProgressAC,
    setUsersAC,
    setUsersCountAC,
    unFollowAC,
    UsersType
}
    from "../../redux/userReducer";
import React from 'react';
import {Users} from './Users';
import {Preloader} from "../Common/Preloader";
import {getUsers} from "../../api/api";

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
    setFollowingInProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: any[]
}

export class UsersAPIContainer extends React.Component<PropsType, any> {
    componentDidMount() {
        this.props.setFetching(true);
        getUsers(this.props.currentPage, this.props.pageSize)
            .then(response => {
                this.props.setFetching(false)
                this.props.setUsers(response.items);
                this.props.setTotalUsersCount(response.totalCount);
            })

    }

    onPageChanged = (pageNumber: number) => {
        this.props.setFetching(true)

        this.props.setCurrentPage(pageNumber);
        getUsers(pageNumber, this.props.pageSize)
            .then(response => this.props.setUsers(response.items))
        this.props.setFetching(false)
    }

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader/> : null}
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
            followingInProgress: state.usersReducer.followingInProgress

        }
    }
export const
    UsersContainer = connect(mapStateToProps, {
        follow: followAC,
        unFollow: unFollowAC,
        setUsers: setUsersAC,
        setCurrentPage: setCurrentPageAC,
        setTotalUsersCount: setUsersCountAC,
        setFetching: setFetchingAC,
        setFollowingInProgress: setFollowingInProgressAC
    })(UsersAPIContainer);