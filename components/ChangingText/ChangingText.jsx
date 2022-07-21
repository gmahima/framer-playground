import { ChangingTextLayout } from "./ChangingText.styles";
import { useState, useEffect, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useAnimationControls,
} from "framer-motion";
import { lorem } from "../../data";
import { useMemo } from "react";
import { useTheme } from "styled-components";
import { useFreshRef } from "rooks";
const textVariants = {
  initial: { y: 10 },
  animate: { y: 0 },
  exit: { y: 10 },
  transition: { duration: 0.2 },
};
const arr = [
  { text: "hi", variant: "primary" },
  { text: "lorem", variant: "secondary" },
  { text: "dolor", variant: "highlight" },
];

export const ChangingText = () => {
  const ref = useRef(null);
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexRef = useFreshRef(currentIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndexRef.current + 1) % arr.length);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);
  const selectedItem = arr[currentIndex];

  const variants = useMemo(() => {
    return {
      primary: {
        backgroundColor: theme.colors.primary,
        
      },
      secondary: {
        backgroundColor: theme.colors.secondary,
        
      },
      highlight: {
        backgroundColor: theme.colors.highlight,
        
      },
    };
  }, [theme]);

  const selectedVariant = selectedItem.variant;
  console.log(variants[selectedVariant].backgroundColor);

  return (
    <div>
      <AnimatePresence exitBeforeEnter>
      <ChangingTextLayout.Container
        ref={ref}
        variants={variants}
        animate={selectedVariant}
        key={selectedItem.text}
      >
        <motion.div
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"

          >
            {selectedItem.text}
          </motion.div>
        <motion.div>{lorem.short}</motion.div>
      </ChangingTextLayout.Container>
      </AnimatePresence>
    </div>
  );
};
