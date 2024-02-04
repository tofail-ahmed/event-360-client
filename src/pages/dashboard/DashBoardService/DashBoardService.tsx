import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import React from 'react';
import { GrDocumentUpdate } from "react-icons/gr";
import { RiDeleteBin5Line } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const deleteService = async (id) => {
  const response = await fetch(`http://localhost:5000/services/${id}`, {
    method: 'DELETE',
  });
  const deleteData = await response.json();
  
  if(deleteData.deletedCount){
    toast.success("Service Deleted Succesfully")
  }
  return deleteData;
};
const DashBoardService = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteServiceMutation } = useMutation({
    mutationFn: deleteService,
    onSuccess: () => {
      queryClient.invalidateQueries('services');
    },
  });

  const fetchData = async () => {
    const response = await fetch('http://localhost:5000/services');
    const data = await response.json();
    return data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ['services'],
    queryFn: fetchData,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleUpdate = (id) => {
    console.log(id);
  };

  const handleDelete = (id) => {
    deleteServiceMutation(id);
  };

  return (
    <div>
      <h1>Services</h1>
      <ToastContainer />

      {data.map((service) => (
        <div className='bg-green-400/20 p-2 m-2' key={service._id}>
          <h2><span className='underline'>Name</span>:{service.service}</h2>
          <p>Description:{service.description}</p>
          <div>
            <img className='w-[200px] h-[200px] rounded-full' src={service.image} alt="" />
          </div>
          <ul>
            {service.features.split(',').map((feature, index) => (
              <li key={index}>{index + 1}. {feature.trim()}</li>
            ))}
          </ul>
          <div className='flex gap-2'>
            <button  className='bg-green-600 text-green-400 text-md font-semibold hover:bg-blue-200 hover:text-green-600 px-2 py-1 rounded-sm flex gap-2 items-center duration-500'><span className="text-2xl border-2 border-green-400 rounded-full p-1 text-green-400"><GrDocumentUpdate /></span><NavLink to={`/admin/updateservice/${service._id}`}>Update Service</NavLink></button>
            <button onClick={() => handleDelete(service._id)} className='bg-red-600 text-red-400 text-md font-semibold hover:bg-blue-200 px-2 py-1 rounded-sm flex gap-2 items-center duration-500'><span className="text-2xl border-2 border-red-400 rounded-full p-1 text-red-400"><RiDeleteBin5Line /></span>Delete Service</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashBoardService;