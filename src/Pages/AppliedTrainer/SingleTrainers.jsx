import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye } from "react-icons/fa6";
import { axiosSecure } from "../../Hook/useAxiosSecure";
import Swal from 'sweetalert2';
const SingleTrainers = ({ data,refetch }) => {
    const [selectedTrainer, setSelectedTrainer] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const { register, setValue, handleSubmit, reset } = useForm();

    const handleButtonClick = async (id) => {
        const response = await axiosSecure.get(`/trainers/${id}`);
        setSelectedTrainer(response.data);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedTrainer(null);
        reset();
    };
    

  
    const onSubmit = async (fdata) => {
        try {
            await axiosSecure.put(`/users/${fdata.email}`,{role:'trainer'}, {
               
            });
            console.log(fdata);
            console.log(fdata.email)
            const response = await axiosSecure.put(`/trainers/${data._id}`, fdata, {
                headers: {
                    "Content-Type": 'application/json'
                }
            });
    
            
            if (response.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Trainer updated successfully',
                    confirmButtonText: 'OK'
                });
                closeModal();
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'An error occurred while updating the trainer. Please try again later.',
                confirmButtonText: 'OK'
            });
        }
    
        refetch(); // Refetch data after updating the trainer
    };
    
    if (data) {
        setValue('name', data.name || '')
        setValue('age', data.age || '')
        setValue('email', data.user_email || '')
        setValue('skills', data.skills || '')
        setValue('availableTime', data.availableTime || '')
        setValue('otherInfo', data.otherInfo || '')
         setValue('status', 'trainer')
      }
    return (
        <div>
            <div key={data.id} className="max-w-md h-72 shadow-sm rounded-xl w-[100%] flex justify-center items-center p-8 sm:flex sm:space-x-6 bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                <div className="flex flex-col space-y-4">
                    <div className="flex justify-center items-center gap-5">
                        <img
                            alt=""
                            className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-violet-600 dark:ring-offset-gray-100"
                            src={data.photoURL}
                        />

                        <div>
                            <h2 className="text-2xl font-semibold">{data.name}</h2>

                        </div>

                    </div>
                    <hr className=" h-[1px] border-none bg-slate-300 mx-auto w-[100%]" />
                    <div className='grid grid-cols-3 justify-center gap-2'>
                        {data.skills.map((skill, index) => (
                            <span key={index} className="text-sm text-center text-gray-400 dark:text-gray-600">
                                {skill}
                            </span>
                        ))}
                    </div>
                    <hr className="-ml-0 h-[1px] border-none bg-slate-300 mx-auto w-[100%]" />
                    <div onClick={() => handleButtonClick(data._id)} className="flex cursor-pointer bg-transparent items-center justify-center">
                        <FaEye />
                    </div>
                    <hr className="-ml-0 h-[1px] border-none bg-slate-300 mx-auto w-[100%]" />

                </div>
            </div>

            {modalOpen && (
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle" open>
                    <div className="modal-box">
                        {selectedTrainer ? (
                            <div className='p-5'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-4 h-28 w-28">
                                   <img src={data.photoURL} alt="" />
                                   
                                </div>
                                <div className="mb-4">
                                    
                                    <input
                                 
                                        className="mt-1 text-2xl  font-bold block w-full"
                                        {...register("name")}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Skills</label>
                                    <input
                                        className="mt-1 block w-full"
                                        {...register("skills")}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Age</label>
                                    <input
                                        type="number"
                                        className="mt-1 block w-full"
                                        {...register("age")}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">email</label>
                                    <input
                                        type="text"
                                        className="mt-1 block w-full"
                                        {...register("email")}
                                    />
                                </div>
                                <div className="mb-4">
                                   
                                   
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Available Days</label>
                                    {data.AvailableDaysAWeek.map((day, index) => (
                                        <div key={index} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                value={day.value}
                                                {...register("availableDays")}
                                            />
                                            <label className="ml-2">{day.label}</label>
                                        </div>
                                    ))}
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Available Time</label>
                                    <input
                                        className="mt-1 block w-full"
                                        {...register("availableTime")}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">status</label>
                                    <input
                                        className="mt-1 block w-full"
                                        {...register("status")}
                                    />
                                </div>
                                <div className="mb-4 ">
                                    <label className="block text-sm font-medium text-gray-700">otherInfo</label>
                                    <input
                                    type='textarea'
                                    disabled
                                        className="mt-1 block w-full"
                                        {...register("otherInfo")}
                                    />
                            <h1>{data.otherInfo}</h1>
                                </div>
                                <div className="modal-action">
                                    <button  type="submit" className="btn">Submit</button>
                                    <button type="button" className="btn" onClick={closeModal}>Close</button>
                                </div>
                            </form>
                            </div>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default SingleTrainers;
