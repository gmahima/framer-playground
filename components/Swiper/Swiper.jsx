import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { AnimatePresence } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";
import { motion, useMotionValue } from "framer-motion";


export const ParallaxSwiper = () => {
    let opacity = useMotionValue(0)
  return (
    <AnimatePresence exitBeforeEnter>
      <Swiper
        loop={true}
        style={{
          "--swiper-navigation-color": "#a26565",
          "--swiper-pagination-color": "#0c0101",
        }}
        speed={600}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <motion.div style={{ backgroundColor: "red", height: "100vh" }}>
            <motion.div
              key={"s1"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
            >
              <motion.div className="title" data-swiper-parallax="-300">
                Slide 3
              </motion.div>
              <motion.div className="subtitle" data-swiper-parallax="-200">
                Subtitle
              </motion.div>
              <motion.div className="text" data-swiper-parallax="-100">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                  nec. Nulla laoreet justo vitae porttitor porttitor.
                  Suspendisse in sem justo. Integer laoreet magna nec elit
                  suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at
                  elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula
                  nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean
                  feugiat non eros quis feugiat.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </SwiperSlide>

        <SwiperSlide>
          <motion.div
            className="h-screen"
            style={{ backgroundColor: "blue" }}
            key={"s2"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div>
              <motion.div className="title" data-swiper-parallax="-300">
                Slide 3
              </motion.div>
              <motion.div className="subtitle" data-swiper-parallax="-200">
                Subtitle
              </motion.div>
              <motion.div className="text" data-swiper-parallax="-100">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                  nec. Nulla laoreet justo vitae porttitor porttitor.
                  Suspendisse in sem justo. Integer laoreet magna nec elit
                  suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at
                  elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula
                  nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean
                  feugiat non eros quis feugiat.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </SwiperSlide>
      </Swiper>
    </AnimatePresence>
  );
};
