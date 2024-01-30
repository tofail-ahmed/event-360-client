import React from "react";
import check from "../../../assets/fi_check.png";
import "./ServiceCard.css";
const ServiceCardHover = () => {
  return (
    <div className="relative w-[410px] h-[560px] bg-slate-500/10 p-7 rounded-md">
      {" "}
      <h1 className="serviceCardHead">Corporate Event</h1>
      <p className="hoverDescrp mt-3 mb-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum deleniti
        veritatis corporis soluta atque, dolores porro, tenetur neque delectus
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae optio temporibus ex obcaecati incidunt,
      </p>
      <div className="flex items-center gap-2 mb-3">
        <img className="bg-white rounded-[50%] p-1" src={check} alt="" />

        <p className="feature ">One day pas access all lecture</p>
      </div>
      <div className="flex items-center gap-2 mb-3">
        <img className="bg-white rounded-[50%] p-1" src={check} alt="" />

        <p className="feature ">Lunch and Snack</p>
      </div>
      <div className="flex items-center gap-2 mb-3">
        <img className="bg-white rounded-[50%] p-1" src={check} alt="" />

        <p className="feature ">Meet Event Speaker</p>
      </div>
      <div className="flex items-center gap-2 mb-3">
        <img className="bg-white rounded-[50%] p-1" src={check} alt="" />

        <p className="feature ">Front Seat</p>
      </div>
      <div className="flex items-center gap-2 mb-3">
        <img className="bg-white rounded-[50%] p-1" src={check} alt="" />

        <p className="feature ">One day pas access all lecture</p>
      </div>
      <button className=" w-[360px] py-2 bg-blue-500 text-white hover:bg-blue-600   absolute bottom-8">
       Check It Out
      </button>
    </div>
  );
};

export default ServiceCardHover;
