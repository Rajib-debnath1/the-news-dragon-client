import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout/LoginLayout";
import Main from "../layouts/Main";
import NewsLayout from "../layouts/NewsLayout";
import Cetegory from "../pages/Home/Cetegory/Cetegory";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import News from "../pages/News/News/News";
import PrivetRoutes from "./PrivetRoutes";
import Terms from "../pages/Shared/Terms/Terms";

const router = createBrowserRouter([

    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path : '/',
                element: <Navigate to = "/cetegory/0"></Navigate>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            }
        ]
    },
    {
        path: 'cetegory',
        element: <Main></Main>,
        children: [

            {
                path: ':id',
                element: <Cetegory></Cetegory>,
                loader: ({ params }) => fetch(`http://localhost:5000/cetegories/${params.id}`)
            }
        ]
    },
    {
        path: '/news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivetRoutes><News></News></PrivetRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])
export default router;