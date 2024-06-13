
import Trainer from "./Trainer";
import useTrainers from "../../Hook/useTrainers";


const TrainerSection = () => {
    const { data, isLoading, error, refetch } =useTrainers()

  
    
    return (
        <div>
            <div className="text-center">
                <h1 className="text-4xl font-Prata font-bold mt-24" >Trainer</h1>
                <p className="mt-2 mb-10 text-slate-500 ">Benefit from custom weight loss plans integrating exercise, diet, and ongoing support, guiding you <br /> towards safe and sustainable weight management.</p>
            </div>
            <div className="grid grid-cols-3 container mx-auto">
                {
                    data?.slice(0,3).map(trainer=> <Trainer key={trainer._id} trainer={trainer}></Trainer>)
                }
            </div>
        </div>
    );
};

export default TrainerSection;