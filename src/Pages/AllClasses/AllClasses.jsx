import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../Hook/useAxiosSecure";
import Class from "./Class";

const AllClasses = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const { data, isLoading, error } = useQuery({
    queryKey: ["Allclass"],
    queryFn: async () => {
      const res = await axiosSecure("/NewClass");
      return res.data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const totalPages = Math.ceil(data.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentClasses = data.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="">
      <div className="font-Prata   font-bold text-2xl p-10 text-center">
        <h1>All Classes</h1>
      </div>
      <div className="lg:grid grid-cols-2  mb-20  container gap-10 mx-auto ">
        {currentClasses.map((item) => (
          <Class key={item._id} Class={item} dataLength={data.length} />
        ))}
      </div>
      <div className="flex justify-center mt-5">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-4 py-2 rounded-full ${
              currentPage === index + 1
                ? "bg-[#2F7955] text-white mb-5"
                : "bg-gray-200 text-gray-700 mb-5"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllClasses;
