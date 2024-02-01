import nav from "../Components/Navigation/NavBar.module.css";
import {PropsType} from "../App";
import profileReducer from "./propfileReducer";
import dialogReducer from "./dialogReducer";
import navBarReducer from "./navBarReducer";

export  type LinkType = {
    to: string
    className: string
    activeClassName: string
    value: string
}
export type PostType = {
    id: number
    likeCount: number
    message: string
}
export type DialogsType = {
    id: number
    name: string

}
export type MessageType = {
    id: number
    message: string
}
export let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, likeCount: 5, message: 'Hi, how are you?'},
                {id: 2, likeCount: 15, message: 'It\'s my first post!'},
                {id: 3, likeCount: 10, message: 'Yo!'},
            ],
            newPostData: ''
        },
            navBar: {
            navLink: [
                {to: '/profile', className: nav.item, activeClassName: nav.active, value: 'Profile'},
                {to: '/dialogs', className: nav.item, activeClassName: nav.active, value: 'Message'},
                {to: '/music', className: nav.item, activeClassName: nav.active, value: 'Music'},
                {to: '/video', className: nav.item, activeClassName: nav.active, value: 'Video'},
                {to: '/friends', className: nav.item, activeClassName: nav.active, value: 'Friends'},
            ],
        },
        dialogPage: {
            messageData: [
                {id: 1, message: 'yo'},
                {id: 2, message: 'hi!'},
                {id: 3, message: 'how are you?'}
            ],
            dialogsData: [
                {id: 1, name: 'Roma'},
                {id: 2, name: 'Katya'},
                {id: 3, name: 'Ira'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
            ],
            newMessageBody: ''
        }

    },
    getState() {
        return this._state
    },
    renderEntireTree(state: any) {
    },
    subscribe(observer: (state: PropsType) => void) {
        store.renderEntireTree = observer;
    },
    dispatch(action: any) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogPage = dialogReducer(this._state.dialogPage, action)
    this._state.navBar = navBarReducer(this._state.navBar, action)
    this.renderEntireTree(store)
    }
}






//window.store = store;