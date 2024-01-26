import profile from './Profile.module.css'
import {MyPosts} from "./MyPosts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType, updateNewPostText} from "../../redux/state";

const ProfileImg = () => {
    return(
        <div>
            <img alt='Backgound' className={profile.main__contentImage}
                 src="https://co10.nevseoboi.com.ua/posts/2011-03/1299190938_01_www.nevseoboi.com.ua.jpg"/>
        </div>
    )
}

type PropsType = {
    newPostData: any
    postsData: PostType[]
    addPost: ()=> void
    updateNewPostText: (newText: string)=> void

}
export const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileImg/>
            <ProfileInfo/>
            <MyPosts updateNewPostText={props.updateNewPostText}
                addPost={props.addPost}
                     postsData={props.postsData}
                     newPostData={props.newPostData}/>
        </div>

    )
}