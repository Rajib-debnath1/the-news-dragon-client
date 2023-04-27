import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import NewsLayout from "../layouts/NewsLayout";
import Cetegory from "../pages/Home/Cetegory/Cetegory";
import Home from "../pages/Home/Home/Home";
import News from "../pages/News/News/News";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/cetegory/:id',
                element: <Cetegory></Cetegory>,
                loader: ({params}) => fetch(`http://localhost:5000/cetegories/${params.id}`)
            }
        ]
    },
    {
        path: '/news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <News></News>
            }
        ]
    }
])
export default router;