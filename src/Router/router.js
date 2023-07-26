import {createBrowserRouter} from "react-router-dom";
import AppLayout from "../AllPages/AppLayout/AppLayout";
import Todos from "../AllPages/Todos/Todos";
import Albums from "../AllPages/Albums/Albums";
import Comments from "../AllPages/Comments/Comments";
import Posts from "../AllPages/Posts/Posts";

export const router = createBrowserRouter([
    {
    path:'',
    element:<AppLayout/>,
    children:[
        {
            path:'/todos',
            element:<Todos/>
        },
        {
          path:'/albums',
          element:<Albums/>
        },
        {
          path:'/comments',
          element:<Comments/>,
          children:[
              {
                  path:'/comments/posts/:postId',
                  element:<Posts/>
              }
          ]
        }

    ]
}
])