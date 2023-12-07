import nav from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import {LinkType} from "../../redux/state";
type PropsType = {
    navLink: Array<LinkType>
}

export function NavBar(props: PropsType) {

    return (
        <nav className={nav.nav}>
            {props.navLink.map(({to, className, activeClassName,  value})=> <div> <NavLink to={to} className={className} activeClassName={activeClassName}>{value}</NavLink> </div> )}
        </nav>
    )
}