import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const images = import.meta.glob('/src/assets/images/*.{jpg,jpeg,webp,png,gif}', { eager: true });
const MovieSlider = () => {
    const imageList = Object.values(images).map((img) => img.default)
    
    return (
        <div className="swiper-container py-20">
          <Swiper
            spaceBetween={40} 
            slidesPerView={1} 
            grabCursor={false}
            modules={[Autoplay]}
            navigation 
            pagination={{ clickable: true }} 
            loop={true} 
            autoplay={{
              delay: 3000, 
              disableOnInteraction:false,
            }}
          >
            {imageList.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Slide ${index + 1}`} className="w-full max-w-screen h-screen scroll-mt-0.5 opacity-50 object-fill" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      );
}

export default MovieSlider
