import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home/Home"
import Detail from "../views/Detail/Detail";
import Error404 from "../views/Error404/Error404";
import Profile from "../views/Profile/Profile";
import MyInfo from "../views/Profile/components/MyInfo/MyInfo";
import LikedEvents from "../views/Profile/components/LikedEvents";
import Layout from "../views/Layout/Layout";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Home/>,
                errorElement:<Error404/>
            },
            {
                path:'/detail/:id',
                element:<Detail/>
            },
            {
                path:'/profile',
                element:<Profile/>,
                children:[
                    {
                        path:'my-info',
                        element: <MyInfo/>
                    },
                    {
                        path:'liked-events',
                        element: <LikedEvents/>
                    }
                ]
            }
        ]
    },
    
]);


export default router;