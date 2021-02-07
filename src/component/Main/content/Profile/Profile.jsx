import CreatePostContainer from "./Posts/CreatePostContainer";
import PostsContainer from "./Posts/PostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <>
            <ProfileInfo
                savePhoto={props.savePhoto}
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
            />
            <CreatePostContainer />
            <PostsContainer />
        </>
    )
}

export default Profile;