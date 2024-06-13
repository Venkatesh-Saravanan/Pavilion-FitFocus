import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import UseAuth from "../../Hook/useAuth";
import Footer from "../../Components/Footer/Footer";


const Root = () => {
    const { loading } = UseAuth();
    if (loading) {
// set loading
        return <div className="bg-[#1E1743] h-screen flex justify-center items-center">
            <div>
                <span className=" text-white m-auto loading loading-spinner w-20"></span>
                <div className="flex items-center justify-center  -ml-[30%]">

                    <h1 className="mt-5 mr-10 tracking-widest text-[#FFFFFF] font-Prata font text-5xl">FITFOCUS</h1>
                </div>
            </div>


        </div>
    }
    return (
        <div className="w-full" >
            <Header className="w-full "></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;