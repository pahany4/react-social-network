import logo from './../../../img/logo.png';
import classes from './logo.module.css'

const Logo = () => {
    return (
        <div className={classes.logo}>
            <img src={logo} alt="logo" />
        </div>
    )
}
export default Logo;