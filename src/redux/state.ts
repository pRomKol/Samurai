import nav from "../Components/Navigation/NavBar.module.css";
import {PropsType} from "../App";

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

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
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
    _callBackSubscriber() {
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
        if (action.type === ADD_POST) {
            let newPost: PostType = {
                id: 5,
                message: this._state.profilePage.newPostData,
                likeCount: 0
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostData = ''
            store.renderEntireTree(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostData = action.newText
            store.renderEntireTree(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogPage.newMessageBody = action.body
            store.renderEntireTree(this._state)
        } else if (action.type === SEND_MESSAGE){
            let body = this._state.dialogPage.newMessageBody
            this._state.dialogPage.newMessageBody = ''
            let newMessage = {id: 6, message: body}
            this._state.dialogPage.messageData.push(newMessage)
            store.renderEntireTree(this._state)
        }


    }
}
export const addPostAC = () => ({type: ADD_POST})
export const updateNewPostTextAC = (text: string) => (
    {type: UPDATE_NEW_POST_TEXT, newText: text}
);
export const sendMessageAC = () =>({type: SEND_MESSAGE})
export const updateNewMessageBodyAC = (text: string) => (
    {type: UPDATE_NEW_MESSAGE_BODY, body: text}
);


//window.store = store;