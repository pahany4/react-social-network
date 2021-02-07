import { NavLink } from 'react-router-dom';
import classes from './NavItem.module.css';

const NavItem = (props) => {
    return (
        <li className={classes.item}>
            <NavLink activeClassName={classes.activ} to={props.path}>
                {props.link}
            </NavLink>
        </li>
    )
}

export default NavItem;