import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../Hook/useAxiosSecure";
import { FaEye } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import UseAuth from "../../Hook/useAuth";
import { useEffect, useState } from "react";
import SingleTrainers from "./SingleTrainers";

const AppliedTrainer = () => {
  const { data: datas, isLoading, error, refetch } = useQuery({
    queryKey: ['appliedTrainer'],
    queryFn: async () => {
      const res = await axiosSecure.get('/trainer/pending');
      return res.data;
    }
  });

  const { user } = UseAuth();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [selectedData, setSelectedData] = useState(null); // State to hold selected data for modal
 
  const onSubmit = (data) => {
    console.log(data);
    axiosSecure.post('/trainers', data, {
      headers: {
        "Content-Type": 'Application/json'
      }
    });
  };

  useEffect(() => {
    if (user) {
      setValue('name', user.displayName || ''); // Set name if available
      setValue('photoURL', user.photoURL || ''); // Set photoURL if available
      setValue('user_email', user.email || ''); // Set email if available
    }
    if(datas){
      setValue('age', datas.age || '');
    }
  }, [user, setValue]);

  const openModal = (data) => {
    setSelectedData(data); // Set selected data for modal
    document.getElementById('my_modal_5').showModal(); // Open modal
  };

  return (
    <>
      <div className="text-center text-2xl font-bold font-Prata mt-10">Applied For Trainer</div>
      <div className="grid grid-cols-3 gap-2 w-[100%] p-3">
       {
        datas?.map(data=><SingleTrainers key={data._id} data={data} refetch={refetch}></SingleTrainers>)
       }
      </div>

      {/* Modal */}
      
      
    </>
  );
};

export default AppliedTrainer;
