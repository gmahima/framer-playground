import { CircleScrollAnimatedLayout } from "./CircleScrollAnimated.styles";
import { useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";
export const CircleScrollAnimated = ({ xa, ya }) => {
  console.log(xa, ya);
  const { scrollYProgress, scrollY } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  const xasdf = useTransform(scrollY, [0, 0.5, 1], xa);
  const yasdf = useTransform(scrollY, [0, 0.5, 1], ya);
  //   const xPos = useTransform(pos, value => value.x)
  return (
    <>
      <CircleScrollAnimatedLayout.Container
        style={{
          scaleX: scale,
          scaleY: scale,
          x: xasdf,
          // y: yasdf,
        }}
      ></CircleScrollAnimatedLayout.Container>
    </>
  );
};
