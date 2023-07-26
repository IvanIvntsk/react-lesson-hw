import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postsServices} from "../../services/postsServices/postsServices";
import PostDetails from "./PostDetails/PostDetails";

const Post = () => {

    const [post, setPost] = useState(null)

    const {postId} = useParams()

    useEffect(()=>{
        postsServices.getById(postId)
            .then(({data})=>setPost(data))
    },[postId])
    return (
        <div>
            {post && <PostDetails post={post}/>}
        </div>
    );
};

export default Post;