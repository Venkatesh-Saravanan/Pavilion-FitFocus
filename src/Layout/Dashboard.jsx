import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import DeshboardHeader from "../Components/DeshboardHeader/DeshboardHeader";


const Dashboard = () => {
    return (
        <>
        <DeshboardHeader></DeshboardHeader>
        <div className="grid grid-cols-5 justify-center items-start">
            <div className="col-span-1 "><Sidebar></Sidebar></div>
            <div className="col-span-4">
                <Outlet></Outlet>
            </div>
        </div>
        </>
    );
};

export default Dashboard;