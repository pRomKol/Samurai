import nav from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import {LinkType} from "../../redux/state";
type PropsType = {
    navLink: LinkType[]
}

export function NavBar(props: PropsType) {
    return (
        <nav className={nav.nav}>
            {props.navLink.map(({to, className, activeClassName, value}, index)=> <div> <NavLink key={index} to={to} className={className} activeClassName={activeClassName}>{value}</NavLink> </div> )}
        </nav>
    )
}