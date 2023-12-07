import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import nav from "./Components/Navigation/NavBar.module.css";
import App from "./App";
import state from "./redux/state";

ReactDOM.render(
    <App state={state}/>,

    document.getElementById('root')
);
