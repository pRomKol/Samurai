import profile from './Profile.module.css'
import {MyPosts} from "./MyPosts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";

const ProfileImg = () => {
    return (
        <div>
            <img alt='Backgound' className={profile.main__contentImage}
                 src="https://co10.nevseoboi.com.ua/posts/2011-03/1299190938_01_www.nevseoboi.com.ua.jpg"/>
        </div>
    )
}

type PropsType = {
    newPostData: any
    postsData: PostType[]
    dispatch: any


}
export const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileImg/>
            <ProfileInfo/>
            <MyPosts dispatch={props.dispatch}
                     postsData={props.postsData}
                     newPostData={props.newPostData}/>
        </div>

    )
}