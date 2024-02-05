import React, { useState } from "react";
import Container from "../../../component/Container";
import "./Service.css";
import ServiceCard from "./ServiceCard";
import ServiceCardHover from "./ServiceCardHover";
import { useQuery } from "@tanstack/react-query";

const Service = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const handleHover1 = () => {
    setIsHovered1(true);
  };

  const handleLeave1 = () => {
    setIsHovered1(false);
  };

  const handleHover2 = () => {
    setIsHovered2(true);
  };

  const handleLeave2 = () => {
    setIsHovered2(false);
  };

  const handleHover3 = () => {
    setIsHovered3(true);
  };

  const handleLeave3 = () => {
    setIsHovered3(false);
  };

  const fetchData = async () => {
    const response = await fetch('http://localhost:5000/services');
    const data = await response.json();
    console.log(data[0])
    return data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ['services'],
    queryFn: fetchData,
  });



  return (
    <div className="serviceBg">
      <Container className="">
        <div className="text-center mx-auto max-w-[700px]">
          <h1 className="serviceHead mt-14 mb-3">Our Services</h1>
          <p className="serviceDescrp mb-14">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            consectetur, obcaecati possimus natus asperiores porro vitae numquam
            doloremque libero aliquam cumque nulla delectus consequuntur ut
            harum, nostrum facilis qui perspiciatis.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-2">
          <div
            className=" duration-500 mx-auto" 
            onMouseEnter={handleHover1}
            onMouseLeave={handleLeave1}
            onClick={handleHover1} // For touch devices
          >
            {isHovered1 ? (
              <ServiceCardHover data={data && data[0]}></ServiceCardHover>
            ) : (
              <ServiceCard data={data && data[0]}></ServiceCard>
            )}
          </div>
          <div
            className="transition duration-500 mx-auto"
            onMouseEnter={handleHover2}
            onMouseLeave={handleLeave2}
            onClick={handleHover2} // For touch devices
          >
            {isHovered2 ? (
              <ServiceCardHover data={data &&  data[1] }></ServiceCardHover>
            ) : (
              <ServiceCard data={data &&  data[1] }></ServiceCard>
            )}
          </div>
          <div
            className="transition duration-500 mx-auto"
            onMouseEnter={handleHover3}
            onMouseLeave={handleLeave3}
            onClick={handleHover3} // For touch devices
          >
            {isHovered3 ? (
              <ServiceCardHover data={data &&  data[2] }></ServiceCardHover>
            ) : (
              <ServiceCard data={data &&  data[2] }></ServiceCard>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Service;
