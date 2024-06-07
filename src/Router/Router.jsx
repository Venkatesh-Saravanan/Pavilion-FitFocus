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
import Test from "../Pages/AppliedTrainer/Test";
import Newslatter from "../Pages/Newslatter/Newslatter";
import TrainerDashboard from "../Pages/Trainer/TrainerDashboard";
import Signup from "../Auth/SignUp/Signup";
import Trainers from "../Pages/Deshboard/Trainers/Trainers";
import AddNewSlot from "../Pages/Deshboard/AddNewSlot/AddNewSlot";
import AddnewClass from "../Pages/Deshboard/AddnewClass/AddnewClass";
import AllClasses from "../Pages/AllClasses/AllClasses";

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
            path: "/signup",
            element:<Signup></Signup>
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
        },
        {
          path:"/allclass",
          element:<AllClasses></AllClasses>
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
        },
        {
          path:"/deshboard/test",
          element:<Test></Test>
        },
        {
          path:"/deshboard/newslatter",
          element: <Newslatter></Newslatter>
        },
        {
          path:"/deshboard/trainer",
          element:<TrainerDashboard></TrainerDashboard>
        },
        {
          path:"/deshboard/trainers",
          element:<Trainers></Trainers>
        },
        {
          path:"/deshboard/addslot",
          element:<AddNewSlot></AddNewSlot>
        },
        {
          path:"/deshboard/addnewclass",
          element:<AddnewClass></AddnewClass>
        },
      ]
    }
  ]);

export default router;