import React from "react";
import Container from "../../component/Container";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      <div className="flex justify-between items-center py-[24px]">
        <h1 className="font-[700] text-[32px]">
          <span>Event</span> <span className="text-[#3461FF]">360</span>
        </h1>
        <nav className="flex gap-[16px]">
          <button className="font-[500] text-[16px] px-[8px] py-[12px]">
            {" "}
            <NavLink to={"/"}>Home</NavLink>
          </button>
          <button className="font-[500] text-[16px] px-[8px] py-[12px]">
            {" "}
            <NavLink to={"/admin/dashboard"}>Dashboard</NavLink>
          </button>
          <button className="font-[500] text-[16px] px-[8px] py-[12px]">
            <NavLink to={"/about"}>About</NavLink>
          </button>
          <button className="font-[500] text-[16px] px-[8px] py-[12px]">
            <NavLink to={"/contact"}>Contat</NavLink>
          </button>
        </nav>
      </div>
    </Container>
  );
};

export default Navbar;
