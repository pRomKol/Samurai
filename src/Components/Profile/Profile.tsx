import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import React from "react";
import {MyPostContainer} from "./MyPosts/PostsContainer";








export const   Profile = (props: any) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer/>
        </div>

    )
}