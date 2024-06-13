
import { MdPreview } from "react-icons/md";
const FeaturedClasse = ({classData}) => {
    
    return (
        <div className=" flex justify-evenly font-Rilway item-center rounded-md shadow-md bg-slate-100 dark:bg-gray-50 dark:text-gray-800 border border-[#e6e5eb]">
        <img width={150} height={200} src={classData.image} alt="" className=" rounded-md dark:bg-gray-500" />
        <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide">{classData.className}</h2>
                <p className="dark:text-gray-800">{classData.details.slice(0,70)} <span className="text-[#1E1743] font-bold text-lg ml-2">see more</span></p>
                
                
            </div>
            <div className="flex item-center font-bold ">
                <MdPreview size={25} />
                <p>  Total book: {classData.totalBook}</p>
                </div>
            
        </div>
    </div>
    );
};

export default FeaturedClasse;