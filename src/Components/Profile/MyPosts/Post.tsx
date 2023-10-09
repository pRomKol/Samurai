import post from './Post.module.css'
import {message} from "antd";
import {Like} from "./Likes";

export function Post(props: any) {
    return (
        <div className={post.item}>
            <div>
                <img alt='Avatar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55xNIciu8yA_9IqA9TB3oPwEheZmo_gKWsg&usqp=CAU'/>
            </div>
            <div className={post.content}>
                <div>
                    FriendName
                </div>
                <div>
                    {props.message}
                </div>
                <div>
                    <Like count={props.likeCount}/>
                </div>
            </div>

        </div>
    )
}