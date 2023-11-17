import s from './Posts.module.css'
import {Post} from "./Post";

export function  MyPosts(props:any) {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                Nwe Posts
            </div>
            <div className={s.posts}>
                <Post likeCount='5' message='Hi, how are you?'/>
                <Post message="It's my first post!"/>
                <Post likeCount='10' message={props.hey}/>
            </div>
        </div>


    )
}