import { AnimatePresence, motion } from "framer-motion";
import { TabSliderLayout } from "./TabSlider.styles";
import { Card } from "./Card";
import { ingredients } from "../../data";
import { useState } from "react";
import { Tab } from "./Tab";
import { TabBar } from "./TabBar";
import { useEffect } from "react";
export const TabSlider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(ingredients[0]);
  useEffect(() => {
    if (true) {
      const interval = setTimeout(() => {
        let i = ingredients.findIndex(ob => ob == selectedItem)
        console.log("tick", selectedItem);
        if (selectedItem == ingredients[ingredients.length - 1]) {
          setSelectedItem(ingredients[0]);
        } else {
          setSelectedItem(ingredients[i+1]);
        }
      }, 1000 * 2);

      return () => {
        clearInterval(interval);
      };
    }
  }, [selectedItem]);
  return (
    <TabSliderLayout.Container>
      <TabBar>
        {ingredients.map((item, i) => (
          <Tab
            isItemSelected={selectedItem == item}
            setSelectedItem={setSelectedItem}
            item={item}
            key={item.label}
          ></Tab>
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
