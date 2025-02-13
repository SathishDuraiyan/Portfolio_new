import { useState } from "react";
import { Menu } from "lucide-react";
import React from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-[70px] text-white bg-[#111111] sticky">
      <div className="px-6 md:px-28 py-6 flex flex-row w-full justify-between items-center">
        <h2 className="text-2xl font-semibold">Sathish Duraiyan</h2>
        
        <div className="hidden md:flex flex-row gap-5">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/about" className="hover:text-gray-400">About</a>
          <a href="/projects" className="hover:text-gray-400">Projects</a>
          <a href="/contact" className="hover:text-gray-400">Contact Me</a>
        </div>
        

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu size={24} />
        </button>
      </div>
      
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-3 bg-[#111111] py-4">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/about" className="hover:text-gray-400">About</a>
          <a href="/projects" className="hover:text-gray-400">Projects</a>
          <a href="/contact" className="hover:text-gray-400">Contact Me</a>
          <a
            className="p-2 rounded cursor-pointer bg-[#27272a] hover:bg-[#ededed] hover:text-zinc-800 transition ease-in-out duration-300 font-semibold"
            target="_blank"
          >
            Download Resume
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;