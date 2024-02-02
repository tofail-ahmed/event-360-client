import React from 'react';
import Container from '../../../component/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Carousel.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import ClientSayCard from './ClientSayCard';

const Carousel = () => {
  const array = [
    '/src/assets/gallery/Picture_1.png',
    '/src/assets/gallery/Picture_2.png',
    '/src/assets/gallery/Picture_3.png',
    '/src/assets/gallery/Picture_4.png',
    '/src/assets/gallery/Picture_5.png',
    '/src/assets/gallery/Picture_6.png',
    '/src/assets/gallery/Picture_7.png',
    '/src/assets/gallery/Picture_8.png',
    '/src/assets/gallery/Picture_9.png',
    '/src/assets/gallery/Picture_10.png',
  ];

  return (
    <Container>
      <div className='max-w-[1200px] mx-auto lg:p-2  roun carouselBg'>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
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
          <div >
          {array.map((item, idx) => (
            <SwiperSlide key={idx}>
              <ClientSayCard img={item}></ClientSayCard>
            </SwiperSlide>
          ))}
          </div>
        </Swiper>
      </div>
    </Container>
  );
};

export default Carousel;
