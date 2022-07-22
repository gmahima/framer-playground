import { CircleScrollAnimatedLayout } from "./CircleScrollAnimated.styles";
import { useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";
export const CircleScrollAnimated = ({ ref1, ref2, ref3 }) => {
  console.log(ref1.current);
  useEffect(() => {
    if (ref1.current) {
      console.log(ref1.current.offsetLeft, ref1.current.offsetTop);
    }
  }, [ref1]);
  const { scrollYProgress, scrollY } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);
  const xasdf = useTransform(scrollY, (value) => value > 200);
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [100, 20, 200]);
  //   const xPos = useTransform(pos, value => value.x)
  return (
    <>
      <CircleScrollAnimatedLayout.Container
        style={{
          scaleX: scale,
          scaleY: scale,
          x: x,
        }}
      ></CircleScrollAnimatedLayout.Container>
    </>
  );
};
