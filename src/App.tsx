import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/Navigation/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import {Music} from "./Components/Music/Music";
import {Video} from "./Components/Video/Video";
import {Friends} from "./Components/Friends";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer/DialogsContainer";




// export type PropsType = {
//     profilePage: {
//         postsData: PostType[]
//         newPostData: string
//     }
//     navBar: {
//         navLink: LinkType[]
//     }
//     dialogPage: {
//         messageData: MessageType[]
//         dialogsData: DialogsType[]
//         newMessageBody: string
//     }
//
// }

// type PropsType = {
//     state: AppStateType
//     dispatch: Dispatch
// }

function App(props: any ) {
    //PropsType
    return (
        <div className='app_wrapper'>
            <Header/>
            <NavBar navLink={props.state.navBarReducer.navLink}/>
            <div className='app_wrapper__content'>
                <Route path='/profile' render={() =>
                    <Profile/>}/>
                <Route path='/dialogs' render={() =>
                    <DialogsContainer/>}/>
                <Route path='/music' component={Music}/>
                <Route path='/video' component={Video}/>
                <Route path='/friends' component={Friends}/>
            </div>
        </div>

    );
}

export default App;
