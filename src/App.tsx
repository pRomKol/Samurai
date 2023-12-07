import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/Navigation/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./Components/Music/Music";
import {Video} from "./Components/Video/Video";
import {Friends} from "./Components/Friends";
import {DialogsType, LinkType, MessageType, PostType} from "./redux/state";

type StateType = {
    state: PropsType
}
export type PropsType = {
    postsData: Array<PostType>
    navLink: Array<LinkType>
    messageData: Array<MessageType>
    dialogsData: Array<DialogsType>
}

function App(props: StateType) {

    return (
        <BrowserRouter>
            <div className='app_wrapper'>
                <Header/>
                <NavBar navLink={props.state.navLink}/>
                <div className='app_wrapper__content'>
                    <Route path='/profile' render={() => <Profile postsData={props.state.postsData}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs messageData={props.state.messageData}
                                                                  dialogsData={props.state.dialogsData}/>}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/video' component={Video}/>
                    <Route path='/friends' component={Friends}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
