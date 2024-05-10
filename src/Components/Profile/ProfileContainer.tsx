import React, {FC} from "react";
import {Profile} from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getUserProfileTC, setUserProfile} from "../../redux/propfileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";


type PropsType = {
    setUserProfile:(profile: ProfileType)=> void
    getUserProfile:(userId: number)=> void
    profile: ProfileType | null
    match: any
    isAuth: boolean

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
        const userId = this.props.match.params.userId ? this.props.match.params.userId : 4
        this.props.getUserProfile(userId)
    }
    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }

}

let AuthRedirectComponent = WithAuthRedirect(ProfileAPIContainer)

let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profileReducer.profile,
    }
}



export const ProfileContainer = compose<FC>(withRouter, connect(mapStateToProps, {
     setUserProfile,
     getUserProfile: getUserProfileTC
 })) (AuthRedirectComponent)