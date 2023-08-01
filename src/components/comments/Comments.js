import React from 'react';

import placeholderServices from "../../services/placeholderServices/placeholderServices";
import Comment from "./Comment/Comment";

class Comments extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: []
        }
    }
    componentDidMount() {
        placeholderServices.getComments()
            .then(({data}) => this.setState(({comments: data})))
    }
    render() {
        return (
            <div>
                <h1>Posts</h1>
                {this.state.comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>

        )
    }
}
export default Comments