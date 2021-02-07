import CreatePostContainer from "./Posts/CreatePostContainer";
import Post from "./Posts/Post";

const Profile = (props) => {
    
    let state = props.store.getState();

    let postElements =
        state.profilePage.posts.map((post) =>
            <Post id={post.id} post={post.post} />)


    return (
        <>
            <CreatePostContainer />
            {postElements}
        </>
    )
}

export default Profile;