import React from 'react';
import './App.css';
import {NavBar} from "./Components/Navigation/NavBar";
import {Route} from "react-router-dom";
import {Music} from "./Components/Music/Music";
import {Video} from "./Components/Video/Video";
import {Friends} from "./Components/Friends";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer/DialogsContainer";
import {UsersContainer} from "./Components/Users/UsersContainer";

import HeaderContainer from "./Components/Header/HeaderContainer";
import {ProfileContainer} from "./Components/Profile/ProfileContainer";
import {Login} from "./Components/Login/Login";



function App(props: any ) {
    return (
        <div className='app_wrapper'>
            <HeaderContainer/>
            <NavBar navLink={props.state.navBarReducer.navLink}/>
            <div className='app_wrapper__content'>
                <Route path='/profile/:userID?' render={() =>
                    <ProfileContainer />}/>
                <Route path='/dialogs' render={() =>
                    <DialogsContainer/>}/>
                <Route path='/music' component={Music}/>
                <Route path='/users' render={() =>
                    <UsersContainer/>}/>
                <Route path='/video' component={Video}/>
                <Route path='/friends' component={Friends}/>
                <Route path='/login' component={Login}/>
            </div>
        </div>

    );
}

export default App;
