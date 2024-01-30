import './index.css';

import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App, {PropsType} from "./App";

import React from "react";
import {store} from "./redux/state";


let renderEntireTree = (state: PropsType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}
                 dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root')
    );
}


renderEntireTree(store.getState())

store.subscribe(renderEntireTree)