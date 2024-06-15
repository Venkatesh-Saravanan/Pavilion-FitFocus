import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import UseAuth from "../../Hook/useAuth";
import { axiosSecure } from "../../Hook/useAxiosSecure";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecurePrivate from "../../Hook/useAxiosSecurePrivate";

const PaymentPage = () => {
    const { user } = UseAuth()
    const axiosSecurePrivte = useAxiosSecurePrivate()
    const location = useLocation();
    const { register, setValue, handleSubmit } = useForm();
    const { formData } = location.state || {};

   

    const { data: classe, isLoading: classesLoading, refetch } = useQuery({
        queryKey: ['classe', formData?.selectedClass],
        queryFn: async () => {
            const res = await axiosSecure.get(`/NewClass/${formData?.selectedClass}`);
            return res.data;
        },
        enabled: !!formData?.selectedClass 
    });


    const onSubmit = (data) => {

        axiosSecure.put(`/NewClass/${formData?.selectedClass}`, classe);
        axiosSecurePrivte.post("/payment", data)
        .then(res=>{
            if(res){
                if (res.data.message=="0") {
                    Swal.fire("Already Booked");
                } else {
                    Swal.fire("Booking Confirm");
                }
                
            }
        })

    };
    useEffect(() => {
        if (formData) {
            setValue('trainerName', formData.trainerName || '');
            setValue('trainerEmail', formData.trainerEmail || '');
            setValue('selectedSlot', formData.selectedSlot);
            setValue('package', formData.package);
            setValue('class', formData.selectedClass);
            setValue('name', user?.displayName);
            setValue('email', user?.email);
            if (formData.package === 'basic') {
                setValue('price', 10);
            } else if (formData.package === 'standard') {
                setValue('price', 50);
            } else if (formData.package === 'premium') {
                setValue('price', 100);
            }
        }
    }, [formData, setValue]);


    return (
        <div>
            <div className="flex font-Rilway text-xl flex-col mx-auto bg-slate-200 mt-10 max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="text-center font-bold text-2xl pb-10 text-[#2F7955]">
                    Check Your Booking Details
                    </div>
                    <div className="grid grid-cols-2">
                        <label className="block text-gray-700 font-bold text-base" htmlFor="trainerName">Trainer Name:</label>
                        <input disabled id="trainerName" className="block w-full bg-slate-200" {...register('trainerName')} />
                    </div>

                    <div className="grid grid-cols-2 mt-2">
                        <label className="block text-gray-700 font-bold text-base" htmlFor="trainerName">Trainer Email:</label>
                        <input disabled id="trainerName" className="block w-full bg-slate-200" {...register('trainerEmail')} />
                    </div>

                    <div className="grid grid-cols-2">
                        <label className="block mt-2 text-gray-700 font-bold text-base" htmlFor="selectedSlot">Slot:</label>
                        <input disabled id="selectedSlot" type="text" className="block w-full bg-slate-200 border-none" {...register('selectedSlot')} />
                    </div>
                    <div className="grid grid-cols-2">
                        <label className="block mt-2 text-gray-700 font-bold text-base" htmlFor="selectedSlot">Package name: </label>
                        <input disabled id="Packagename" type="text" className="block w-full bg-slate-200 border-none" {...register('package')} />
                    </div>
                    <div className="grid grid-cols-2">
                        <label className="block mt-2 text-gray-700 font-bold text-base" htmlFor="selectedSlot">selected Class name: </label>
                        <input disabled id="Packagename" type="text" className="block w-full bg-slate-200 border-none" {...register('class')} />
                    </div>



                    <div className="grid grid-cols-2">
                        <label className="block text-gray-700 font-bold text-base" htmlFor="price">Price</label>
                        <input id="price" type="text" className="block w-full border-none bg-slate-200" {...register('price')} />
                    </div>

                    <div className="grid grid-cols-2">
                        <label className="block text-gray-700 font-bold text-base" htmlFor="name">Customer Name</label>
                        <input disabled id="name" type="text" className="block border-none w-full bg-slate-200" {...register('name')} />
                    </div>

                    <div className="grid grid-cols-2">
                        <label className="block text-gray-700 font-bold text-base" htmlFor="email">Cunstomer Email</label>
                        <input disabled id="email" type="email" className="border-none block w-full bg-slate-200" {...register('email')} />
                    </div>



                    <button type="submit" className="block w-full bg-[#2F7955] text-white font-bold py-2 px-4 rounded mt-4">
                        Confirm Booking
                    </button>
                </form>
            </div>

        </div>
    );
};

export default PaymentPage;
