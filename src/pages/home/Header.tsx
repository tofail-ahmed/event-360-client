import React from "react";
import Container from "../../component/Container";
import { NavLink } from "react-router-dom";
import './Header.css'
import seminar from "../../assets/seminar.png"
const Header = () => {
  return (
    <Container>
     <div>
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
      <div className="flex lg:flex-row flex-col justify-between items-center">
        <div>
          <h1 className="brand_new_packages mb-[8px]">Brand New <br />event Packages</h1>
          <h1 className="winter">For Winter</h1>
          <h3 className="lg:max-w-[70ch] mt-[32px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi provident sequi iusto rem, et est impedit tenetur perspiciatis fugiat repellendus necessitatibus laudantium quos harum doloribus sit quia nostrum! Incidunt qui quis porro natus unde, tenetur atque excepturi consectetur. Cumque perferendis beatae assumenda sunt, in nemo facilis laborum consequuntur aut pariatur.</h3>
        </div>
        <img className="rounded-[800px] mx-auto p-[50px] border-[1px] border-black" src={seminar} alt="" />
      </div>
     </div>
    </Container>
  );
};

export default Header;
