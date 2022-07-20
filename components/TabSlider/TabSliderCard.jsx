import { TabSliderLayout } from "./TabSlider.styles";
import { motion } from "framer-motion";
export const TabSliderCard = ({ children, ...props }) => {
  return(
    <TabSliderLayout.Card
    {...props}
  >
    {children}
  </TabSliderLayout.Card>
  );
};
