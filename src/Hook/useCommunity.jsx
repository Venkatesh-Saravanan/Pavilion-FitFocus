import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "./useAxiosSecure";

const useCommunity = () => {
    const { data: posts, isLoading, error, refetch } = useQuery({
        queryKey: ['forumPosts'], // Renamed the query key to 'forumPosts'
        queryFn: async () => {
            const res = await axiosSecure.get("/forumPost"); // Removed '/forumPost' from the query URL
            return res.data;
        }
    });

    return { posts, isLoading, error, refetch };
};

export default useCommunity;
