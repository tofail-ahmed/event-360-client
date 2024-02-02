import React from 'react'
import { NavLink } from "react-router-dom";
const ClientSayCard = ({ img }) => {
  return (
    <div className="hover:bg-blue-500/10">
      <img
        className="w-[400px] h-[200px] hover:bg-red-600/50"
        src={img}
        alt=""
      />
      <div className='flex justify-center'>
        <NavLink
          to={"/admin/dashboard"}
          className="bg-blue-600 hover:bg-blue-800 text-white px-8 py-2 rounded-md mx-auto"
        >
          Click
        </NavLink>
      </div>
    </div>
  );
};

export default ClientSayCard