import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/Dialogitem";
import React, {ChangeEvent} from "react";
import {DialogType, MessageType} from "../../redux/dialogReducer";
import {Field, reduxForm} from "redux-form";


type PropsType = {
    onSendMessageClick: () => void
    //dispatch: Dispatch
    dialogsData: DialogType[]
    messageData: MessageType[]
    newMessageBody: string
    updateNewMessageBody: (message: string) => void
}

export function Dialogs(props: PropsType) {
    const onUpdateMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageBody(e.currentTarget.value)
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
            <MessageReduxForm/>
        </div>
    )


}

export const AddMessageForm = (props: any) => {
    const onSubmit = (formData: string)=> {

    }
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field component='textarea' name='newMessageBody' placeholder='Enter your message!'/>
                <button> Send message</button>
            </form>

        </div>
    )
}
const MessageReduxForm = reduxForm({
    form: 'dialogs'
})(AddMessageForm)