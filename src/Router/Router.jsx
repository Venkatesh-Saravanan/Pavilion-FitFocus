import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Root from "../Layout/Root/Root";
import Login from "../Auth/Login/Login";
import Home from "../Pages/Home/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path: "/login",
            element:<Login></Login>
        }
      ]
    },
  ]);

export default router;