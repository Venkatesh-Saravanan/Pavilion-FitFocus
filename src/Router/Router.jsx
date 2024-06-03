import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Root from "../Layout/Root/Root";
import Login from "../Auth/Login/Login";
import Home from "../Pages/Home/Home";
import BeATrainer from "../Components/BeATrainer/BeATrainer";
import AllTrainer from "../Pages/AllTrainer/AllTrainer";
import TrainerDetailsPage from "../Pages/TrainerDetailsPage/TrainerDetailsPage";

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
        },
        {
          path:"/be",
          element: <BeATrainer/>
        },
        {
          path:"/trainers",
          element: <AllTrainer></AllTrainer>
        },
        {
          path:"/trainers/:id",
          element: <TrainerDetailsPage></TrainerDetailsPage>
        }
      ]
    },
  ]);

export default router;