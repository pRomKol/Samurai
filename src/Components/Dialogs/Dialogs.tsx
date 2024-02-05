import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/Dialogitem";
import React from "react";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogReducer";




type PropsType = {
    store: any
    dialogs: any
    message: any
}

export function Dialogs(props: PropsType) {
const onSendMessageClick = () => {
    props.store.dispatch(sendMessageAC())
}
const updateNewMessageBody = (e: any) => {
    let body = e.currentTarget.value
    props.store.dispatch(updateNewMessageBodyAC(body))
}
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {props.dialogs.map(({name, id}) =>
                    <DialogItem key={id} name={name} id={id}/>)}
            </div>
            <div className={s.messeges}>
                {props.message.map(({id, message}) =>
                    <Message key={id} message={message}/>)}
            </div>
            <textarea placeholder='Enter your message' onChange={updateNewMessageBody} value={props.store.newMessageBody}></textarea>
            <button onClick={onSendMessageClick}>Send message</button>
        </div>
    )
}