import { NavLink } from "react-router-dom";
import ava from "./../../../../../img/ava.jpg";
import classes from "./DialogItem.module.css"

const DialogItem = (props) => {
    return (
        <NavLink to={"/dialogs/" + props.id} activeClassName={classes.activ} className={classes.dialogItemLink}>
            <img src={ava} alt="ava"/>
            <p className={classes.name}>{props.name}</p>
        </NavLink>
    )
}

export default DialogItem;