import {createBrowserRouter} from "react-router-dom";
import AppLayout from "../pages/AppLayout/AppLayout";
import CarsPage from "../pages/CarsPage/CarsPage";
import PostsPage from "../pages/PostsPage/PostsPage";
import CommentsPage from "../pages/CommentsPage/CommentsPage";

const router = createBrowserRouter([
    {
        path:'',
        element:<AppLayout/>,
        children:[
            {
                path:'/cars',
                element:<CarsPage/>
        },
            {
                path:'/posts',
                element:<PostsPage/>
            },
            {
                path:'/comments',
                element:<CommentsPage/>
            }
        ]
    }
])
export default router
