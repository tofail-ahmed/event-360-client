import Container from "../../../component/Container";
import "./Service.css";
import ServiceCard from "./ServiceCard";
import ServiceCardHover from "./ServiceCardHover";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../component/Loader";
import { useState } from "react";
interface IDatum {
  service: string;
  description: string;
  features: string;
  image: string;
}
const Service = () => {
  // const [isHovered1, setIsHovered1] = useState(false);
  // const [isHovered2, setIsHovered2] = useState(false);
  // const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered, setIsHovered] = useState<boolean[]>([]);
  // const handleHover = (idx) => {
  //   setIsHovered((prevHovered) => {
  //     const temp = [...prevHovered];
  //     temp[idx] = true;
  //     return temp;
  //   });
  // };

  // const handleLeave = (idx) => {
  //   setIsHovered((prevHovered) => {
  //     const temp = [...prevHovered];
  //     temp[idx] = false;
  //     return temp;
  //   });
  // };

  const handleHover = (idx:number, mouse:number) => {
    if (mouse === 1) {
      setIsHovered((prevHovered) => {
        const temp = [...prevHovered];
        temp[idx] = true;
        return temp;
      });
    } else {
      setIsHovered((prevHovered) => {
        const temp = [...prevHovered];
        temp[idx] = false;
        return temp;
      });
    }
  };
  const fetchData = async () => {
    const response = await fetch("https://event360-gold.vercel.app/services");
    const data = await response.json();
    const firstThree = data?.slice(0, 3);

    return firstThree;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: fetchData,
  });
  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="serviceBg">
      <Container className="">
        <div className="text-center mx-auto max-w-[700px]">
          <h1 className="serviceHead mt-14 mb-3">Our Services</h1>
          <p className="serviceDescrp mb-14">
            Join Our Mission: Together, Let's Serve and Inspire Change! Our
            service project is dedicated to uplifting communities through
            compassion and action. Whether it's volunteering, donating, or
            spreading awareness, every contribution matters. Together, we can
            create a world where everyone thrives. Join us today!
          </p>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-2">
          {data?.map((datum: IDatum, idx: number) => (
            <div
              key={idx}
              className=" duration-500 mx-auto"
              onMouseEnter={() => handleHover(idx, 1)}
              onMouseLeave={() => handleHover(idx, 0)}

              // onClick={handleHover1} // For touch devices
            >
              {isHovered[idx] ? (
                <ServiceCardHover data={datum}></ServiceCardHover>
              ) : (
                <ServiceCard data={datum}></ServiceCard>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Service;
