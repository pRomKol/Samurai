import s from '../ProfileInfo/ProfileInfo.module.css';
import profile from '../Profile.module.css';
import React from 'react';
import {Preloader} from '../../Common/Preloader';
import avatar from '../../../assets/img/icon-256x256.png';
import {ProfileStatus} from "../ProfileStatus/ProfileStatus";


export const ProfileInfo = (props: any) => {
    // debugger
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img alt='Backgound' className={profile.main__contentImage}
                     src="https://co10.nevseoboi.com.ua/posts/2011-03/1299190938_01_www.nevseoboi.com.ua.jpg"/>
            </div>
            <div>
                <img className={s.avatar__image}
                     src={props.profile.photos.large ? props.profile.photos.large : avatar} alt={'avatar'}/>
                <ProfileStatus status={'sasai kudasai'}/>
            </div>

        </div>
    )
}
