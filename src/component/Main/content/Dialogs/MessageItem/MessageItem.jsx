import classes from "./MessageItem.module.css"

const MessageItem = (props) => {
    return (
        <div className={classes.messageItem}>
            <p id={props.id} className={classes.message}>{props.message}</p>
        </div>
    )
}

export default MessageItem;