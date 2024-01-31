import React from "react";
import Container from "../../component/Container";
import { NavLink } from "react-router-dom";
import './Header.css'
import seminar from "../../assets/seminar.png"
import indigo from '../../assets/icon_indigo.png'
import amber from '../../assets/icon_amber.png'
import blue from '../../assets/Icons_blue.png'
import star from '../../assets/Star.png'
import softstar2 from '../../assets/Soft_Star_2.png'
import { motion } from "framer-motion";
const Header = () => {
  const header1={
    initial:{
      x:-200,
      opacity:0,
    },
    animate:{
      x:0,
      opacity:1,
      transition:{
        duration:0.5,
        delay:1
      }
    }
  }
  const header2={
    initial:{
      x:-200,
      opacity:0,
    },
    animate:{
      x:0,
      opacity:1,
      transition:{
        duration:0.5,
        delay:1.5
      }
    }
  }
  const header3={
    initial:{
      x:-200,
      opacity:0,
    },
    animate:{
      x:0,
      opacity:1,
      transition:{
        duration:0.5,
        delay:2
      }
    }
  }
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
        <div className="flex lg:flex-row flex-col justify-between items-center ">
          <div className="flex flex-col text-center lg:text-start">
            <h1 className="brand_new_packages mb-[8px]">
              Brand New <br />
              event Packages
            </h1>
            <h1 className="winter">For Winter</h1>
            <h3 className="lg:max-w-[70ch] w-full my-[32px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              provident sequi iusto rem, et est impedit tenetur perspiciatis
              fugiat repellendus necessitatibus laudantium quos harum doloribus
              sit quia nostrum! Incidunt qui quis porro natus unde, tenetur
              atque excepturi consectetur. Cumque perferendis beatae assumenda
              sunt, in nemo facilis laborum consequuntur aut pariatur.
            </h3>
            <div>
              <div className="w-[195px] h-[52px] px-10 py-6 bg-blue-600 justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-base font-bold font-['Plus Jakarta Sans']">
                  Explore
                </div>
              </div>
            </div>
          </div>
          <div className=" relative">
            <div className="absolute top-14 left-8">
              <img src={star} alt="" />
            </div>
           <div>
           <img
              className="rounded-[800px] mx-auto p-[50px] border-[1px] border-black mt-[20px]"
              src={seminar}
              alt=""
            />
           </div>
           <div className="absolute bottom-5 right-1">
              <img src={softstar2} alt="" />
            </div>
          </div>
        </div>
        <div className="pb-[100px]">
          <div className="max-w-[720px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:-mt-[60px] mt-[50px]  ">
            <motion.div variants={header1} initial="initial" animate="animate" className="lg:max-w-[220px] w-[300px] mx-auto ">
              <div className="px-4 py-6 bg-gradient-to-br from-white to-white rounded-[32px] border-2 border-white backdrop-blur-sm">
                <div className="flex-col justify-start lg:items-start items-center gap-8 flex">
                  <div className="justify-start items-center inline-flex">
                    <div className="w-12 h-12 relative">
                      <div className="w-12 h-12 left-0 top-0 absolute bg-indigo-500 bg-opacity-30 rounded-full" />
                      <div className="w-6 h-6 left-[12px] top-[12px] absolute"><img src={indigo} alt="" /></div>
                    </div>
                  </div>
                  <div className="w-48 text-zinc-800 text-base font-light font-['Lato'] leading-snug">
                    Lorem ipsum dolor sit amet, consectetu adipiscing elit.
                    Cursus imperdiet sed id.
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={header2} initial="initial" animate="animate" className="lg:max-w-[220px] w-[300px] mx-auto ">
              <div className="px-4 py-6 bg-gradient-to-br from-white to-white rounded-[32px] border-2 border-white backdrop-blur-sm">
                <div className="flex-col justify-start lg:items-start items-center gap-8 flex">
                  <div className="justify-start items-center inline-flex">
                    <div className="w-12 h-12 relative">
                      <div className="w-12 h-12 left-0 top-0 absolute bg-amber-300 bg-opacity-30 rounded-full" />
                      <div className="w-6 h-6 left-[12px] top-[12px] absolute"><img src={amber} alt="" /></div>
                      
                    </div>
                  </div>
                  <div className="w-48 text-zinc-800 text-base font-light font-['Lato'] leading-snug">
                    Lorem ipsum dolor sit amet, consectetu adipiscing elit.
                    Cursus imperdiet sed id.
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={header3} initial="initial" animate="animate" className="lg:max-w-[220px] w-[300px] mx-auto ">
              <div className="px-4 py-6 bg-gradient-to-br from-white to-white rounded-[32px] border-2 border-white backdrop-blur-sm">
                <div className="flex-col justify-start lg:items-start items-center gap-8 flex">
                  <div className="justify-start items-center inline-flex">
                    <div className="w-12 h-12 relative">
                      <div className="w-12 h-12 left-0 top-0 absolute bg-blue-300 bg-opacity-30 rounded-full" />
                      <div className="w-6 h-6 left-[12px] top-[12px] absolute"><img src={blue} alt="" /></div>
                    </div>
                  </div>
                  <div className="w-48 text-zinc-800 text-base font-light font-['Lato'] leading-snug">
                    Lorem ipsum dolor sit amet, consectetu adipiscing elit.
                    Cursus imperdiet sed id.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
