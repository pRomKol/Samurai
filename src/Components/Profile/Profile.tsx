import profile from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/PostsContainer";

const ProfileImg = () => {
    return (
        <div>
            <img alt='Backgound' className={profile.main__contentImage}
                 src="https://co10.nevseoboi.com.ua/posts/2011-03/1299190938_01_www.nevseoboi.com.ua.jpg"/>
        </div>
    )
}

type PropsType = {
    store: any


}
export const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileImg/>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>

    )
}