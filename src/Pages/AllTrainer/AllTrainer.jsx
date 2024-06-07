
import Trainer from "./Trainer";
import useTrainers from "../../Hook/useTrainers";


const AllTrainer = () => {
    const { data, isLoading, error, refetch } =useTrainers()

    // const {data,isLoading , error}= useQuery({
    //     queryKey: ['trainer'],
    //     queryFn: async()=>{
    //         const res = await axiosSecure.get('/trainer/trainer')
    //         return res.data
    //     }
    // })
    
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