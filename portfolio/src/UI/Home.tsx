import React from "react";
import Navbar from "./Navbar";
import { IoLogoGithub } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Button } from "../Components/Button";
import Skills from "./Skills";
import Experience from "./Experience";
// import ProjectList from "./ProjectList";
import Footer from "./Footer";
const Home = () => {
  return (
    <div className="bg-[#111111] h-full w-full ">
      <Navbar />
      <div className="flex flex-col mt-10 justify-center md:px-[15%] space-y-6 px-[7%]">
        <div className="p-8 border-2 border-[#222222] rounded-2xl flex flex-col gap-4 text-white">
            
              <p className="text-4xl font-bold">
              Sathish Duraiyan !
              </p>
        
            <div className="flex flex-row gap-5 text-white justify-between ">
              <div className="flex flex-row gap-3 items-center">
                <FaLocationDot></FaLocationDot>
                <p className="text-slate-400">
                  Salem - 637 502, Tamil Nadu, India
                </p>
              </div>
              <div className="flex flex-row gap-5 text-white">
                <a href="https://github.com/SathishDuraiyan" target="_blank"><IoLogoGithub className="border-2 border-[#27272a] p-1.5 rounded-md cursor-pointer hover:shadow-red-600 hover:shadow-2xl w-10 h-10"/></a>
                <a href="https://leetcode.com/u/Sathish_Duraiyan/" target="_blank"><SiLeetcode className="border-2 border-[#27272a] p-1.5 rounded-md cursor-pointer hover:shadow-red-600 hover:shadow-2xl w-10 h-10"/></a>
                <a href="mailto:sathishduriyan6@gmail.com" target="_blank"><SiGmail className="border-2 border-[#27272a] p-1.5 rounded-md cursor-pointer hover:shadow-red-600  hover:shadow-2xl w-10 h-10"/></a>
                <a href="https://www.linkedin.com/in/sathish-duraiyan/" target="_blank"> <FaLinkedin className="border-2 border-[#27272a] p-1.5 rounded-md cursor-pointer hover:shadow-red-600 hover:shadow-2xl w-10 h-10"/></a>
              </div>
            </div>

            <div>
              <p className="text-white text-[18px] flex flex-col">
                I am Java Full Stack Developer and UI/UX Designer, Currently
                pursuving B.E., Final Year Computer Science and Engineering.
                I excel at problem-solving, quick learning, and
                researching to develop real-world solutions with creativity and
                logic.
              </p>
            </div>
            <Button className="text-white p-3 bg-[#222222] hover:bg-white hover:text-black duration-500 transition-all ease-in-out  max-w-fit">
            Download Resume
          </Button>
        </div>
        <div className="pt-5">
        <Skills></Skills>
        <Experience></Experience>
        {/* <ProjectList></ProjectList> */}
        <div className="w-full border border-gray-700/40 mb-10"></div>
        <Footer></Footer>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
