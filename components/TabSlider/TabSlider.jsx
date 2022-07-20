import { AnimatePresence, motion } from "framer-motion";
import { TabSliderLayout } from "./TabSlider.styles";
import { Card } from "./Card";
import { ingredients } from "../../data";
import { useState } from "react";
import { Tab } from "./Tab";
import { TabBar } from "./TabBar";
export const TabSlider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(ingredients[0]);
  return (
    <TabSliderLayout.Container>
      <TabBar>
        {ingredients.map((item, i) => (
          <Tab
            isItemSelected={selectedItem == item}
            setSelectedItem={setSelectedItem}
            item={item}
            key={item.label}
          >{console.log(selectedItem, item, selectedItem==item)}</Tab>
        ))}
      </TabBar>
      <AnimatePresence exitBeforeEnter>
        <Card
          key={selectedItem ? selectedItem.label : "empty"}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {selectedItem ? selectedItem.icon : "😋"}
        </Card>
      </AnimatePresence>
    </TabSliderLayout.Container>
  );
};
