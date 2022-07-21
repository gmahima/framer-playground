import { ChangingTextLayout } from "./ChangingText.styles";
import { useState, useEffect, useRef, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { lorem, arrWithColors } from "../../data";
import { useTheme } from "styled-components";
import { useFreshRef } from "rooks";
const textVariants = {
  initial: { y: 4, opacity: 1 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -4, opacity: 1 },
  transition: { y: { duration: 0.1 }, default: { ease: "linear" } },
};

export const ChangingText = () => {
  const ref = useRef(null);
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexRef = useFreshRef(currentIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndexRef.current + 1) % arrWithColors.length);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);
  const selectedItem = arrWithColors[currentIndex];

  const containerVariants = useMemo(() => {
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

  return (
    <div>
      <ChangingTextLayout.Container
        ref={ref}
          variants={containerVariants}
          animate={selectedVariant}
      >
        <AnimatePresence exitBeforeEnter={true}>
          <motion.div
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            key={selectedItem.text}
          >
            {selectedItem.text}
          </motion.div>
        </AnimatePresence>
        <motion.div>{lorem.short}</motion.div>
      </ChangingTextLayout.Container>
    </div>
  );
};
