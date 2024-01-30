import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/Dialogitem";
import {DialogsType, MessageType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/state";
import React from "react";



type PropsType = {
    messageData: Array<MessageType>
    dialogsData: Array<DialogsType>
    newMessageBody: string
    dispatch: any
}

export function Dialogs(props: PropsType) {
const onSendMessageClick = () => {
    props.dispatch(sendMessageAC())
}
const updateNewMessageBody = (e: any) => {
    let body = e.currentTarget.value
    props.dispatch(updateNewMessageBodyAC(body))
}


    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {props.dialogsData.map(({name, id}) =>
                    <DialogItem key={id} name={name} id={id}/>)}
            </div>
            <div className={s.messeges}>
                {props.messageData.map(({id, message}) =>
                    <Message key={id} message={message}/>)}
            </div>
            <textarea placeholder='Enter your message' onChange={updateNewMessageBody} value={props.newMessageBody}></textarea>
            <button onClick={onSendMessageClick}>Send message</button>
        </div>
    )
}