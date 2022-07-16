import { motion, useMotionValue } from "framer-motion"

import { useSwiperSlide } from 'swiper/react';
export const Slide = () => {
    let isShowing = false
    const swiperSlide = useSwiperSlide();
    if(swiperSlide.isActive) {
        isShowing = true
    } else {
        isShowing = false
    }

    console.log(swiperSlide, swiperSlide.isShowing)
    return (
        <motion.div style={{ backgroundColor: "red", height: "100vh" }}>
            {isShowing && <motion.div
              key={"s1"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
            //   style={{opacity}}
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
            </motion.div>}
          </motion.div>
    )
}