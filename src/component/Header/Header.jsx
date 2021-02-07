import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import Logo from './logo/logo';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <Logo />
                <div className={classes.auth}>
                { props.isAuth 
                ? <div>{props.login} <button onClick={props.logout}>Log out</button> </div>
                : <NavLink className={classes.auth} to={'/login'}>Login</NavLink> }
                </div>
            </div>
        </header>
    )
}

export default Header;
