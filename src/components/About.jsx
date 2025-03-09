import React from "react";
import moon from "../assets/file.mp4";
import {motion} from 'framer-motion'

const About = () => {
    const variants={
        hidden:{opacity:0, y:50},
        visible:{opacity:1, y:0}
    }
  return (
    <div id="about" className=" w-[100vw]  h-screen lg:w-[99vw] lg:h-[100vh] lg:relative   py-5 px-3 flex justify-center items-center">
      <div className="  lg:h-[96vh] lg:w-full  lg:rounded-[35px] lg:overflow-hidden h-full  w-[91vw] rounded-[40px] relative   ">
        <video
          autoPlay={true}
          muted
          loop
          src={moon}
          className="h-full w-full object-cover rounded-[40px]"
        ></video>


        <div className="flex flex-col justify-center items-center">
       
        <motion.h1
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{duration:0.5}}
            className="text-white md:text-[12vw] font-[anzo1] lg:absolute uppercase lg:top-12 lg:left-59 absolue md:mt-0  text-[20vw] absolute top-35 left-3">
          About
        </motion.h1>

          {/* This p tag is for Large screen */ }
          <motion.p
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{duration:0.5}} className="md:block hidden md:text-gray-400 md:text-[1.3vw]  font-[Poppins] lg:absolute  md:top-67 md:text-center md:left-22   absolute top-65 left-2  text-white">
            <span className="md:text-3xl text-2xl text-white">I'am a Full Stack Web Developer</span><br />
            skilled in React.js, JavaScript, Nodejs, Express.js,<br />Java, Spring Boot, SQL, HTML and CSS. I specialize
            <br />in building clean, scalable, and  
            high-performance<br /> apps.
            From crafting responsive front-end 
            designs to<br /> seamless backend development with Java, Node
            and<br /> SQL, I create efficient and dynamic 
            user exp-<br />eriences. Let's collaborate and 
            build<br /> something amazing together!
          </motion.p>

          {/* This p tag is for Small screen */ }
          <motion.p
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{duration:0.5}} className="md:hidden md:text-gray-400 md:text-[1.3vw]  font-[Poppins] lg:absolute  md:top-67 md:text-center md:left-22   absolute top-65 left-2  text-white">
            <span className="md:text2xl text-2xl text-white">I'am a Full Stack Web Developer</span><br />skilled in React.js, JavaScript, Nodejs, Express.js,
              Java, Spring Boot, SQL, HTML and CSS. I specialize
              in building clean, scalable, and high-performance
              applications. From crafting responsive front-end designs
              to seamless backend development with Java, Express.JS and
              SQL. I create efficient and dynamic user exp-
              eriences. Let's collaborate and build
              something amazing together!
          </motion.p>

        
          <motion.a 
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{duration:0}}
              href="#contact"
              className="hidden md:block md:absolute md:text-3xl md:w-50 w-40 h-12 md:h-12 flex justify-center items-center 
                  text-center md:top-140 md:left-[16.5vw] bg-black text-white border-4 border-white rounded-full 
                  hover:bg-orange-500 hover:text-black cursor-pointer  absolute bottom-5  top-14    0 left-2 text-xl transition-all duration-300">
            <button  className="cursor-pointer text-[10px] md:text-xl ">CONTACT ME</button>
          </motion.a>
        </div>

        
      </div>
    </div>
  );
};

export default About;
