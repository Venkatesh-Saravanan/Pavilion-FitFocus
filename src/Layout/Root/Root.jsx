import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";


const Root = () => {
    return (
        <div className="w-full" >
            <Header className="w-full "></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;