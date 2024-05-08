import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/Dialogitem";
import React, {ChangeEvent} from "react";
import {DialogType, MessageType} from "../../redux/dialogReducer";
import {Redirect} from "react-router-dom";
import {Login} from "../Login/Login";



type PropsType = {
    onSendMessageClick: ()  =>void
    //dispatch: Dispatch
    dialogsData: DialogType[]
    messageData: MessageType[]
    newMessageBody: string
    updateNewMessageBody:(message: string)=>void
    isAuth: boolean
}

export function Dialogs(props: PropsType) {
    const onUpdateMessageChange =(e: ChangeEvent<HTMLTextAreaElement>)=>{
        props.updateNewMessageBody(e.currentTarget.value)
    }
    // if(!props.isAuth){
    //     return <Redirect to={'/login'}/>
    // }
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
            <textarea placeholder='Enter your message' onChange={onUpdateMessageChange}
                      value={props.newMessageBody}></textarea>
            <button onClick={props.onSendMessageClick}>Send message</button>
        </div>
    )


}