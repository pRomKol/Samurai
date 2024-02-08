import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import store, {AppStateType} from "./redux/redux-store";


let renderEntireTree = (state: AppStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}
                 dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root')
    );
}


renderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    renderEntireTree(state)
})