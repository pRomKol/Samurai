import s from './Dialogs.module.css'
import nav from '../../Components/Navigation/NavBar.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/Dialogitem";
import {DialogsType, MessageType} from "../../redux/state";
import {NavLink} from "react-router-dom";


type PropsType = {
    messageData: Array<MessageType>
    dialogsData: Array<DialogsType>
}

export function Dialogs(props: PropsType) {

    return (
        <div className={s.dialogs}>
            <nav className={s.dialogs_items}>
                {props.dialogsData.map(({name, id}) =>
                    <DialogItem key={id} name={name} id={id}/>)}
            </nav>
            <div className={s.messeges}>
                {props.messageData.map(({id, message}) =>
                    <Message key={id} message={message}/>)}
            </div>
            <textarea onChange={()=>{}} value={''}></textarea>
        </div>
    )
}