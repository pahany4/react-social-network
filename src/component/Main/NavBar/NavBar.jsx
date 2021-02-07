import classses from './NavBar.module.css';
import NavItem from './NavItem/NavItem';
const NavBar = () => {
    return (
        <nav className={classses.nav}>
            <ul className={classses.list}>
                <NavItem path='/profile' link='Profile'/>
                <NavItem path='/dialogs' link='Dialogs'/>
                <NavItem path='/users' link='Users'/>
                <NavItem path='/news' link='News'/>
                <NavItem path='/music' link='Music'/>
                <NavItem path='/settings' link='Settings'/>
            </ul>
        </nav>
    )
}
export default NavBar;