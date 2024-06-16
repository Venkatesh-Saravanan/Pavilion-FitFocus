import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import UseAuth from "../../Hook/useAuth";
import { useState } from "react";
import Select from 'react-select';
import Swal from "sweetalert2";
import useAxiosSecurePrivate from "../../Hook/useAxiosSecurePrivate";


const BeATrainer = () => {
  const { user } = UseAuth()
  const axiosSecurePrivte = useAxiosSecurePrivate()
  const daysOfWeekOptions = [
    { value: 'Sunday', label: 'Sunday' },
    { value: 'Monday', label: 'Monday' },
    { value: 'Tuesday', label: 'Tuesday' },
    { value: 'Wednesday', label: 'Wednesday' },
    { value: 'Thursday', label: 'Thursday' },
    { value: 'Friday', label: 'Friday' },
    { value: 'Saturday', label: 'Saturday' }
  ];
  const [selectedDays, setSelectedDays] = useState([]);
  const [skills, setSkills] = useState([]);
  const {
    register,
    setValue,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
 

  if (user) {
    setValue('user_email', user.email || '')
    setValue('status', 'pending')
  }
  
  const onSubmit = (data) => {
    const formDataWithSkills = { ...data, AvailableDaysAWeek: selectedDays, skills: skills };
    axiosSecurePrivte.post('/trainers', formDataWithSkills, {   
    }).then(res => {
        if (res.status === 200) { 
          reset()
          if (res.data.message) {
            Swal.fire({
              icon: 'info',
              title: 'Aleart!',
              text: 'you are already Trainer or Requested for trainer ',
              confirmButtonText: 'OK',     
          });
          } else {
            Swal.fire({
              icon: 'success',
              title: 'Success!',
              text: 'Request successfully, wait for admin feedback',
              confirmButtonText: 'OK'
          });
          }
        }
    }).catch(error => {
        console.error('Error:', error);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            confirmButtonText: 'OK'
        });
    });
};


  const handleSkillChange = (e, value) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setSkills(prevSkills => [...prevSkills, value]);
    } else {
      setSkills(prevSkills => prevSkills.filter(skill => skill !== value));
    }
  };

  const handleDaysChange = (selectedOptions) => {
    setSelectedDays(selectedOptions);
  };

  const skillOptions = [
    { value: 'Nutrition', label: 'Nutrition' },
    { value: 'Exercise Technique', label: 'Exercise Technique' },
    { value: 'Fitness Assessment', label: 'Fitness Assessment' },
    { value: 'Pilates', label: 'Pilates' },
    { value: 'Cardio', label: 'Cardio' },
    { value: 'Anatomy and Physiology', label: 'Anatomy ' },
  ];
  return (
    <div className="font-Rilway">

      <div className="pt-5"></div>
      <div className="w-[50%] mx-auto shadow-2xl bg-[#fff] rounded-lg pt-3">
        <Helmet>
          <title></title>
        </Helmet>

        {/* form start */}
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <div className="text-xl font-semibold  text-center">
            <h1>Please Provide Your Information To <br /> <span className="text-[#2F7955] text-2xl font-bold">Be A Trainer</span> </h1>
          </div>
          <div className="lg:flex items-center justify-center w-full gap-3">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="text-red-500 ml-1">Name is required.</p>
              )}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input disabled
                type="email"
                placeholder={user ? user.email : "Email"}
                className="input input-bordered"
                {...register("user_email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-500 ml-1">Email is required</p>
              )}
            </div>
          </div>
          <div className="lg:flex items-center justify-center w-full gap-3">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
                {...register("photoURL", { required: true })}
              />
              {errors.photoURL && (
                <p className="text-red-500 ml-1">photoURL is required</p>
              )}
            </div>
            {/* Age */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Age</span>
              </label>
              <input
                type="number"
                placeholder="Age"
                className="input input-bordered"
                {...register("age", { required: true })}
              />
              {errors.age && <p className="text-red-500 ml-1">Age is required</p>}
            </div>
          </div>

          <div className="form-control w-full hidden">
            <label className="label">
              <span className="label-text">Status</span>
            </label>
            <input
              disabled
              type="text"
              placeholder="Status"
              className="input input-bordered"
              {...register("status", { required: true })}
            />
            {errors.status && (
              <p className="text-red-500 ml-1">Status is required</p>
            )}
          </div>



          {/* Skills */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Skills</span>
            </label>
            <div className="grid grid-cols-3">
              {skillOptions.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`skill-${index}`}
                    value={skill.value}
                    {...register(`skills.${index}`)}
                    onChange={e => handleSkillChange(e, skill.value)}
                  />
                  <label htmlFor={`skill-${index}`} className="ml-2">{skill.label}</label>
                </div>
              ))}
            </div>
            {errors.skills && (
              <p className="text-red-500 ml-1">At least one skill is required</p>
            )}
          </div>




          {/* Available Days a Week */}
          <div className="lg:flex items-center justify-center w-full gap-3">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Available Days a Week</span>
            </label>
            <Select
              isMulti
              options={daysOfWeekOptions}
              value={selectedDays}
              onChange={handleDaysChange}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Experience (year)</span>
            </label>
            <input
              type="number"
              placeholder="Experience"
              className="input input-bordered"
              {...register("Experience", { required: true })}
            />
            {errors.Experience && (
              <p className="text-red-500 ml-1">Experience is required</p>
            )}
          </div>
          </div>

          {/* Available Time in a Day */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Time in a Day</span>
            </label>
            <input
              type="text"
              placeholder="Available Time in a Day"
              className="input input-bordered"
              {...register("availableTime", { required: true })}

            />
            {errors.availableTime && (
              <p className="text-red-500 ml-1">Available Time in a Day is required</p>
            )}
          </div>

          {/* Other Info */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Other Info</span>
            </label>
            <textarea
              placeholder="Other Info"
              className="textarea textarea-bordered"
              {...register("otherInfo", { required: true })}
            />
            {errors.otherInfo && (
              <p className="text-red-500 ml-1">Other Info is required</p>
            )}
          </div>

          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn w-[50%] mx-auto bg-[#1E1743] text-[#fff]"
            >
              Applied
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default BeATrainer;
