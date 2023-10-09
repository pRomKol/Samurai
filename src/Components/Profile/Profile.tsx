import profile from './Profile.module.css'
import {findAllByDisplayValue} from "@testing-library/react";
import {MyPosts} from "./MyPosts/Posts";

export function Profile() {
    return (
        <div className={profile.content}>
            <div>
                <img alt='Backgound' className={profile.main__contentImage}
                     src="https://co10.nevseoboi.com.ua/posts/2011-03/1299190938_01_www.nevseoboi.com.ua.jpg"/>
            </div>

            <div>
                <img className={profile.avatar__image}
                     src="https://i.kym-cdn.com/photos/images/newsfeed/002/606/539/cac.jpg" alt="Avatar"/>
                + discription
            </div>
            <MyPosts hey='Yo!'/>
        </div>

    )
}