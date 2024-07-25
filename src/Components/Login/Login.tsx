import React from 'react';
import {Field, reduxForm} from "redux-form";



const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'} component={'input'} type={'email'} name={'login'}/>
            </div>
            <div>
                <Field placeholder={'password'} component={'input'} type={'password'} name={'password'} />
            </div>
            <div>
                Remember me
                <Field placeholder={'password'} component={'input'} type={'checkbox'} name={'rememberMe'}/>
            </div>
            <button>Login</button>
        </form>

    );
};


export const Login = (props: any) => {
    const onSubmit = (formData: any)=> {
        console.log(formData)
    }
    return(
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)
