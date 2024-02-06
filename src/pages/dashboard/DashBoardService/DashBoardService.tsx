import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import React from 'react';
import { GrDocumentUpdate } from "react-icons/gr";
import { RiDeleteBin5Line } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const deleteService = async (id) => {
  const response = await fetch(
    `https://event360-server-phi.vercel.app/services/${id}`,
    {
      method: "DELETE",
    }
  );
  const deleteData = await response.json();

  if (deleteData.deletedCount) {
    toast.success("Service Deleted Succesfully");
  }
  return deleteData;
};
const DashBoardService = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteServiceMutation } = useMutation({
    mutationFn: deleteService,
    onSuccess: () => {
      queryClient.invalidateQueries("services");
    },
  });

  const fetchData = async () => {
    const response = await fetch(
      "https://event360-server-phi.vercel.app/services"
    );
    const data = await response.json();
    return data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: fetchData,
  });
  console.log(data);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // const handleUpdate = (id) => {
  //   console.log(id);
  // };

  const handleDelete = (id) => {
    deleteServiceMutation(id);
  };

  return (
    <div className="">
      <h1 className="text-4xl text-center font-extrabold">Our Services</h1>
      <ToastContainer />

      {data.map((service) => (
        <div
          className="bg-green-400/20 p-2  flex mx-[20px] lg:flex-row flex-col-reverse gap-8 my-4"
          key={service._id}
        >
          <div>
            <img
              className="w-[250px] h-[250px] mx-auto rounded-lg"
              src={service.image}
              alt=""
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold my-2">{service.service}</h2>
            <p className="text-md font-semibold my-1">{service.description}</p>
            <ul>
              {service.features.split(",").map((feature, index) => (
                <li key={index}>
                  {index + 1}. {feature.trim()}
                </li>
              ))}
            </ul>
            <div className="flex gap-2 my-2">
              <button className="  bg-green-600 text-green-400 text-md font-semibold hover:bg-blue-200 hover:text-green-600 px-2 py-1 rounded-sm flex gap-2 items-center duration-500">
                <span className="text-2xl border-2 border-green-400 rounded-full p-1 text-green-400">
                  <GrDocumentUpdate />
                </span>
                <NavLink to={`/admin/updateservice/${service._id}`}>
                  Update Service
                </NavLink>
              </button>
              <button
                onClick={() => handleDelete(service._id)}
                className="bg-red-600 text-red-400 text-md font-semibold hover:bg-blue-200 px-2 py-1 rounded-sm flex gap-2 items-center duration-500"
              >
                <span className="text-2xl border-2 border-red-400 rounded-full p-1 text-red-400">
                  <RiDeleteBin5Line />
                </span>
                Delete Service
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashBoardService;