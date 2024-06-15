
import Trainer from "./Trainer";
import useTrainers from "../../Hook/useTrainers";


const AllTrainer = () => {
    const { data, isLoading, error, refetch } =useTrainers()

  console.log(data)
    
    return (
        <div>
            
            <div className="grid grid-cols-3 container mx-auto">
                {
                    data?.map(trainer=> <Trainer key={trainer._id} trainer={trainer}></Trainer>)
                }
            </div>
        </div>
    );
};

export default AllTrainer;