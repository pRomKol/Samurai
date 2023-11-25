import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/Dialogitem";


export function Dialogs(props: any) {
    let dialogsData = [
        {id: 1, name: 'Roma'},
        {id: 2, name: 'Katya'},
        {id: 3, name: 'Ira'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
    ]
    let messageData = [
        {id: 1, message: 'yo'},
        {id: 2, message: 'hi!'},
        {id: 3, message: 'how are you?'}
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsData.map((el, id) =>
                    <DialogItem name={el.name} id={el.id}/>)}
            </div>
            <div className={s.messeges}>
                {messageData.map((el, id) => <Message key={id} message={el.message}/>)}

            </div>
        </div>
    )
}