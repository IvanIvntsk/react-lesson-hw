import React from "react";

import placeholderServices from "../../services/placeholderServices/placeholderServices";
import Post from "./Post/Post";

class PostList extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        placeholderServices.getPosts()
            .then(({data}) => this.setState(({posts: data})))
    }
    render() {
        return (
            <div>
                <h1>Posts</h1>
                {this.state.posts.map(post => <Post key={post.id} post={post}/>)}
            </div>

        )
    }
}

export default PostList