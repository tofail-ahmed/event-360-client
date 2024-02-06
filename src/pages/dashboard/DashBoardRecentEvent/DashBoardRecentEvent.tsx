import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import React from 'react';
import { GrDocumentUpdate } from "react-icons/gr";
import { RiDeleteBin5Line } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const deleteRecentEvent = async (id) => {
  const response = await fetch(`http://localhost:5000/recents/${id}`, {
    method: 'DELETE',
  });
  const deleteData = await response.json();
  
  if(deleteData.deletedCount){
    toast.success("Recent Event Deleted Succesfully")
  }
  return deleteData;
};
const DashBoardRecentEvent = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteRecentEventMutation } = useMutation({
    mutationFn: deleteRecentEvent,
    onSuccess: () => {
      queryClient.invalidateQueries('recents');
    },
  });

  const fetchData = async () => {
    const response = await fetch('http://localhost:5000/recents');
    const data = await response.json();
    return data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ['recents'],
    queryFn: fetchData,
  });

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
    deleteRecentEventMutation(id);
  };

  return (
    <div className=''>
      <h1 className='text-4xl text-center font-extrabold my-12'>Our Recent Events</h1>
      <ToastContainer />

      {data.map((recent) => (
        <div className='bg-green-400/20 p-2  flex mx-[20px] lg:flex-row flex-col-reverse gap-8 my-4' key={recent._id}>
          
          <div>
            <img className='w-[250px] h-[250px] mx-auto rounded-lg' src={recent.image} alt="" />
          </div>
         <div>
         <h2 className='text-3xl font-semibold my-2'>{recent.eventItem}</h2>
          <p className='text-md font-semibold my-1'>{recent.description}</p>
          <ul>
            {recent.features.split(',').map((feature, index) => (
              <li key={index}>{index + 1}. {feature.trim()}</li>
            ))}
          </ul>
          <div className='flex gap-2 my-2'>
            <button  className='  bg-green-600 text-green-400 text-md font-semibold hover:bg-blue-200 hover:text-green-600 px-2 py-1 rounded-sm flex gap-2 items-center duration-500'><span className="text-2xl border-2 border-green-400 rounded-full p-1 text-green-400"><GrDocumentUpdate /></span><NavLink to={`/admin/updateservice/${recent._id}`}>Update Event</NavLink></button>
            <button onClick={() => handleDelete(recent._id)} className='bg-red-600 text-red-400 text-md font-semibold hover:bg-blue-200 px-2 py-1 rounded-sm flex gap-2 items-center duration-500'><span className="text-2xl border-2 border-red-400 rounded-full p-1 text-red-400"><RiDeleteBin5Line /></span>Delete Event</button>
          </div>
         </div>
          
        </div>
      ))}
    </div>
  );
};

export default DashBoardRecentEvent;

