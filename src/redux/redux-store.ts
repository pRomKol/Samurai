import {combineReducers, createStore} from "redux";
import profileReducer from "./dialogReducer";
import dialogReducer from "./dialogReducer";
import navBarReducer from "./navBarReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    navBar: navBarReducer,
})


// @ts-ignore
let store = createStore(reducers)




export default store

