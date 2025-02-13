import React from "react";
import Navbar from "./Navbar";
import { IoLogoGithub } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Button } from "../Components/Button";
import Skills from "./Skills";
const Home = () => {
  return (
    <div className="bg-black h-screen w-full ">
      <Navbar />
      <div className="py-20 px-38">
        <div className="p-8 border-2 border-[#222222] rounded-2xl flex flex-col gap-4 text-white">
            
              <p className="text-4xl font-bold">
              Sathish Duraiyan !
              </p>
          

            <div className="flex flex-row gap-5 text-white justify-between ">
              <div className="flex flex-row gap-3 items-center">
                <FaLocationDot></FaLocationDot>
                <p className="text-slate-400">
                  Salem - 637502, Tamil Nadu, India
                </p>
              </div>
              <div className="flex flex-row gap-5 text-white">
                <IoLogoGithub className="w-7 h-7"></IoLogoGithub>
                <SiLeetcode className="w-7 h-7"></SiLeetcode>
                <SiGmail className="w-7 h-7"></SiGmail>
                <FaLinkedin className="w-7 h-7"></FaLinkedin>
              </div>
            </div>

            <div>
              <p className="text-white text-[18px] flex flex-col">
                I am Java Full Stack Developer and UI/UX Designer, Currently
                pursuving B.E., Final Year Computer Science and Engineering.
                <br></br>I excel at problem-solving, quick learning, and
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
        </div>
        
      </div>
    </div>
  );
};

export default Home;
