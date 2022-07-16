// import { useState } from "react";
// import { motion, useMotionValue, useTransform } from "framer-motion";

// export const NavItem = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const rotateX = useTransform(y, [-100, 100], [60, -60]);
//   const rotateY = useTransform(x, [-100, 100], [-60, 60]);
//   return (
//     <motion.div
//       onMouseEnter={() => setIsOpen(true)}
//       onMouseLeave={() => setIsOpen(false)}
//       className=" cursor-pointer relative"
//     >
//       {children}{" "}
//       {isOpen && (
// <div
// className="absolute"
//   style={{
//     width: 300,
//     height: 300,
//     background:
//       "red",
//     perspective: 900,
//   }}
// >
//           <motion.div
//             style={{
//               rotateX: -60,
//               rotateY: 1.8
//             }}
//             animate={{x: 0, y: 0, rotateX: 0, rotateY: 0}}
//             // drag
//             // dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
//             // dragElastic={0.6}
//             // whileTap={{ cursor: "grabbing" }}
//           ></motion.div>
//         </div>
//       )}
//     </motion.div>
//   );
// };
// // import { motion, useMotionValue, useTransform } from "framer-motion";

// // export const NavItem = () => {
// //   const x = useMotionValue(0);
// //   const y = useMotionValue(0);
// //   const rotateX = useTransform(y, [-100, 100], [60, -60]);
// //   const rotateY = useTransform(x, [-100, 100], [-60, 60]);

// //   return (
// //     <div
// //       style={{
// //         width: 100,
// //         height: 100,
// //         borderRadius: "50%",
// //         background:
// //           "radial-gradient(rgba(255,255,255,0), rgba(255,255,255,0.3))",
// //         perspective: 900,
// //       }}
// //     >
// //       <motion.div
// //         style={{
// //           width: 150,
// //           height: 150,
// //           borderRadius: 30,
// //           backgroundColor: "red",
// //           left: -25,
// //           top: -25,
// //           position: "relative",
// //           x: x,
// //           y: y,
// //           rotateX: rotateX,
// //           rotateY: rotateY,
// //           cursor: "grab",
// //         }}
// //         drag
// //         dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
// //         dragElastic={0.6}
// //         whileTap={{ cursor: "grabbing" }}
// //       />
// //     </div>
// //   );
// // };

import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export const NavItem = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
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
            width: 100,
            height: 100,
            backgroundColor: "transparent",
            perspective: 900,
            position: "absolute",
            left: "-100%",
          }}
        >
          <motion.div
            className="w-40 absolute  bg-gray-100 shadow-xl p-4 rounded flex flex-col items-center space-y-4"
            style={{
              x: -3,
              y: -10.2,
              rotateX: 20,
              rotateY: -0.8,
            }}
            animate={{ x: 0, y: 0, rotateX: 0, rotateY: 0 }}
          >
            <motion.div>Product 1</motion.div>
            <motion.div>Product 1</motion.div>
            <motion.div>Product 1</motion.div>
            <motion.div>Product 1</motion.div>
            <motion.div>Product 1</motion.div>
            <motion.div>Product 1</motion.div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};
