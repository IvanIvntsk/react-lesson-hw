import {createBrowserRouter} from "react-router-dom";
import AppLayout from "../AppLayout/AppLayout";
import UseMemoPage from "../pages/UseMemoPage/UseMemoPage";
import UseCallbackPage from "../pages/UseCallbackPage/UseCallbackPage";
import UseTogglePage from "../pages/UseTogglePage/UseTogglePage";
import UseFetchPage from "../pages/UseFetchPage/UseFetchPage";
import UseArrayPage from "../pages/UseArrayPage/UseArrayPage";

const router = createBrowserRouter([
    {
        path:'',
        element: <AppLayout/>,
        children:[
            {
                path:'/memo',
                element: <UseMemoPage/>
            },
            {
                path:'/callback',
                element:<UseCallbackPage/>
            },
            {
                path: '/toggle',
                element: <UseTogglePage/>
            },
            {
                path: '/fetch',
                element: <UseFetchPage/>
            },
            {
                path:'/array',
                element:<UseArrayPage/>
            }
        ]
    }
])

export default router