import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { GrDocumentUpdate } from 'react-icons/gr';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

const DashBoardEvents = () => {
const fetchData=async()=>{
  const res=await fetch(`http://localhost:5000/eventItems`);
  const data=await res.json();
  return data;
}
const {data,error, isLoading}=useQuery({
  queryKey:["eventItems"],
  queryFn:fetchData
})
if (isLoading) {
  return <div>Loading...</div>;
}

if (error) {
  return <div>Error: {error.message}</div>;
}
  return (
    <div className=''>
      <h1 className='text-4xl text-center font-extrabold'>Our Event Items</h1>
      {/* <ToastContainer /> */}

      {data.map((event) => (
        <div className='bg-green-400/20 p-2  flex mx-[20px] lg:flex-row flex-col-reverse gap-8 my-4' key={event._id}>
          
          <div>
            <img className='w-[250px] h-[250px] mx-auto rounded-lg' src={event.image} alt="" />
          </div>
         <div>
         <h2 className='text-3xl font-semibold my-2'>{event.eventItem}</h2>
          <p className='text-md font-semibold my-1'>{event.description}</p>
          <ul>
            {event.features.split(',').map((feature, index) => (
              <li key={index}>{index + 1}. {feature.trim()}</li>
            ))}
          </ul>
          <div className='flex gap-2 my-2'>
            <button  className='  bg-green-600 text-green-400 text-md font-semibold hover:bg-blue-200 hover:text-green-600 px-2 py-1 rounded-sm flex gap-2 items-center duration-500'><span className="text-2xl border-2 border-green-400 rounded-full p-1 text-green-400"><GrDocumentUpdate /></span><NavLink to={`/admin/updateservice/${event._id}`}>Update Service</NavLink></button>
            <button onClick={() => handleDelete(event._id)} className='bg-red-600 text-red-400 text-md font-semibold hover:bg-blue-200 px-2 py-1 rounded-sm flex gap-2 items-center duration-500'><span className="text-2xl border-2 border-red-400 rounded-full p-1 text-red-400"><RiDeleteBin5Line /></span>Delete Service</button>
          </div>
         </div>
          
        </div>
      ))}
    </div>
  )
}

export default DashBoardEvents