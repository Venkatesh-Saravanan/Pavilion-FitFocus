import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import UseAuth from "../../Hook/useAuth";
import { axiosSecure } from "../../Hook/useAxiosSecure";
import { useState } from "react";

const BeATrainer = () => {
    const {user} = UseAuth()
   
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [skills, setSkills] = useState([]);
  if (user) {
    setValue('user_email', user.email || '')
}

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
    axiosSecure.post('/RequestToBeTrainer',data,{
    headers: {
        "Content-Type": 'Application/json'
    }
    })
  };

  return (
    <div className="font-display">
      <div className="pt-5"></div>
      <div className="w-[50%] mx-auto shadow-2xl bg-[#fff] rounded-lg pt-5">
        <Helmet>
          <title>ShareTrip | Signup</title>
        </Helmet>

        {/* form start */}
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
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

          <div className="form-control">
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
          <div className="form-control">
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
          <div className="form-control">
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

          {/* Skills */}
          <div className="form-control">
    <label className="label">
        <span className="label-text">Skills (comma-separated)</span>
    </label>
    <input
        type="text"
        placeholder="Skills (comma-separated)"
        className="input input-bordered"
        {...register("skills", { required: true })}
        onChange={(e) => setSkills(e.target.value.split(','))}
    />
    {errors.skills && (
        <p className="text-red-500 ml-1">atleat two Skills are required and (comma-separated)</p>
    )}
</div>


          <div className="form-control">
                        <label className="label">
                            <span className="label-text">Selected Skills</span>
                        </label>
                        <div className="flex flex-wrap">
                            {skills.map((skill, index) => (
                                <div key={index} className="bg-gray-200 rounded-full px-2 py-1 mr-2 mb-2">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

          {/* Available Days a Week */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Days a Week (comma-separated)</span>
            </label>
            <input
              type="text"
              placeholder="Available Days a Week (comma-separated)"
              className="input input-bordered"
              {...register("availableDays", { required: true })}
            />
            {errors.availableDays && (
              <p className="text-red-500 ml-1">Available Days a Week are required (comma-separated)</p>
            )}
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
              className="btn w-[50%] mx-auto bg-[#006aff] text-[#fff]"
            >
              Sign Up
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default BeATrainer;
