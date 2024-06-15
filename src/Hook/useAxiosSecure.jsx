import axios from "axios";

export const axiosSecure = axios.create({
    baseURL: 'https://server-blue-seven.vercel.app'

})

const useAxiosSecure = () => {
   return axiosSecure
};

export default useAxiosSecure;