import profile from './Profile.module.css'
import {MyPosts} from "./MyPosts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
const ProfileImg = () => {
    return(
        <div>
            <img alt='Backgound' className={profile.main__contentImage}
                 src="https://co10.nevseoboi.com.ua/posts/2011-03/1299190938_01_www.nevseoboi.com.ua.jpg"/>
        </div>
    )
}

export const Profile = () => {
    return (
        <div>
            <ProfileImg/>
            <ProfileInfo/>
            <MyPosts hey='Yo!'/>
        </div>

    )
}