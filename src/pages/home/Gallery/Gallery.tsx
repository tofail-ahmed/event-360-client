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
const Gallery = () => {
  AOS.init();
  return (
    <div className="overflow-hidden">
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
            data-aos-delay="50"
            data-aos-duration="2000"
           
            style={{
              width: 128,
              height: 192,
              boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.07)",
              borderRadius: 5,
            }}
            src={gallery_1}
          />
          </div>
          <div className="hover:scale-125 duration-300">
          <img
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="2000"
            
            style={{
              width: 172,
              height: 258,
              boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.07)",
              borderRadius: 5,
            }}
            src={gallery_2}
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
            <div   className="hover:scale-125 duration-300">
          <img
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="2000"
          
            style={{
              width: 128,
              height: 212,
              boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.07)",
              borderRadius: 5,
            }}
            src={gallery_3}
          />
          </div>
          <div     className="hover:scale-125 duration-300">
          <img
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="2000"
        
            style={{
              width: 128,
              height: 215,
              boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.07)",
              borderRadius: 5,
            }}
            src={gallery_4}
          />
          </div>
          <div className="hover:scale-125 duration-300">
          <img
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="2000"
            
            style={{
              width: 128,
              height: 160,
              boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.07)",
              borderRadius: 5,
            }}
            src={gallery_5}
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
              data-aos-delay="50"
              data-aos-duration="2000"
              style={{
                width: 128,
                height: 171,
                boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.07)",
                borderRadius: 5,
              }}
              src={gallery_6}
            />
          </div>
          <div className="hover:scale-125 duration-300">
            <img
              data-aos="fade-down"
              data-aos-delay="50"
              data-aos-duration="2000"
              style={{
                width: 128,
                height: 172,
                boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.07)",
                borderRadius: 5,
              }}
              src={gallery_7}
            />
          </div>
          <div className="hover:scale-125 duration-300">
            <img
              data-aos="fade-down"
              data-aos-delay="50"
              data-aos-duration="2000"
              style={{
                width: 128,
                height: 192,
                boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.07)",
                borderRadius: 5,
              }}
              src={gallery_8}
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
              data-aos-delay="50"
              data-aos-duration="2000"
              style={{
                width: 160,
                height: 255,
                boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.07)",
                borderRadius: 5,
              }}
              src={gallery_9}
            />
          </div>
          <div className="hover:scale-125 duration-300">
            <img
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="2000"
              style={{
                width: 128,
                height: 165,
                boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.07)",
                borderRadius: 5,
              }}
              src={gallery_10}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
