
const Post = (props) => {
    const {post} = props
    return (
        <div className={'container'}>
            <h6>{post.title}</h6>
            <p>{post.id}</p>
        </div>
    );
};

export default Post;