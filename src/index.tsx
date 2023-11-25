import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import nav from "./Components/Navigation/NavBar.module.css";
import App from "./App";

export  type LinkType = {
    to: string
    className: string
    activeClassName: string
    value:string
}
export type PostType = {
    id: number
    likeCount: string
    message: string
}
let postsData: Array<PostType> = [
    {id: 1,  likeCount: '5', message: 'Hi, how are you?'},
    {id: 2,  likeCount: '15', message: 'It\'s my first post!'},
    {id: 3,  likeCount: '10', message: 'Yo!'},
]
let navLink: Array<LinkType>  = [
    {to: '/profile', className: nav.item, activeClassName: nav.active, value: 'Profile'},
    {to: '/dialogs', className: nav.item, activeClassName: nav.active, value: 'Message'},
    {to: '/music', className: nav.item, activeClassName: nav.active, value: 'Music'},
    {to: '/video', className: nav.item, activeClassName: nav.active, value: 'Video'},
    {to: '/friends', className: nav.item, activeClassName: nav.active, value: 'Friends'},
]
ReactDOM.render(
    <App postsData={postsData}
         navLink={navLink}/>,

    document.getElementById('root')
);
