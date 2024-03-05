import {combineReducers, createStore} from "redux";
import {dialogReducer} from "./dialogReducer";
import navBarReducer from "./navBarReducer";
import {profileReducer} from "./propfileReducer";

let reducers = combineReducers({
    profileReducer,
    dialogReducer,
    navBarReducer,
})
let store = createStore(reducers)

export type AppStateType = ReturnType<typeof reducers>



export default store

