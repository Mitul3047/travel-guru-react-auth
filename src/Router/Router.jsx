import { createBrowserRouter } from "react-router-dom";
import Error from "../Components/Error";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";



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
            {
                path: '/register',
                element:<Register></Register>
            },
        ]
    }
])



export default router;