import { LandingParaLayout } from "./LandingPara.styles";
import { useInView, useAnimationControls } from "framer-motion";
import { useRef, useEffect } from "react";
import { animationVariants } from "./landingParaVariants";
export const LandingPara = ({ children, dir }) => {
  const ref = useRef(null);

  return (
    <LandingParaLayout.Container
      variants={animationVariants}
      initial={dir == "right" ? "initialFromLeft" : "initialFromRight"}
      dir={dir}
      ref={ref}
      whileInView={"animate"}
      viewport={{ once: true }}
    >
      {children}
    </LandingParaLayout.Container>
  );
};
