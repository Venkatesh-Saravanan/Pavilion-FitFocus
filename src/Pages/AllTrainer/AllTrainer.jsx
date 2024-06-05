import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../Hook/useAxiosSecure";
import { key } from "localforage";
import Trainer from "./Trainer";


const AllTrainer = () => {
    const {data,isLoading , error}= useQuery({
        queryKey: ['trainer'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/trainer/trainer')
            return res.data
        }
    })
    
    return (
        <div>
            <div className="grid grid-cols-3">
                {
                    data?.map(trainer=> <Trainer key={trainer._id} trainer={trainer}></Trainer>)
                }
            </div>
        </div>
    );
};

export default AllTrainer;