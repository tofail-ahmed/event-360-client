import Container from "../../../component/Container";
import "./RecentEvent.css";
import recent_1 from "../../../assets/recent_event/recent_1.png";
import recent_2 from "../../../assets/recent_event/recent_2.png";
import recent_3 from "../../../assets/recent_event/recent_3.png";
import recent_4 from "../../../assets/recent_event/recent_4.png";
import recent_5 from "../../../assets/recent_event/recent_5.png";
import recent_6 from "../../../assets/recent_event/recent_6.png";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

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

  return (
    <Container className="py-16">
      <div className="flex justify-center items-center lg:flex-row flex-col">
        <div className="mx-auto grid lg:grid-cols-3 grid-cols-2 gap-5">
          <div data-aos="fade-up" data-aos-duration="1000" className="hover:scale-125">
            {" "}
            <motion.img
              drag
              dragSnapToOrigin={true}
              style={{ width: 190, height: 190, borderRadius: 26.34 }}
              src={recent_1}
            />
          </div>{" "}
          <div data-aos="fade-up" data-aos-duration="1000" className="hover:scale-125">
          <motion.img
            drag
            dragSnapToOrigin={true}
            style={{ width: 190, height: 190, borderRadius: 26.21 }}
            src={recent_3}
          />
       </div >
       <div data-aos="fade-up" data-aos-duration="1000" className="hover:scale-125">
          <motion.img
            drag
            dragSnapToOrigin={true}
            style={{ width: 190, height: 190, borderRadius: 114 }}
            src={recent_2}
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
            src={recent_5}
          />
         </div>
          <div data-aos="fade-up" data-aos-duration="1000" className="hover:scale-125">
          <motion.img
            drag
            dragSnapToOrigin={true}
            style={{ width: 190, height: 190, borderRadius: 26.07 }}
            src={recent_4}
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
            src={recent_6}
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
  );
};

export default RecentEvent;
