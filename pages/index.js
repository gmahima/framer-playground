import Head from "next/head";
import Image from "next/image";
import { NavItem } from "../components";
export default function Home() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="h-20 bg-teal-400 flex items-center justify-between py-4 px-20">
        <div>Logo</div>
        <div className="flex space-x-4">
          <div>about</div>
          <div>details</div>
          <NavItem>more</NavItem>
          <div>contact</div>
        </div>
      </div>
    </div>
  );
}
