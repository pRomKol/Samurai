import React from 'react'
import {AppStateType} from "./redux/redux-store";

export const StoreContext = React.createContext({} as AppStateType)

export const Provider = (props: any) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}