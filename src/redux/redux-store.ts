import {combineReducers, createStore} from "redux";
import profileReducer from "./dialogReducer";
import dialogReducer from "./dialogReducer";
import navBarReducer from "./navBarReducer";

let reducers = combineReducers({
    profileReducer,
    dialogReducer,
    navBarReducer,
})
let store = createStore(reducers)

export type AppStateType = ReturnType<typeof reducers>



export default store

