import AOS from "aos";
import "aos/dist/aos.css";

import Container from "../../../component/Container";
import "./Gallery.css";
import check from "../../../assets/fi_check.png";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../component/Loader";
const Gallery = () => {
  AOS.init();
  const fetchData = async () => {
    const response = await fetch("https://event360-gold.vercel.app/galleries");
    const data = await response.json();
    return data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["galleries"],
    queryFn: fetchData,
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <Container className="flex justify-between items-center lg:flex-row flex-col py-16">
      <div>
        <div className="lg:text-start text-center">
          <h1 className="galleryHead mb-9">Gallery</h1>
          <p className="galleryDescrp max-w-[400px] lg:max-w-[520px] mb-8">
            Explore Our Impact: Step into our gallery and witness the power of
            service. Through captivating images and stories, see how our project
            has touched lives and brought communities together. From
            heartwarming moments to inspiring achievements, experience the
            journey of change. Be inspired, be moved, and join us in making a
            difference
          </p>
          <div className="flex flex-col lg:justify-start justify-center">
            <div className="flex gap-4 mb-4">
              <img className="bg-white rounded-[100%] p-1" src={check} alt="" />
              <p className="galleryFeature">One day pas access all lecture</p>
            </div>
            <div className="flex gap-4 mb-4">
              <img className="bg-white rounded-[100%] p-1" src={check} alt="" />
              <p className="galleryFeature">One day pas access all lecture</p>
            </div>
            <div className="flex gap-4 mb-4">
              <img className="bg-white rounded-[100%] p-1" src={check} alt="" />
              <p className="galleryFeature">One day pas access all lecture</p>
            </div>
            <div className="flex gap-4 mb-4">
              <img className="bg-white rounded-[100%] p-1" src={check} alt="" />
              <p className="galleryFeature">One day pas access all lecture</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto overflow-hidden">
        <div
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 16,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              paddingTop: 80,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-end",
              gap: 16,
              display: "inline-flex",
            }}
          >
            <div className="hover:scale-125 duration-300">
              <img
                data-aos="fade-right"
                style={{
                  width: 128,
                  height: 192,
                  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.07)",
                  borderRadius: 5,
                }}
                src={data[11].image}
              />
            </div>
            <div className="hover:scale-125 duration-300">
              <img
                data-aos="fade-right"
                style={{
                  width: 172,
                  height: 258,
                  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.07)",
                  borderRadius: 5,
                }}
                src={data[10].image}
              />
            </div>
          </div>

          <div
            style={{
              paddingTop: 32,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 16,
              display: "inline-flex",
            }}
          >
            <div className="hover:scale-125 duration-300">
              <img
                data-aos="fade-up"
                style={{
                  width: 128,
                  height: 212,
                  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.07)",
                  borderRadius: 5,
                }}
                src={data[9].image}
              />
            </div>
            <div className="hover:scale-125 duration-300">
              <img
                data-aos="fade-up"
                style={{
                  width: 128,
                  height: 215,
                  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.07)",
                  borderRadius: 5,
                }}
                src={data[8].image}
              />
            </div>
            <div className="hover:scale-125 duration-300">
              <img
                data-aos="fade-up"
                style={{
                  width: 128,
                  height: 160,
                  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.07)",
                  borderRadius: 5,
                }}
                src={data[7].image}
              />
            </div>
          </div>
          <div
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 16,
              display: "inline-flex",
            }}
          >
            <div className="hover:scale-125 duration-300">
              <img
                data-aos="fade-down"
                style={{
                  width: 128,
                  height: 171,
                  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.07)",
                  borderRadius: 5,
                }}
                src={data[6].image}
              />
            </div>
            <div className="hover:scale-125 duration-300">
              <img
                data-aos="fade-down"
                style={{
                  width: 128,
                  height: 172,
                  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.07)",
                  borderRadius: 5,
                }}
                src={data[5].image}
              />
            </div>
            <div className="hover:scale-125 duration-300">
              <img
                data-aos="fade-down"
                style={{
                  width: 128,
                  height: 192,
                  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.07)",
                  borderRadius: 5,
                }}
                src={data[4].image}
              />
            </div>
          </div>
          <div
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: 16,
              display: "inline-flex",
            }}
          >
            <div className="hover:scale-125 duration-300">
              <img
                data-aos="fade-left"
                style={{
                  width: 160,
                  height: 255,
                  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.07)",
                  borderRadius: 5,
                }}
                src={data[3].image}
              />
            </div>
            <div className="hover:scale-125 duration-300">
              <img
                data-aos="fade-left"
                style={{
                  width: 128,
                  height: 165,
                  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.07)",
                  borderRadius: 5,
                }}
                src={data[2].image}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Gallery;
