import s from './Dialogs.module.css'

import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/Dialogitem";
import {DialogsType, MessageType} from "../../redux/state";


type PropsType = {
    messageData: Array<MessageType>
    dialogsData: Array<DialogsType>
}

export function Dialogs(props: PropsType) {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {props.dialogsData.map(({name, id}) =>
                    <DialogItem name={name} id={id}/>)}
            </div>
            <div className={s.messeges}>
                {props.messageData.map(({id, message}) =>
                    <Message key={id} message={message}/>)}

            </div>
        </div>
    )
}