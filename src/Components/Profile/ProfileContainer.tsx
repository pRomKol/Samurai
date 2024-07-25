import React, {FC} from "react";
import {Profile} from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getStatusTC, getUserProfileTC, setUserProfileAC, updateStatusTC} from "../../redux/propfileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";


type PropsType = {
    getStatus:(userID: number) => void
    updateStatus:(status: string) => void
    setUserProfile: (profile: ProfileType) => void
    getUserProfile: (userId: number) => void
    profile: ProfileType | null
    match: any
    isAuth: boolean
    status: string

}

type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: null | string,
        vk: null | string
        twitter: null | string
        instagram: null | string
        youtube: null | string
        github: null | string
        mainLink: null | string
    }
    lookingForAJob: boolean,
    lookingForAJobDescription: null | string
    fullName: null | string,
    userId: number,
    photos: {
        small: null | string
        large: null | string
    };
}


export class ProfileAPIContainer extends React.Component<PropsType> {
    componentDidMount() {
        const userId: number = this.props.match.params.userID ? this.props.match.params.userID : 4
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }

}


let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profileReducer.profile,
        status: state.profileReducer.status
    }
}


export const ProfileContainer = compose<FC>(
    //WithAuthRedirect,
    withRouter,
    connect(mapStateToProps, {
        setUserProfile: setUserProfileAC,
        getUserProfile: getUserProfileTC,
        getStatus: getStatusTC,
        updateStatus: updateStatusTC,


    }))(ProfileAPIContainer)