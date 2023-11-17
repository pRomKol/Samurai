import s from "../ProfileInfo/ProfileInfo.module.css";

export const ProfileInfo = () =>{
    return(
        <div>
            <img className={s.avatar__image}
                 src="https://i.kym-cdn.com/photos/images/newsfeed/002/606/539/cac.jpg" alt="Avatar"/>
            + description
        </div>
    )
}
