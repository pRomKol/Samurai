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
import {LinkType, PostType} from "./index";

export type PropsType = {
    postsData?: Array<PostType>
    navLink?: Array<LinkType>
}
function App(props: PropsType) {

    return (
        <BrowserRouter>
            <div className='app_wrapper'>
                <Header/>
                <NavBar navLink={props.navLink}/>
                <div className='app_wrapper__content'>
                    <Route path='/profile' render={ () => <Profile postsData={props.postsData}  /> } />
                    <Route path='/dialogs' render={ () => <Dialogs  /> } />
                    <Route path='/music' component={Music}/>
                    <Route path='/video' component={Video}/>
                    <Route path='/friends' component={Friends}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
