import React from 'react';
import { useForm } from 'react-hook-form';
import { axiosSecure } from '../../Hook/useAxiosSecure';

const Test = () => {
    // Initialize useForm hook
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Function to handle form submission
    const onSubmit = (data) => {
        console.log(data); 
       axiosSecure.put(`/trainers/665f98d912759f4edd5e3a5b`, data, {
            headers: {
                "Content-Type": 'application/json'
            }
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Input field for name with validation */}
            <input
                type="text"
                {...register('name', { required: true })}
                placeholder="Name"
            />
            {errors.name && <span>This field is required</span>}

            {/* Input field for email with validation */}
            <input
                type="email"
                {...register('email', { required: true })}
                placeholder="Email"
            />
            {errors.email && <span>This field is required</span>}

            {/* Input field for state */}
            <select {...register('state')}>
                <option value="">Select State</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                {/* Add more states here */}
            </select>

            {/* Submit button */}
            <button type="submit">Submit</button>
        </form>
    );
};

export default Test;
