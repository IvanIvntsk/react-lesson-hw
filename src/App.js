import React from 'react';
import  {posts} from './assets/mockData/posts'
import PostComponent from  './Post/Post'
import Post from "./Post/Post";

const App = () => {
    console.log(posts)
    return (

          <>

              {posts.map((post,id) =>
                  (<PostComponent key={id} post={post}/>))}



          </>
    );
};

export default App;