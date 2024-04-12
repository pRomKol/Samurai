import nav from './NavBar.module.css'
import {NavLink} from "react-router-dom";
type PropsType = {
    navLink: LinkType[]
}
 export type LinkType = {
     to: string
     className: string
     activeClassName: string
     value: string
 }

export function NavBar(props: PropsType) {
    return (
        <nav className={nav.nav}>
            {props.navLink.map(({to, className, activeClassName, value}, index)=>
                <div>
                    <NavLink key={index} to={to} className={className} activeClassName={activeClassName}>{value}</NavLink>
                </div> )}
        </nav>
    )
}