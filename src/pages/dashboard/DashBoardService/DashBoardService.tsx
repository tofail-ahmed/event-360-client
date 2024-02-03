import { useQuery } from '@tanstack/react-query';
import React from 'react';

const DashBoardService = () => {
  const fetchData = async () => {
    const response = await fetch('http://localhost:5000/services');
    const data = await response.json();
    return data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ['services'],
    queryFn: fetchData,
  });
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

 
  return (
    <div>
      <h1>Services</h1>
      {data.map((service) => (
        <div className='bg-green-400/20 p-2 m-2' key={service._id}>
          <h2><span className='underline'>Name</span>:{service.service}</h2>
          <p>Description:{service.description}</p>
          <div>
            <img className='w-[200px] h-[200px] rounded-full' src={service.image} alt="" />
          </div>
          <ul>
          {service.features.split(',').map((feature, index) => (
              <li key={index}>{index+1}. {feature.trim()}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DashBoardService;
