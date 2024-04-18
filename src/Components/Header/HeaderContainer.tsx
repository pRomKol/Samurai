import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/authReducer";

class HeaderContainer extends React.Component<any, any> {
   componentDidMount() {
       axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
           .then(res=>{
               if (res.data.resultCode === 0) {
               let {id, login, email } = res.data.data;
               this.props.setAuthUserData(id, login, email)
           }
           })
   }

    render() {
        return <Header {...this.props}/>;
    }
}
const mapStateTpProps = (state: AppStateType) => ({
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login
})

export default connect (mapStateTpProps, {setAuthUserData})(HeaderContainer)

