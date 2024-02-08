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
import {AppStateType} from "./redux/redux-store";
import {Dispatch} from "redux";


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

type PropsType = {
    state: AppStateType
    dispatch: Dispatch

}

function App(props: PropsType) {
    return (
        <div className='app_wrapper'>
            <Header/>
            <NavBar navLink={props.state.navBarReducer.navLink}/>
            <div className='app_wrapper__content'>
                <Route path='/profile' render={() => <Profile
                    state={props.state}
                />}/>
                <Route path='/dialogs' render={() =>
                    <Dialogs messageData={props.state.dialogReducer.messageData}
                             dialogsData={props.state.dialogReducer.dialogsData}
                             newMessageBody={props.state.dialogReducer.newMessageBody}
                             dispatch={props.dispatch}
                    />}/>
                <Route path='/music' component={Music}/>
                <Route path='/video' component={Video}/>
                <Route path='/friends' component={Friends}/>
            </div>
        </div>

    );
}

export default App;
