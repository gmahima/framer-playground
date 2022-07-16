import { useState } from "react";

export const NavItem = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true)
  return (
    <div  onClick={() => setIsOpen(!isOpen)} className=" cursor-pointer relative"> 
      {children}{" "}
      {isOpen && (
        <div className="w-40 absolute right-px left-px bg-gray-100 shadow-xl p-4 rounded flex flex-col items-center space-y-4">
          <div >Product 1</div>
          <div >Product 1</div>
          <div >Product 1</div>
          <div >Product 1</div>
          <div >Product 1</div>
          <div >Product 1</div>
        </div>
      )}
    </div>
  );
};
