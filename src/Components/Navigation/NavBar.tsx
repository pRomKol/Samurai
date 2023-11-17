import nav from './NavBar.module.css'
import {NavLink} from "react-router-dom";
// let nav = {
//     'nav': 'NavBar_nav__UmmsN',
//     'item': 'NavBar_item__zuJs6'
// }
export function NavBar() {
    let link = [
        {to: '/profile', className: nav.item, activeClassName: nav.active, value: 'Profile'},
        {to: '/dialogs', className: nav.item, activeClassName: nav.active, value: 'Profile'},
        {to: '/music', className: nav.item, activeClassName: nav.active, value: 'Profile'},
        {to: '/video', className: nav.item, activeClassName: nav.active, value: 'Profile'},
        {to: '/friends', className: nav.item, activeClassName: nav.active, value: 'Profile'},
    ]
    return (
        <nav className={nav.nav}>
            {/*{link.map((l) => {*/}
            {/*    <div>*/}
            {/*        <NavLink to={l.to} className={nav.item} activeClassName={nav.active}>{l.value}</NavLink>*/}
            {/*    </div>*/}
            {/*})}*/}
            <div>
                <NavLink to="/profile" className={nav.item} activeClassName={nav.active}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" className={nav.item} activeClassName={nav.active}>Massages</NavLink>
            </div>
            <div>
                <NavLink to="/music" className={nav.item} activeClassName={nav.active}>Music</NavLink>
            </div>
            <div>
                <NavLink to="/video" className={nav.item} activeClassName={nav.active}>Video</NavLink>
            </div>
            <div>
                <NavLink to="/friends" className={nav.item} activeClassName={nav.active}>Friends</NavLink>
            </div>
        </nav>
    )
}