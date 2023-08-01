import React from 'react';

class Post extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {userId, id, title, body,} = this.props.post
        return(
            <div>
                <div>UserId: {userId}</div>
                <div>Id: {id}</div>
                <div>Title: {title}</div>
                <div>Body: {body}</div>
            </div>
        )
    }
}

export default Post;