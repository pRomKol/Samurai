import {Dialogs} from "../Dialogs";
import {sendMessageAC, updateNewMessageBodyAC} from "../../../redux/dialogReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {FC} from "react";
import {WithAuthRedirect} from "../../../hoc/WithAuthRedirect";




let mapStateToProps = (state: AppStateType) =>{
    return {
        dialogsData : state.dialogReducer.dialogsData,
        messageData: state.dialogReducer.messageData,
        newMessageBody: state.dialogReducer.newMessageBody,

    }
}
let mapDispatchToProps = (dispatch: Dispatch) =>{
    return {
        updateNewMessageBody: (body: string) => {dispatch(updateNewMessageBodyAC(body))},
        onSendMessageClick:() => {dispatch(sendMessageAC())},

    }
}


export const DialogsContainer = compose<FC>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)