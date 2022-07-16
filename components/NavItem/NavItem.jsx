import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export const NavItem = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);
  return (
    <motion.div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className=" cursor-pointer relative"
    >
      {children}{" "}
      {isOpen && (
        <div
          style={{
            width: 400,
            height: 400,
            background:
              "transparent",
            perspective: 900,
          }}
        >
          <motion.div
            style={{
              width: 500,
              height: 500,
              borderRadius: 30,
              backgroundColor: "red",
              left: -25,
              top: -25,
              position: "relative",
              x: 3,
              y: 190.2,
              rotateX: -60,
              rotateY: 1.8,
              cursor: "grab",
            }}
            animate={{x: 0, y: 0, rotateX: 0, rotateY: 0}}
            // drag
            // dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            // dragElastic={0.6}
            // whileTap={{ cursor: "grabbing" }}
          />
        </div>
      )}
    </motion.div>
  );
};
// import { motion, useMotionValue, useTransform } from "framer-motion";

// export const NavItem = () => {
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const rotateX = useTransform(y, [-100, 100], [60, -60]);
//   const rotateY = useTransform(x, [-100, 100], [-60, 60]);

//   return (
//     <div
//       style={{
//         width: 100,
//         height: 100,
//         borderRadius: "50%",
//         background:
//           "radial-gradient(rgba(255,255,255,0), rgba(255,255,255,0.3))",
//         perspective: 900,
//       }}
//     >
//       <motion.div
//         style={{
//           width: 150,
//           height: 150,
//           borderRadius: 30,
//           backgroundColor: "red",
//           left: -25,
//           top: -25,
//           position: "relative",
//           x: x,
//           y: y,
//           rotateX: rotateX,
//           rotateY: rotateY,
//           cursor: "grab",
//         }}
//         drag
//         dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
//         dragElastic={0.6}
//         whileTap={{ cursor: "grabbing" }}
//       />
//     </div>
//   );
// };
