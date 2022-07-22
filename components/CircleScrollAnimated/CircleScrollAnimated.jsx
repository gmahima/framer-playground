import { CircleScrollAnimatedLayout } from "./CircleScrollAnimated.styles";
import { useScroll } from "framer-motion";

export const CircleScrollAnimated = () => {
  const { scrollYProgress } = useScroll();
  return (
    <CircleScrollAnimatedLayout.Container
      style={{ scaleX: scrollYProgress, scaleY: scrollYProgress }}
    ></CircleScrollAnimatedLayout.Container>
  );
};
