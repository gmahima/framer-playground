import { TabSliderLayout } from "./TabSlider.styles";
import { motion } from "framer-motion";
export const Card = ({ children, ...props }) => {
  return(
    <TabSliderLayout.CardContainer
    {...props}
  >
    {children}
  </TabSliderLayout.CardContainer>
  );
};
