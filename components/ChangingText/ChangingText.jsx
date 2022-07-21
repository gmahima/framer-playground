import { ChangingTextLayout } from "./ChangingText.styles";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { lorem } from "../../data";
let arr = [
  { text: "hi", bg: "primary" },
  { text: "lorem", bg: "secondary" },
  { text: "ipsum", bg: "theme.colors.bg" },
];
export const ChangingText = ({ children }) => {
  let [selectedItem, setSelectedItem] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      const interval = setTimeout(() => {
        console.log("tick", selectedItem);
        if (selectedItem == arr.length - 1) {
          setSelectedItem(0);
        } else {
          setSelectedItem(selectedItem + 1);
        }
      }, 1000 * 2);

      return () => {
        clearInterval(interval);
      };
    }
  }, [selectedItem, isInView]);

  return (
    <div>
      <div>{lorem.long}</div>
      <ChangingTextLayout.Container ref={ref} bg={arr[selectedItem].bg}>
        {arr[selectedItem].text}
      </ChangingTextLayout.Container>
    </div>
  );
};
