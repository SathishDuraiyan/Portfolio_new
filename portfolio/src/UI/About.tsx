import Navbar from "./Navbar"
import Experience from "./Experience"
import Footer from "./Footer"
import React from "react"

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center md:px-[22%] space-y-10 px-[7%]">
        <div className="flex flex-col gap-5 mt-10">
            <h2 className="text-4xl font-bold text-white">
                About Me
            </h2>
            <div className="text-zinc-100/90 text-justify flex flex-col space-y-5 text-[20px]">
                <span>I'm Sathish Duraiyan, a <span className="font-bold text-white">final-year Computer Science and Engineering</span> student at Knowledge Institute of Technology. I'm passionate about Web Development and UI/UX Designing, specializing in <span className="font-bold text-white"></span>  <span className="font-bold text-white">Java Backend Development</span>. I create full-stack websites with a minimalist approach, focusing on speed, accessibility, and SEO, with a user-first design philosophy.</span>

                <span>Currently, I'm working on projects like a <span className="font-bold text-white">Migrant Labour Support Platform</span> and a <span className="font-bold text-white">Industry Employees Software Installation Records Maintaining</span>. I emphasize clear variable names and maintainable code, tackling challenges like custom programming languages to push my skills further.</span>

                <span>With a diverse range of interests, from <span className="font-bold text-white">BI & Analysis</span>, I strive to apply my knowledge to real-world solutions while continually learning and growing as a developer.</span>
            </div>
        </div>
        <Experience />
        <div className="w-full border border-gray-700/40"></div>
        <Footer />
      </div>
    </div>
  )
}

export default About