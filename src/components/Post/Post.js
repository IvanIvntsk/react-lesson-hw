import React, {useState} from 'react';
import PostDetail from "../postDetail/postDetail";
import './post.css'

const Post = ({post}) => {
    const {id, title} = post
    const [show, setShow] = useState(false)
    return (
        <div className={'post'}>
            <h4>id: {id}</h4>
            <h3>{title}</h3>
            <button onClick={()=>setShow(!show)}>{show?'Hide':'Show Details'}</button>
            {
                show&& <PostDetail post={post}/>
            }
        </div>
    );
};

export default Post;