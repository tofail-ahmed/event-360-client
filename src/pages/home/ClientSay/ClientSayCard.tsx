import React from 'react'
import { NavLink } from "react-router-dom";
const ClientSayCard = ({ image, name, designation, review }) => {
  return (
    <div className="hover:bg-blue-500 bg-slate-600 text-white rounded-md">
      <div className="p-2 flex flex-col gap-20">
        <div className="flex items-center gap-8">
          <img
            className="w-[50px] h-[100px] rounded-[50%]"
            src={image}
            alt=""
          />
          <div>
            <h1 className="text-xl font-bold">{name}</h1>
            <h1 className="text-md font-semibold">{designation}</h1>
          </div>
        </div>
        <div>
          <p>{review.slice(0, 150)}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientSayCard