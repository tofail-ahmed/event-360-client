import React from 'react';
import Container from '../../../component/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Carousel.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import ClientSayCard from './ClientSayCard';
import { useQuery } from "@tanstack/react-query";

const Carousel = () => {
  
 
  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/reviews");
    const data = await response.json();
    return data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: fetchData,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container>
      <div className="max-w-full mx-auto   rounded-md carouselBg">
        <h1 className="text-6xl font-[800] text-center py-6">
          What our client say about us
        </h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <div className=" border-2 border-red-500">
            {data.map((item) => (
              <SwiperSlide key={item._id}>
                <ClientSayCard
                  image={item.image}
                  name={item.name}
                  designation={item.designation}
                  review={item.review}
                ></ClientSayCard>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </Container>
  );
};

export default Carousel;
