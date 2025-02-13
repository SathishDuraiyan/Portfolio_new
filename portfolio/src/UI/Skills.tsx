import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiStreamlit } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import React from "react";
import { BiLogoSpringBoot } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { FaFigma } from "react-icons/fa6";
import { SiPandas } from "react-icons/si";

const Skills = () => {
  return (
    <>
        <div className="text-white">
            <h1 className="text-3xl font-bold">What I Work With</h1>
            <div className="flex overflow-hidden space-x-8 mt-8 relative group select-none cursor-default">
              <div className="flex space-x-8 animate-loop-scroll group-hover:paused">
                <div className="flex gap-1 items-center"><FaReact className="w-[50px] h-[50px]" /></div>
                <div className="flex gap-1 items-center"><FaHtml5 className="w-[50px] h-[50px]" /></div>
                <div className="flex gap-1 items-center"><FaCss3Alt className="w-[50px] h-[50px]" /></div>
                <div className="flex gap-1 items-center"><FaJsSquare className="w-[50px] h-[50px]" /></div>
                <div className="flex gap-1 items-center"><BiLogoTypescript className="w-[54px] h-[50px]" /></div>
                <div className="flex gap-1 items-center"><SiStreamlit className="w-[50px] h-[50px]" /></div>
                <div className="flex gap-2 items-center"><RiTailwindCssFill className="w-[50px] h-[50px]" /></div>
                <div className="flex gap-2 items-center"><FaCopyright className="w-[50px] h-[50px]" /></div>
                <div className="flex gap-2 items-center"><FaJava className="w-[50px] h-[50px]" /></div>
                <div className="flex gap-2 items-center"><FaPython className="w-[50px] h-[50px]" /></div>
                <div className="flex gap-2 items-center"><FaNodeJs className="w-[50px] h-[50px]" /></div>
                <div className="flex gap-2 items-center"><BiLogoSpringBoot className="w-[50px] h-[50px]" /></div>
                <div className="flex gap-2 items-center"><GrMysql className="w-[50px] h-[50px]" /></div>
                <div className="flex gap-2 items-center"><FaFigma className="w-[50px] h-[50px]" /></div>
                <div className="flex gap-2 items-center"><SiPandas className="w-[50px] h-[50px]" /></div>
        
              </div>
              <div className="flex space-x-8 animate-loop-scroll group-hover:paused" aria-hidden="true">
                <div className="flex gap-1 items-center"><FaReact className="w-[50px] h-[50px]" /></div>
                <div className="flex gap-1 items-center"><FaHtml5 className="w-[50px] h-[50px]" /></div>
                <div className="flex gap-1 items-center"><FaCss3Alt className="w-[50px] h-[50px]" /></div>
                <div className="flex gap-1 items-center"><FaJsSquare className="w-[50px] h-[50px]" /></div>
                <div className="flex gap-1 items-center"><BiLogoTypescript className="w-[54px] h-[54px]" /></div>
                <div className="flex gap-1 items-center"><SiStreamlit className="w-[50px] h-[50px]" /></div>
                <div className="flex gap-2 items-center"><RiTailwindCssFill className="w-[50px] h-[50px]" /></div>
                <div className="flex gap-2 items-center"><FaCopyright className="w-[50px] h-[50px]" /></div>
                <div className="flex gap-2 items-center"><FaJava className="w-[50px] h-[50px]" /></div>
                <div className="flex gap-2 items-center"><FaPython className="w-[50px] h-[50px]" /></div>
                <div className="flex gap-2 items-center"><FaNodeJs className="w-[50px] h-[50px]" /></div>
                <div className="flex gap-2 items-center"><BiLogoSpringBoot className="w-[50px] h-[50px]" /></div>
                <div className="flex gap-2 items-center"><GrMysql className="w-[50px] h-[50px]" /></div>
                <div className="flex gap-2 items-center"><FaFigma className="w-[50px] h-[50px]" /></div>
                <div className="flex gap-2 items-center"><SiPandas className="w-[50px] h-[50px]" /></div>
              </div>
              <div className="absolute top-0 left-0 w-[70px] h-[70px] bg-linear-to-r from-[#111111] to-transparent"></div>
              <div className="absolute top-0 right-0 w-[70px] h-[70px] bg-linear-to-l from-[#111111] to-transparent"></div>
            </div>
            
        </div> 
    </>
  )
}

export default Skills