import './index.css';
import state from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App, {PropsType} from "./App";
import {addPost, updateNewPostText} from "./redux/state";
import React from "react";

export const renderEntireTree = (state: PropsType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App updateNewPostText={updateNewPostText} state={state}
                 addPost={addPost}/>
        </BrowserRouter>, document.getElementById('root')
    );
}


renderEntireTree(state)