import { ChangingTextLayout } from "./ChangingText.styles";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { lorem } from "../../data";
let arr = [
  { text: "hi", bg: "primary" },
  { text: "lorem", bg: "secondary" },
  { text: "ipsum", bg: "bg" },
  { text: "dolor", bg: "highlight" }
];
export const ChangingText = ({ children }) => {
  let [selectedItem, setSelectedItem] = useState(arr[0]);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
      const interval = setTimeout(() => {
        let i = arr.findIndex(ob => ob == selectedItem)
        console.log("tick", selectedItem);
        if (selectedItem == arr[arr.length - 1]) {
          setSelectedItem(arr[0]);
        } else {
          setSelectedItem(arr[i+1]);
        }
      }, 1000 * 2);

      return () => {
        clearInterval(interval);
      };
  }, [selectedItem]);
  return (
    <div>
      <div>{lorem.long}</div>

      <AnimatePresence exitBeforeEnter>
        <ChangingTextLayout.Container
          ref={ref}
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          exit={{ y: 10 }}
          transition = {{duration: 0.2}}
          key={selectedItem? selectedItem.text : "x"}
        >
          {selectedItem.text}
        </ChangingTextLayout.Container>
      </AnimatePresence>
    </div>
  );
};
