import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../../Hook/useAxiosSecure";
import { FaTrash } from "react-icons/fa"; // Fixed icon import

const SingleSlot = ({ slot,trainerid }) => {
    console.log(trainerid)
    const { data, isLoading, error } = useQuery({
        queryKey: ['singleslot', slot],
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`http://localhost:5000/ckeckbooking/guqo@mailinator.com/${slot}`);
                return res.data;
            } catch (error) {
                throw new Error("Failed to fetch slot data");
            }
        }
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    console.log(data);

    // Function to handle slot deletion
    const handleDelete = async (id, slot) => {
        try {
            console.log(id,slot)
            await axiosSecure.delete(`/trainers/${trainerid}/${slot}`);
            
        } catch (error) {
            console.error("Error deleting slot:", error);
            // Handle error if needed
        }
    };


    const isSlotBooked = Array.isArray(data) && data.map(item => item.selectedSlot).includes(slot);

    return (
        <div>
            {isSlotBooked ? (
                <div className="bg-slate-950 text-white text-center p-5 mb-2 rounded-lg relative">
                    <h2 className=" p-1 px-1   text-white bg-red-500 absolute -top-0 -left-0">Booked</h2>
                    <div className="grid grid-cols-3 items-center">
                        <div className="col-span-2">
                            <h2 className="text-2xl font-semibold">{slot}</h2>
                            <h1>Booked By:</h1>
                            <span className="text-sm text-center text-gray-400 dark:text-gray-600">
                                {data?.map(d => d.name).join(", ")} <br />
                                {data?.map(d => d.email).join(", ")}
                            </span>
                        </div>
                        <div>
                            {/* Pass the handler function to onClick */}
                            <button onClick={() => handleDelete(data[0]._id, slot)} className="btn text-red-500"><FaTrash size={26} /></button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="relative ml-3 bg-slate-950 rounded-lg ">
                    <h2 className="p-1 px-1   text-white bg-red-500 absolute -top-0 -left-0">Available</h2>
                    <div className="grid grid-cols-3 items-center justify-between">
                        <div className="col-span-2 text-white text-2xl font-semibold text-center p-5 mb-2 rounded-lg">{slot}</div>
                        <div>
                            {/* Pass the handler function to onClick */}
                            <button onClick={() => handleDelete(data[0]._id, slot)} className="btn col-span-1 text-red-500"><FaTrash size={26} /></button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SingleSlot;
