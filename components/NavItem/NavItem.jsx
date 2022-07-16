import { useState } from "react";
import { motion } from "framer-motion";

export const NavItem = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      onClick={() => setIsOpen(!isOpen)}
      className=" cursor-pointer relative"
    >
      {children}{" "}
      {isOpen && (
        <motion.div
        initial={{opacity: 0, x: 2, y: -2}}
          animate={{
            clipPath: `circle(${1000 * 2 + 200}px at 40px 40px)`,
            transition: {
              type: "spring",
              stiffness: 20,
              restDelta: 2,
              delayChildren: 0.5
            },
            opacity: 1,
            x: 0,
            y: 0
          }}
          transition={{ duration: 5 }}
          className="w-40 absolute  bg-gray-100 shadow-xl p-4 rounded flex flex-col items-center space-y-4"
        >
          <motion.div>Product 1</motion.div>
          <motion.div>Product 1</motion.div>
          <motion.div>Product 1</motion.div>
          <motion.div>Product 1</motion.div>
          <motion.div>Product 1</motion.div>
          <motion.div>Product 1</motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};
