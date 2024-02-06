import Container from "../../../component/Container";
import "./RecentEvent.css";
import recent_1 from "../../../assets/recent_event/recent_1.png";

import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useQuery } from "@tanstack/react-query";

const RecentEvent = () => {
  AOS.init();
  // const main = {
  //   initial: {
  //     y: -300,
  //     opacity: 0,
  //     scale: 0
  //   },
  //   animate: {
  //     y: 0,
  //     opacity: 1,
  //     scale: 1,
  //     transition: {
  //       duration: 0.5,
  //       staggerChildren: 0.5,
  //       delayChildren: 0.5,
  //     }
  //   }
  // };

  // const imgVariants = {
  //   initial: { opacity: 0, y: -50 },
  //   animate: { opacity: 1, y: 0 }
  // };
  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/recents");
    const data = await response.json();
    return data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["recents"],
    queryFn: fetchData,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="mx-auto">
      <Container className="py-16">
      <div className="flex justify-center items-center lg:flex-row flex-col-reverse">
        <div className="mx-auto  grid lg:grid-cols-3 grid-cols-2 gap-5 py-8">
          <div data-aos="fade-up" data-aos-duration="1000" className="hover:scale-125">
            {" "}
            <motion.img
              drag
              dragSnapToOrigin={true}
              style={{ width: 190, height: 190, borderRadius: 26.34 }}
              src={data[0].image}
            />
          </div>{" "}
          <div data-aos="fade-up" data-aos-duration="1000" className="hover:scale-125">
          <motion.img
            drag
            dragSnapToOrigin={true}
            style={{ width: 190, height: 190, borderRadius: 26.21 }}
            src={data[1].image}
          />
       </div >
       <div data-aos="fade-up" data-aos-duration="1000" className="hover:scale-125">
          <motion.img
            drag
            dragSnapToOrigin={true}
            style={{ width: 190, height: 190, borderRadius: 114 }}
            src={data[2].image}
          />
       </div>
         <div data-aos="fade-up" data-aos-duration="1000" className="hover:scale-125">
         <motion.img
            drag
            dragSnapToOrigin={true}
            style={{
              width: 190,
              height: 190,
              background: "linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)",
              borderRadius: 115,
            }}
            src={data[3].image}
          />
         </div>
          <div data-aos="fade-up" data-aos-duration="1000" className="hover:scale-125">
          <motion.img
            drag
            dragSnapToOrigin={true}
            style={{ width: 190, height: 190, borderRadius: 26.07 }}
            src={data[4].image}
          />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" className="hover:scale-125">
          <motion.img
            drag
            dragSnapToOrigin={true}
            style={{
              width: 190,
              height: 190,
              background: "linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)",
              borderRadius: 26.21,
            }}
            src={data[5].image}
          />
          </div>
        </div>

        <div className="max-w-[400px] lg:max-w-[520px]">
          <h1 className="recentHead ">Recent Events</h1>
          <p className="max-w-[500px] mt-6">
            Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
          </p>
          <button className="text-white bg-blue-600 hover:bg-blue-800 px-10 py-2 mt-9">
            Learn More
          </button>
        </div>
      </div>
    </Container>
    </div>
  );
};

export default RecentEvent;
