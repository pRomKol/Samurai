import nav from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import {LinkType} from "../../index";
type PropsType = {
    navLink: Array<LinkType>
}
// let nav = {
//     'nav': 'NavBar_nav__UmmsN',
//     'item': 'NavBar_item__zuJs6'
// }
export function NavBar(props: PropsType) {

    return (
        <nav className={nav.nav}>
            {props.navLink.map(({to, className, activeClassName,value})=> <div> <NavLink to={to} className={className} activeClassName={activeClassName}>{value}</NavLink> </div> )}
        </nav>
    )
}