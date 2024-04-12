import React from "react";
import {Profile} from "./Profile";
import axios from "axios";

import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/propfileReducer";

type PropsType = {
    setUserProfile:(profile: ProfileType)=> void
    profile: ProfileType | null
}
type ResponseType<G> = {
    data: G

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


export class ProfileAPIContainer extends React.Component<PropsType, any> {
    componentDidMount() {
        axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(res => this.props.setUserProfile(res.data))
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }

}

let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profileReducer.profile
    }
}


 export const ProfileContainer = connect(mapStateToProps, {
    setUserProfile
})(ProfileAPIContainer)