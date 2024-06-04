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
import TrainerBookedPage from "../Pages/Trainer-Booked-Page/TrainerBookedPage";
import Deshboard from "../Pages/Deshboard/Deshboard";
import AppliedTrainer from "../Pages/AppliedTrainer/AppliedTrainer";
import Dashboard from "../Layout/Dashboard";

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
          path:"/beATrainer",
          element: <BeATrainer/>
        },
        {
          path:"/trainers",
          element: <AllTrainer></AllTrainer>
        },
        {
          path:"/trainers/:id",
          element: <TrainerDetailsPage></TrainerDetailsPage>
        },
        {
          path:"/trainers/:id/:time/:slot",
          element:<TrainerBookedPage></TrainerBookedPage>
        }
      ]
    },
    {
      path:"/deshboard",
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:"/deshboard/appliedTrainer",
          element:<AppliedTrainer></AppliedTrainer>
        }
      ]
    }
  ]);

export default router;