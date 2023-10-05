import { createBrowserRouter } from "react-router-dom";
import Error from "../Components/Error";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";



const router = createBrowserRouter([
    {
        path:'/',
        errorElement:<Error></Error>,
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
        ]
    }
])



export default router;