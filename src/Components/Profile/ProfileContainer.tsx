import React, {FC} from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/propfileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

type PropsType = {
    setUserProfile:(profile: ProfileType)=> void
    profile: ProfileType | null
    match: any
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
        const userID = this.props.match.params.userID ? this.props.match.params.userID : 4
        axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/` + userID)
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

//const WithURLDataContainerComponent = withRouter(ProfileAPIContainer)
 export default compose<FC>(withRouter, connect(mapStateToProps, {
     setUserProfile
 })) (ProfileAPIContainer)