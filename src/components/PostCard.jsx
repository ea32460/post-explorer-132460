function PostCard({ post }) {
    return (
        <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p>ID: {post.id}</p>
            <p>User: {post.user}</p>
        </div>
    );
}

export default PostCard;