import React from 'react'
import { BiLogoJava, BiLogoJavascript, BiLogoNodejs, BiLogoReact, BiLogoSpringBoot, BiLogoTailwindCss } from 'react-icons/bi'
import { DiBootstrap, DiMysql } from 'react-icons/di'
import {motion} from 'framer-motion'

const Tech = () => {
    const variants={
        hidden:{opacity:0, scale:0.8 },
        visible:{opacity:1, scale:1}
    }
  return (
    <div id='skills' className='bg-black flex flex-col md:flex md:h-[100vh] md:w-[99.6vw]   md:flex-col items-center justify-center 
     h-[100vh] w-[100vw]'>
      <div id='bgtch' className= ' md:h-[96vh] md:w-[97.5vw] h-[95vh] w-[90vw] border-white md:border-white border-[1vw] flex flex-col md:gap-8 md:flex md:flex-col items-center justify-center rounded-[45px] '>
        
      <motion.h1 
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}
      className='text-6xl md:mb-0 mb-50 font-light text-white/10  md:text-[7vw] font-[anzo1] lg:mt-8  '>TECHNOLOGIES</motion.h1>

        <motion.div  variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{duration:1.5}} 
          className=' flex flex-wrap md:h-[60vh] md:w-[93vw] justify-center items-center gap-5 lg:mb-16'>
          <div    
              className='bg-white/5 md:h-[54vh] md:w-[10vw]   rounded-t-full flex justify-center items-center transition-all 
              duration-300 hover:translate-y-[-10px] cursor-pointer border-b-2 border-white/20'>
              <BiLogoJavascript className=' text-[80px] text-orange-500 sm:text-[100px] md:text-[120px] transition-all duration-300 hover:translate-y-5'/>
          </div>

          <div className='bg-white/5 md:h-[54vh] md:w-[10vw] rounded-t-full flex justify-center items-center transition-all 
              duration-300 hover:translate-y-[-10px] cursor-pointer  border-b-2 border-white/20' >
              <BiLogoReact className=' text-[80px] text-blue-500 
              sm:text-[100px] md:text-[120px] transition-all duration-300 hover:translate-y-5'/>
          </div>

          <div className='bg-white/5 md:h-[54vh] md:w-[10vw]   rounded-t-full flex justify-center items-center transition-all 
              duration-300 hover:translate-y-[-10px] cursor-pointer  border-b-2 border-white/20'>
              <BiLogoTailwindCss className='cursor-pointer text-[80px] text-sky-400 transition-all duration-300 hover:translate-y-5 
              sm:text-[100px] md:text-[120px]'/>
          </div>

          <div  className='bg-white/5 md:h-[54vh] md:w-[10vw]   rounded-t-full flex justify-center items-center transition-all 
              duration-300 hover:translate-y-[-10px] cursor-pointer  border-b-2 border-white/20'>
              <BiLogoJava className='cursor-pointer text-[80px] text-amber-500 transition-all duration-300 hover:translate-y-5 
              sm:text-[100px] md:text-[120px]'/>
          </div>

          <div className='bg-white/5 md:h-[54vh] md:w-[10vw]   rounded-t-full flex justify-center items-center transition-all 
              duration-300 hover:translate-y-[-10px] cursor-pointer  border-b-2 border-white/20'>
              <BiLogoSpringBoot className='cursor-pointer text-[80px] text-green-500 transition-all duration-300 hover:translate-y-5 
              sm:text-[100px] md:text-[120px]'/>
          </div>

          <div   className='bg-white/5 md:h-[54vh] md:w-[10vw]   rounded-t-full flex justify-center items-center transition-all 
              duration-300 hover:translate-y-[-10px] cursor-pointer  border-b-2 border-white/20'>
              <DiBootstrap className='cursor-pointer text-[80px] text-fuchsia-800 transition-all duration-300 hover:translate-y-5 
              sm:text-[100px] md:text-[120px]'/>
          </div>

          <div  className='bg-white/5 md:h-[54vh] md:w-[10vw]   rounded-t-full flex justify-center items-center transition-all 
              duration-300 hover:translate-y-[-10px] cursor-pointer  border-b-2 border-white/20'>
              <DiMysql className='cursor-pointer text-[80px] text-cyan-600 transition-all duration-300 hover:translate-y-5 
              sm:text-[100px] md:text-[120px]'/>
          </div>

          <div   className='bg-white/5  md:h-[54vh] md:w-[10vw]   rounded-t-full flex justify-center items-center transition-all 
              duration-300 hover:translate-y-[-10px] cursor-pointer  border-b-2 border-white/20'>
              <BiLogoNodejs className='cursor-pointer text-[80px] text-green-400 transition-all duration-300 hover:translate-y-5 
              sm:text-[100px] md:text-[120px]'/>
          </div>

        </motion.div>
      </div>

      <div className=" absolute  overflow-hidden md:w-[95.38vw] w-[90vw] font-[gs1] ">
        <div className="cursor-pointer whitespace-nowrap animate-marquee-left md:text-black/20 
        text-white/10 text-3xl md:text-7xl font-bold lg:mt-26 mt-64">
        
          JAVA  REACT.JS  NODE.JS  EXPRESS MYSQL  SPRING-BOOT  TAILWIND-CSS  HTML  JAVASCRIPT  HIBERNATE REACT  BOOTSTRAP  JDBC
        </div>

        <div className="cursor-pointer whitespace-nowrap animate-marquee-right md:text-black/20 
        text-white/10 text-3xl md:text-7xl font-bold lg:mt-30 mt-72">
        JAVA   NODE.JS  EXPRESS MYSQL  SPRING-BOOT  REACT.JS  TAILWIND-CSS  HTML  JAVASCRIPT  HIBERNATE REACT  BOOTSTRAP  JDBC
        </div>
      </div>


      

    </div>
  )
}

export default Tech