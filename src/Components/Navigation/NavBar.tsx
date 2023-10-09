import nav from './NavBar.module.css'
// let nav = {
//     'nav': 'NavBar_nav__UmmsN',
//     'item': 'NavBar_item__zuJs6'
// }
export function  NavBar(){
    return (
        <nav className={nav.nav}>
            <div>
                <a href="#" className={nav.item}>Profile</a>

            </div>
            <div>
                <a href='#' className={nav.item}>Massages</a>
            </div>
            <div>
                <a href="#" className={nav.item}>Music</a>
            </div>
            <div>
                <a href="#" className={nav.item}>Video</a>
            </div>
            <div>
                <a href="#" className={nav.item}>Friends</a>
            </div>

        </nav>
    )
}