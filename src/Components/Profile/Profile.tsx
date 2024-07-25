import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import React from "react";
import {MyPostContainer} from "./MyPosts/PostsContainer";

type PropsType = {
    profile: any
    status: string
    updateStatus:(status: string) => void
}
export const   Profile = (props:PropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostContainer/>
        </div>

    )
}