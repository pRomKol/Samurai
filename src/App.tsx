import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/Navigation/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";


function App() {
    return (
        <div className="wrapper">
            <Header/>
            <NavBar/>
            <Profile/>
            <Dialogs/>
        </div>
    );
}

export default App;
