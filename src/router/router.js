import {createBrowserRouter} from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import CarsPage from "../page/CarsPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        children: [
            {
                path: '/cars',
                element: <CarsPage/>
            }
        ]
    }
])

export default router