import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";


const Dashboard = () => {
    return (
        <div className="grid grid-cols-5">
            <div className="col-span-1"><Sidebar></Sidebar></div>
            <div className="col-span-4">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;