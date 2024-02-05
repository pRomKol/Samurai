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
import {DialogsType, LinkType, MessageType, PostType} from "./redux/store";


export type PropsType = {
    profilePage: {
        postsData: PostType[]
        newPostData: string
    }
    navBar: {
        navLink: LinkType[]
    }
    dialogPage: {
        messageData: MessageType[]
        dialogsData: DialogsType[]
        newMessageBody: string
    }

}

function App(props: any) {
    return (
        <div className='app_wrapper'>
            <Header/>
            <NavBar navLink={props.store.navBar}/>
            <div className='app_wrapper__content'>
                <Route path='/profile' render={() => <Profile store={props.store}
                />}/>
                <Route path='/dialogs' render={() => <Dialogs message={props.store.messageData}
                                                              dialogs={props.store.dialogsData}
                                                              store={props.store}/>}/>
                <Route path='/music' component={Music}/>
                <Route path='/video' component={Video}/>
                <Route path='/friends' component={Friends}/>
            </div>
        </div>

    );
}

export default App;
