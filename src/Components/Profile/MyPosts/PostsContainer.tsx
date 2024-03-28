import {addPostAC, updateNewPostTextAC} from "../../../redux/propfileReducer";
import {MyPosts} from "./MyPosts";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";



type PropsType = {
    state: AppStateType
    dispatch: Dispatch
}


let mapStateToProps = (state: any) => {
    return{
        postsData: state.profileReducer.postsData,
        newPostData: state.profileReducer.newPostData
    }
}
let mapDispatchToProps = (dispatch: any) =>{
    return {
        addPost:()=>{dispatch(addPostAC())},
        updateNewPostText:(text: string)=>{dispatch(updateNewPostTextAC(text))}

    }
}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)