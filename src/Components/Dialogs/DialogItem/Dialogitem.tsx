import {NavLink} from "react-router-dom";
import s from "../Dialogs.module.css";

export const DialogItem = (props: any) => {
    return (
        <div>
            <NavLink className={s.item} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}