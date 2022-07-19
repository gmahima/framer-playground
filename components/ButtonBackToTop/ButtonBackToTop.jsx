import { AnimatePresence, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { useWindowScrollPosition } from "../../hooks";
import { ButtonBackToTopLayout } from "./ButtonBackToTop.styles";
import {animationVariants} from './buttonBackToTopAnimationVariants.js'
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const ButtonBackToTop = () => {
  const {scrollY}= useScroll({
   axis: 'y',
  })
  const shouldShowButton = useTransform(scrollY, value => value > 200);
  const [shouldShowButtonValue, setShouldShowButtonValue] = useState(shouldShowButton.get())
  shouldShowButton.onChange((value) => {
    setShouldShowButtonValue(value);
  })
  
  return (
    <AnimatePresence>
      {shouldShowButtonValue && (
        <ButtonBackToTopLayout.Container
          variants={animationVariants}
          onClick={scrollToTop}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          back to top
        </ButtonBackToTopLayout.Container>
      )}
    </AnimatePresence>
  );
};
