import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import gallery_1 from "../../../assets/gallery/picture_1.png";
import gallery_2 from "../../../assets/gallery/picture_2.png";
import gallery_3 from "../../../assets/gallery/picture_3.png";
import gallery_4 from "../../../assets/gallery/picture_4.png";
import gallery_5 from "../../../assets/gallery/picture_5.png";
import gallery_6 from "../../../assets/gallery/picture_6.png";
import gallery_7 from "../../../assets/gallery/picture_7.png";
import gallery_8 from "../../../assets/gallery/picture_8.png";
import gallery_9 from "../../../assets/gallery/picture_9.png";
import gallery_10 from "../../../assets/gallery/picture_10.png";
import Container from "../../../component/Container";
import "./Gallery.css";
import check from "../../../assets/fi_check.png";
import { useQuery } from "@tanstack/react-query";
const Gallery = () => {
  AOS.init();
  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/galleries");
    const data = await response.json();
    return data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["galleries"],
    queryFn: fetchData,
  });

  if (isLoading) {
    return <div>Loading...</div>;
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
            Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
            posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
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
            <div  className="hover:scale-125 duration-300">
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
            <div  className="hover:scale-125 duration-300">
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
            <div  className="hover:scale-125 duration-300">
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
            <div  className="hover:scale-125 duration-300">
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
