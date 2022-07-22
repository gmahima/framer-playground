import { useScroll, useTransform } from "framer-motion";
import { DivAnimatingToScrollLayout } from "./DivAnimatingToScroll.styles";

export const DivAnimatingToScroll = ({ children }) => {
  const { scrollY, scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, (value) => value);
  return (
    <DivAnimatingToScrollLayout.Container></DivAnimatingToScrollLayout.Container>
  );
};
