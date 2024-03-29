
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


 type ActionsType = SendMessageAC | UpdateNewMessageBodyAC
export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

type DialogInitialStateType = {
    messageData: MessageType[]
    dialogsData: DialogType[]
    newMessageBody: string
}


let initialState =  {
    messageData: [
    {id: 1, message: 'yo'},
    {id: 2, message: 'hi!'},
    {id: 3, message: 'how are you?'}
],
    dialogsData: [
    {id: 1, name: 'Roma'},
    {id: 2, name: 'Katya'},
    {id: 3, name: 'Ira'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
],
    newMessageBody: ''
}
export const dialogReducer = (state: DialogInitialStateType = initialState, action:ActionsType): DialogInitialStateType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            const copyState= {...state}
            copyState.newMessageBody = action.body
            return copyState;
        case SEND_MESSAGE:
            let stateCopy = {...state}
            let body = stateCopy.newMessageBody
            stateCopy.newMessageBody = ''
            let newMessage = {id: 6, message: body}
            stateCopy.messageData.push(newMessage)
            return stateCopy;
        default: return state;
    }
}
export const sendMessageAC = () =>({type: SEND_MESSAGE})
export const updateNewMessageBodyAC = (text: string) => (
    {type: UPDATE_NEW_MESSAGE_BODY, body: text}
);
// export default dialogReducer
//types
type SendMessageAC = {
    type: typeof SEND_MESSAGE
}
type UpdateNewMessageBodyAC = {
    type: typeof UPDATE_NEW_MESSAGE_BODY
    body: string
}