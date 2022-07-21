import { ChangingTextLayout } from "./ChangingText.styles";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useInView, useAnimationControls } from "framer-motion";
import { lorem } from "../../data";
import { useMemo } from "react";
import { useTheme } from "styled-components";
import { useFreshRef } from "rooks";

const arr = [
  { text: "hi", variant: "primary" },
  { text: "lorem", variant: "secondary" },
  { text: "dolor", variant: "highlight" },
];

const textVariants = {
  initial: { y: 10 },
  animate: { y: 0 },
  exit: { y: 10 },
  transition: { duration: 0.2 },
};
export const ChangingText = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexRef = useFreshRef(currentIndex);
  const controls = useAnimationControls()
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndexRef.current + 1) % arr.length);
    }, 3000);
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
      <div>{lorem.long}</div>

      <AnimatePresence exitBeforeEnter>
        <ChangingTextLayout.Container
          ref={ref}
          key={selectedItem ? selectedItem.text : "x"}
          variants={variants}
          transition={{
            duration: 2
          }}
        >
          <motion.div
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            layout
          >
            {selectedItem.text}
          </motion.div>
          <motion.div>{lorem.short}</motion.div>
        </ChangingTextLayout.Container>
      </AnimatePresence>
    </div>
  );
};
