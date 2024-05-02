import {combineReducers, createStore} from "redux";
import {dialogReducer} from "./dialogReducer";
import {navBarReducer} from "./navBarReducer";
import {profileReducer} from "./propfileReducer";
import {usersReducer} from "./userReducer";
import {authReducer} from "./authReducer";

let reducers = combineReducers({
    profileReducer,
    dialogReducer,
    navBarReducer,
    usersReducer,
    authReducer
})
let store = createStore(reducers)

export type AppStateType = ReturnType<typeof reducers>


//@ts-ignore
window.store = store

export default store

