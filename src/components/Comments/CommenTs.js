import React, {useEffect, useState} from 'react';
import {commentsServices} from "../../services/commentsServices/commentsServices";
import Comment from "./Comment/Comment";

const CommenTs = () => {
   const[comments, setComments] = useState([])

    useEffect(()=>{
        commentsServices.getAll()
            .then(({data})=>setComments(data))
    },[])
    return (
        <div>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommenTs;