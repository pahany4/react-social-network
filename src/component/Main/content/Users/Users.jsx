import Paginator from '../../../common/Paginator/Paginator';
import User from './User';


const Users = ({ totalItemsCount, pageSize, currentPage, onPageChanged, followingInProgress, follow, unfollow, ...props }) => {
    return (
        <div>
            <Paginator
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalItemsCount={totalItemsCount}
                pageSize={pageSize}

            />
            {
                props.users.map(u => <User
                    key={u.id}
                    user={u}
                    followingInProgress={followingInProgress}
                    follow={follow}
                    unfollow={unfollow}
                />
                )
            }
        </div>
    )
}

export default Users;