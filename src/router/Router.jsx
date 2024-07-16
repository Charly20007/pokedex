import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home";
import Error404 from "../components/pages/Error404";
import Login from "../components/pages/Login";
import App from "../components/templates/App";
import Pokemon from "../components/pages/Pokemon";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/pokemon/:id",
                element: <Pokemon />,
            },
            {
                path: "*",
                element: <Error404 />,
            },
            
        ]
    },
    {
        path:"/login",
        element: <Login/>
    },
    
])

export default router