import {Dialogs} from "../Dialogs";
import {sendMessageAC, updateNewMessageBodyAC} from "../../../redux/dialogReducer";
import {connect} from "react-redux";


let mapStateToProps = (state: any) =>{
    return {
        dialogsData : state.dialogsData,
        messageData: state.messageData,
        newMessageBody: state.newMessageBody
    }
}
let mapDispatchToProps = (dispatch: any) =>{
    return {
        updateNewMessageBody: (body: any) => {dispatch(updateNewMessageBodyAC(body))},
        onSendMessageClick:() => {dispatch(sendMessageAC())}
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

