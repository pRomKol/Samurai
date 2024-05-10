import React from "react";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state: AppStateType) => {
    return {
        isAuth: state.authReducer.isAuth
    }
}

export const WithAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<any, any> {
        render() {
            if (!this.props.isAuth) return <Redirect to='login'/>
            return <Component {...this.props} />
        }

    }
    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}