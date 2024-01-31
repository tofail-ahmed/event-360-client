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
  const parent = {
    initial: {
      opacity: 0,
      y: -400,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.5,
        delayChildren: 1,
      },
    },
  };
  const header={
    initial:{
      x:-200,
      opacity:0,
    },
    animate:{
      x:0,
      opacity:1,
      transition:{
        duration:0.5,
        staggerChildren: 1,
        delayChildren: 2,
      }
    }
  }
 
  return (
    <Container>
      <div>
       <div className="">
       <div className="flex justify-between items-center py-[24px] ">
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
       </div>
        <div className="flex lg:flex-row flex-col justify-between items-center ">
          <motion.div variants={parent} initial="initial" animate="animate" className="flex flex-col text-center lg:text-start">
            <motion.h1 variants={parent} className="brand_new_packages mb-[8px]">
              Brand New <br />
              event Packages
            </motion.h1>
            <motion.h1 variants={parent} className="winter">For Winter</motion.h1>
            <motion.h3 variants={parent} className="lg:max-w-[70ch] w-full my-[32px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              provident sequi iusto rem, et est impedit tenetur perspiciatis
              fugiat repellendus necessitatibus laudantium quos harum doloribus
              sit quia nostrum! Incidunt qui quis porro natus unde, tenetur
              atque excepturi consectetur. Cumque perferendis beatae assumenda
              sunt, in nemo facilis laborum consequuntur aut pariatur.
            </motion.h3>
            <motion.div variants={parent}>
              <div className="w-[195px] h-[52px] px-10 py-6 bg-blue-600 justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-base font-bold font-['Plus Jakarta Sans']">
                  Explore
                </div>
              </div>
            </motion.div>
          </motion.div>
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
          <motion.div variants={header} initial="initial" animate="animate"  className="max-w-[720px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:-mt-[60px] mt-[50px]  ">
            <motion.div variants={header} className="lg:max-w-[220px] w-[300px] mx-auto ">
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

            <motion.div variants={header}  className="lg:max-w-[220px] w-[300px] mx-auto ">
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

            <motion.div variants={header}  className="lg:max-w-[220px] w-[300px] mx-auto ">
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
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
