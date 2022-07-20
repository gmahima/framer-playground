import { AnimatePresence, motion } from "framer-motion";
import { TabSliderLayout } from "./TabSlider.styles";
import { TabSliderCard } from "./TabSliderCard";
import { ingredients } from "../../data";
import { useState } from "react";
import { TabSliderTab } from "./TabSliderTab";
export const TabSlider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(ingredients[0]);
  return (
    <TabSliderLayout.Container>
      {ingredients.map((item, i) => (
        <TabSliderTab
          isItemSelected={selectedItem == item}
          setSelectedItem={setSelectedItem}
          item={item}
          key={item.label}
        ></TabSliderTab>
      ))}
      <AnimatePresence exitBeforeEnter>
        <TabSliderCard
          key={selectedItem ? selectedItem.label : "empty"}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {selectedItem ? selectedItem.icon : "😋"}
        </TabSliderCard>
      </AnimatePresence>
    </TabSliderLayout.Container>
  );
};
