import nav from "../Components/Navigation/NavBar.module.css";

let initialState = {navLink: [
        {to: '/profile', className: nav.item, activeClassName: nav.active, value: 'Profile'},
        {to: '/dialogs', className: nav.item, activeClassName: nav.active, value: 'Message'},
        {to: '/music', className: nav.item, activeClassName: nav.active, value: 'Music'},
        {to: '/users', className: nav.item, activeClassName: nav.active, value: 'Users'},
        {to: '/video', className: nav.item, activeClassName: nav.active, value: 'Video'},
        {to: '/friends', className: nav.item, activeClassName: nav.active, value: 'Friends'},
    ],}
export const navBarReducer = (state = initialState, action: any) => {
    return state;
}

