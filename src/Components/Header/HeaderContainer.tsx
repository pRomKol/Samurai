import React from 'react';
import {Header} from "./Header";

import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserDataTC, setAuthUserData} from "../../redux/authReducer";


class HeaderContainer extends React.Component<any, any> {
   componentDidMount() {
       getAuthUserDataTC()
   }

    render() {
        return <Header {...this.props}/>;
    }
}
const mapStateTpProps = (state: AppStateType) => ({
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login
})

export default connect (mapStateTpProps, {setAuthUserData, getAuthUserDataTC})(HeaderContainer)

