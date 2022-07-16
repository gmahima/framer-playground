import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Slide} from './Slide'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';

export const ParallaxSwiper = () => {
  // Create array with 1000 slides
  const slides = Array.from({ length: 10 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  return (
    <Swiper spaceBetween={50} >
      {slides.map((slideContent, index) => (
        <SwiperSlide key={slideContent} virtualIndex={index}>
          <Slide slideContent={slideContent}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};