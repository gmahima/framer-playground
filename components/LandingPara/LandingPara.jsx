import { LandingParaLayout } from "./LandingPara.styles";
import { useInView, useAnimationControls } from "framer-motion";
import { useRef, useEffect } from "react";
import { animationVariants } from "./landingParaVariants";
export const LandingPara = ({ children, dir }) => {
  let offset = dir == "left" ? -20 : 20;
  const controls = useAnimationControls();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      controls.start(
        animationVariants.animate
      );
    }
  }, [isInView]);
  return (
    <LandingParaLayout.Container
      variants={animationVariants}
      initial={dir == "left" ? "initialFromLeft" : "initialFromRight"}
      dir={dir}
      ref={ref}
      animate={controls}
    >
      {children}
    </LandingParaLayout.Container>
  );
};
