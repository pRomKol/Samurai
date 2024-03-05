
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


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
export const dialogReducer = (state: DialogInitialStateType = initialState, action:any): DialogInitialStateType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            let newMessage = {id: 6, message: body}
            state.messageData.push(newMessage)
            return state;
        default: return state;
    }
}
export const sendMessageAC = () =>({type: SEND_MESSAGE})
export const updateNewMessageBodyAC = (text: string) => (
    {type: UPDATE_NEW_MESSAGE_BODY, body: text}
);
// export default dialogReducer
