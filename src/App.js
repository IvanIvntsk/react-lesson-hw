import React from 'react';
import  {posts} from './assets/mockData/posts'
import postComponent from  './Post/Post'

const App = () => {
    return (
        <div>
          <>

              {posts.map((post) => (<postComponent post={post}/>))}



          </>
        </div>
    );
};

export default App;
//