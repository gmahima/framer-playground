import Head from "next/head";
import Image from "next/image";
import { NavItem } from "../components";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <motion.div className="bg-gray-200 min-h-screen">
      <motion.div className="h-20 bg-teal-400 flex items-center justify-between py-4 px-20">
        <motion.div>Logo</motion.div>
        <motion.div className="flex space-x-4">
          <motion.div>about</motion.div>
          <motion.div>details</motion.div>
          <NavItem>more</NavItem>
          <motion.div>contact</motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
