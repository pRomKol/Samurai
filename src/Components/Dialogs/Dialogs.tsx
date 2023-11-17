import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
const Message = (props: any) => {
    return(
        <div className={s.message}>
            {props.message}
        </div>
    );
};
const DialogItem = (props:any) =>{
    return(
        <div>
            <NavLink  className={s.item} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}
export function Dialogs(props: any) {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <DialogItem name={'Roma'} id={'1'}/>
                <DialogItem name={'Katya'} id={'2'}/>
                <DialogItem name={'Ira'} id={'3'}/>
                <DialogItem name={'Sasha'} id={'4'}/>
                <DialogItem name={'Vitya'} id={'5'}/>
            </div>
            <div className={s.messeges}>
                <Message message={'yo'}/>
                <Message message={'ne yo'}/>
                <Message message={'yo yo c'}/>
            </div>
        </div>
    )
}