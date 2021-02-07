import Post from "./Post";

const Posts = (props) => {
    console.log("render")
    let postElements =
        props.posts.map((post) =>
            <Post id={post.id} post={post.post} />)

    return (
        <>
            { postElements}
        </>
    )
}

export default Posts;