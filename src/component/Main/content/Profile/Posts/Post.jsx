import ava from './../../../../../img/ava.jpg';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.post}>
            <img src={ava} alt="ava" />
            <p id={props.id}>{props.post}</p>
        </div>
    )
}

export default Post;
