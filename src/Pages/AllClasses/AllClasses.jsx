import { useQuery } from "@tanstack/react-query";
import  { axiosSecure } from "../../Hook/useAxiosSecure";
import Class from "./Class";

const AllClasses = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['Allclass'],
        queryFn: async () => {
            const res = await axiosSecure('/NewClass')
            return res.data;
        }
    })
    
    return (
        <div className="bg-slate-300">
            <div className="font-Prata font-bold text-2xl p-10 text-center">
                <h1>All Classes</h1>
            </div>
            <div className="grid grid-cols-2 container gap-10 mx-auto ">
                {
                    data?.map(item => <Class key={item._id} Class={item} />)
                }

            </div>
        </div>
    );
};

export default AllClasses;