import s from './Posts.module.css'
import {Post} from "./Post";
import {PostType} from "../../../redux/state";

type PropsType = {
    postsData: Array<PostType>
}

export function MyPosts(props: PropsType) {

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
                {props.postsData.map(({id, message, likeCount}) => (
                    <Post key={id} likeCount={likeCount} message={message}/>))}
            </div>
        </div>


    )
}