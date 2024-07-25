import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogReducer} from "./dialogReducer";
import {navBarReducer} from "./navBarReducer";
import {profileReducer} from "./propfileReducer";
import {usersReducer} from "./userReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'


let reducers = combineReducers({
    profileReducer,
    dialogReducer,
    navBarReducer,
    usersReducer,
    authReducer,
    form: formReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export type AppStateType = ReturnType<typeof reducers>


//@ts-ignore
window.store = store

export default store

