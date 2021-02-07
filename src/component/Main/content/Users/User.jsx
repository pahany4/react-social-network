import styles from './Users.module.css';
import ava from './../../../../img/ava.jpg';
import { NavLink } from 'react-router-dom';



const User = ({ user, followingInProgress, unfollow, follow }) => {
    return (
        <div className={styles.userItem}>
            <div className={styles.user}>
                <div className={styles.avaWrap}>
                    <NavLink to={'/profile/' + user.id}>
                        <img className={styles.userPhoto} src={user.photos.small || ava} alt="" />
                    </NavLink>
                </div>
                <div className={styles.buttonWrap}>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {

                            unfollow(user.id);

                        }}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {

                            follow(user.id);

                        }}>Follow</button>}
                </div>
            </div>

            <div className={styles.userInfo}>
                <p className={styles.fullName}>{user.name}</p>
                <p className={styles.status}>{user.status || 'no status'}</p>
                <p className={styles.location}>{'u.location.country'},<br /> {'u.location.city'}</p>

            </div>
        </div>
    )
}

export default User;