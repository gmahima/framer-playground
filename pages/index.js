import Head from "next/head";
import Image from "next/image";
import { NavItem } from "../components";
import { motion } from "framer-motion";
import {ParallaxSwiper} from "../components";

export default function Home() {
  return (
    <motion.div className="bg-gray-200 min-h-screen">
      <ParallaxSwiper/>
    </motion.div>
  );
}
