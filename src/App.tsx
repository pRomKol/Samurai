import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/Navigation/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {Music} from "./Components/Music/Music";
import {Video} from "./Components/Video/Video";
import {Friends} from "./Components/Friends";
import {DialogsType, LinkType, MessageType, PostType} from "./redux/state";


export type StateType = {
    state: PropsType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}
export type PropsType = {
    profilePage: {
        postsData: PostType[]
        newPostData: any
    }
    navBar: {
        navLink: LinkType[]
    }
    dialogPage: {
        messageData: MessageType[]
        dialogsData: DialogsType[]
    }

}

function App(props: StateType) {
    return (
        <div className='app_wrapper'>
            <Header/>
            <NavBar navLink={props.state.navBar.navLink}/>
            <div className='app_wrapper__content'>
                <Route path='/profile' render={() => <Profile updateNewPostText={props.updateNewPostText}
                                                              newPostData={props.state.profilePage.newPostData}
                                                              addPost={props.addPost}
                                                              postsData={props.state.profilePage.postsData}/>}/>
                <Route path='/dialogs' render={() => <Dialogs messageData={props.state.dialogPage.messageData}
                                                              dialogsData={props.state.dialogPage.dialogsData}/>}/>
                <Route path='/music' component={Music}/>
                <Route path='/video' component={Video}/>
                <Route path='/friends' component={Friends}/>
            </div>
        </div>

    );
}

export default App;
