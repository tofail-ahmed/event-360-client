import React from "react";
import FooterDown from "./FooterDown";
import Container from "../../../component/Container";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
   <div className="bg-black text-white py-6">
       <Container>
      <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2">
        <div className="mx-auto">
          <h1 className="font-[700] text-[32px] ">
            <span>Event</span> <span className="text-[#3461FF]">360</span>
          </h1>
        </div>
        <div className="mx-auto">
            <h1 className="my-4">Product</h1>
            <h1 className="my-4">Pricing</h1>
            <h1 className="my-4">Overview</h1>
            <h1 className="my-4">Browse</h1>
            <h1 className="my-4">Accessibility</h1>
        </div>
        <div className="mx-auto">
            <h1 className="my-4">Solutions</h1>
            <h1 className="my-4">Brainstorming</h1>
            <h1 className="my-4">Ideation</h1>
            <h1 className="my-4">wireframing</h1>
            <h1 className="my-4">Research</h1>
        </div>
        <div className="mx-auto">
            <h1 className="my-4">Resources</h1>
            <h1 className="my-4">Help Center</h1>
            <h1 className="my-4">Blog</h1>
            <h1 className="my-4">Tutorials</h1>
            <h1 className="my-4">FAQs</h1>
        </div>
        <div className="mx-auto">
            <h1 className="my-4">Support</h1>
            <h1 className="my-4">Contact us</h1>
            <h1 className="my-4">Developers</h1>
            <h1 className="my-4">Documentations</h1>
            <h1 className="my-4">Integrations</h1>
        </div>
        <div className="mx-auto">
            <h1 className="my-4">Company</h1>
            <h1 className="my-4">About</h1>
            <h1 className="my-4">Press</h1>
            <h1 className="my-4">Events</h1>
            <h1 className="my-4 flex items-center gap-3">Request Demo <FaArrowRight /></h1>
        </div>
      </div>
     <div className="">
     <hr className="my-12 text-red-400" />
     </div>
      <FooterDown></FooterDown>
    </Container>
   </div>
  );
};

export default Footer;
