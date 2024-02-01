import React from "react";
import { FaBorderAll } from "react-icons/fa";
const PricingCard = () => {
  return (
    <div className=" bg-white p-5 rounded-md border-t-2 border-[#df4e9d]">
      <div className="flex justify-between items-center text-4xl font-bold p-5 text-[#df4e9d]">
        <div ><FaBorderAll /></div>
        <p>$21</p>
      </div>
    </div>
  );
};

export default PricingCard;
