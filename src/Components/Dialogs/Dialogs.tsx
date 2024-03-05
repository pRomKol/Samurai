import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/Dialogitem";
import React from "react";
import {DialogType, MessageType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogReducer";
import {Dispatch} from "redux";


type PropsType = {
    onSendMessageClick: ()  =>void
    //dispatch: Dispatch
    dialogsData: DialogType[]
    messageData: MessageType[]
    newMessageBody: string
    updateNewMessageBody:(e:any)=>void
}

export function Dialogs(props: PropsType) {
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
            <textarea placeholder='Enter your message' onChange={props.updateNewMessageBody}
                      value={props.newMessageBody}></textarea>
            <button onClick={props.onSendMessageClick}>Send message</button>
        </div>
    )
}