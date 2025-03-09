import React, { useState } from "react";
import { BiX, BiMenu } from "react-icons/bi";
import { BsEnvelope, BsGithub, BsInstagram, BsLinkedin, BsMessenger } from "react-icons/bs";
import pdf from "../assets/PrathameshPawarResume.pdf"
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // ✅ Change to boolean

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav initial={{y:-50, opacity:0}}
    animate={{y:0, opacity:1}}
    transition={{duration:0.8, delay:0.2}} className="fixed top-4 z-1000 flex w-full h-13 items-center justify-between 
     px-10 py-7 text-white
        md:justify-between">
      <a href="#home" className="font-[nf] bg-white bg-clip-text text-transparent
       opacity-50 md:text-3xl text-xl font-semibold transition-all duration-300 hover:opacity-100 hover:text-orange-500">
        Prathamesh.
      </a>

      <ul className="hidden md:flex gap-10  mr-16 backdrop-blur-xs bg-stone-600/20 p-4 rounded-2xl">
        <a href="#mainn" className="cursor-pointer opacity-70 transition-all duration-300  hover:opacity-100 hover:text-orange-500 hover:transform hover:scale-110"><li>Home</li></a>
        <a href="#about" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-orange-500 hover:transform hover:scale-110"><li>About</li></a>
        <a href="#skills" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-orange-500 hover:transform hover:scale-110"><li>Tech</li></a>
        <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100  hover:text-orange-500 hover:transform hover:scale-110"><li>Projects</li></a>
        <a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-orange-500 hover:transform hover:scale-110"><li>Contact</li></a>
      </ul>

      

      <div className="hidden  text-3xl w-26 h-10 md:flex justify-center items-center
                text-center bg-black text-white border-4 border-white rounded-full hover:bg-orange-500 cursor-pointer transition-all duration-300 hover:text-black">
           <a href={pdf} download="resummeprathamesh.pdf" className="flex justify-center items-center ">
              <button className="cursor-pointer text-sm ">Resume</button>
           </a>
        </div>

      {/* Mobile Menu Icons */}
      {isOpen ? (
        <BiX className="block md:hidden text-4xl cursor-pointer text-gray-500" onClick={menuOpen} />
      ) : (
        <BiMenu className="block md:hidden text-4xl cursor-pointer text-gray-200" onClick={menuOpen} />
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden md:hidden fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start gap-10 border-l
                      border-gray-800 bg-black/90 p-12 text-white">
          <ul className="flex flex-col gap-8">
            <a href="#home" className="cursor-pointer opacity-70 transition-all duration-100 hover:opacity-100"><li>Home</li></a>
            <a href="#about" className="cursor-pointer opacity-70 transition-all duration-100 hover:opacity-100"><li>About</li></a>
            <a href="#skills" className="cursor-pointer opacity-70 transition-all duration-100 hover:opacity-100"><li>Tech</li></a>
            <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-100 hover:opacity-100"><li>Projects</li></a>
            <a href="#contact" className="cursor-pointer opacity-70 transition-all duration-100 hover:opacity-100"><li>Contact</li></a>
          </ul>

          <ul className="flex flex-wrap gap-5">
            <a href="https://www.linkedin.com/in/prathamesh-pawar-47b841234/" target="blank" 
             className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100"><BsLinkedin /></a>
            
            <a href="https://www.instagram.com/pratham_96km/" target="_blank" className="cursor-pointer text-xl opacity-70 transition-all
             duration-300 hover:text-pink-500 hover:opacity-100"><BsInstagram /></a>

            <a href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtXDztFvTqNqQGsgbLvshfjhkHPhNdszKbBFDrHgxSljzjGbFTHMqclsmFdgnbjRnjTwxB" 
            target="_blank" className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-300 hover:opacity-100"><BsMessenger /></a>

            <a className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-gray-600 hover:opacity-100"><BsGithub /></a>
          </ul>

          <div className="text-xl w-26 h-10 flex justify-center items-center 
                text-center bg-black text-white border-4 border-white rounded-full hover:bg-gray-400 cursor-pointer">
           <a href={pdf} download="resummeprathamesh.pdf">
              <button >Resume</button>
           </a>
        </div>

        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
