import { motion, useMotionValue } from "framer-motion"

import { useSwiperSlide } from 'swiper/react';
export const Slide = ({slideContent}) => {
    let isShowing = false
    const swiperSlide = useSwiperSlide();
    if(swiperSlide.isActive) {
        isShowing = true
    } else {
        isShowing = false
    }

    console.log(swiperSlide, swiperSlide.isShowing, slideContent)
    return (
        <motion.div style={{ backgroundColor: "red", height:500, margin:4}}>
            {isShowing && <motion.div
              key={"s1"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.4 }}
            //   style={{opacity}}
            >
              <motion.div className="title">
                {slideContent}
              </motion.div>
            </motion.div>}
          </motion.div>
    )
}