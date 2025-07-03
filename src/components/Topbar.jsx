import { IoClose, IoMenu } from "react-icons/io5";
import ContactElements from "./ContactElements";
import { useState } from "react";

export default function Topbar({ isMenuOpen, setIsMenuOpen }) {

  return (
      <header className="h-14 flex items-center px-4 ml-0 lg:ml-64 lg:relative fixed top-0 left-0 right-0 z-50 bg-gray-50 lg:bg-transparent">
        {/* Dinamic elements */}
        <div className="top-4 items-center lg:hidden flex gap-2 mr-2">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer"
          >
            {isMenuOpen ? <IoClose size={40} /> : <IoMenu size={40} />}
          </button>
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="/src/assets/avatar.jpg"
              alt="Roger Navarro"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <p className="font-bold text-2xl lg:text-base">Roger Navarro</p>
        <div className="ml-auto flex">
          <ContactElements />
        </div>
      </header>
  );
}
