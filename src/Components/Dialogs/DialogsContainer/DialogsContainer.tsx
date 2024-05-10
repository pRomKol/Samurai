import {Dialogs} from "../Dialogs";
import {sendMessageAC, updateNewMessageBodyAC} from "../../../redux/dialogReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {Redirect} from "react-router-dom";
import React from "react";
import {WithAuthRedirect} from "../../../hoc/WithAuthRedirect";
import {ProfileAPIContainer} from "../../Profile/ProfileContainer";



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
let AuthRedirectComponent = WithAuthRedirect(Dialogs)
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

