import React, { useRef, useState } from 'react'
import image from "../assets/file.png"
import { motion } from 'framer-motion'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { BsEnvelope, BsGithub, BsInstagram, BsLinkedin, BsMailbox, BsMessenger } from "react-icons/bs";

const Hero = () => {


  const tiltRef = useRef(null)
  const [xVal, setxVal] = useState(0)
  const [yVal, setyVal] = useState(0)


  const mouseMoving=(e)=>{
    setxVal((e.clientX-tiltRef.current.getBoundingClientRect().x- tiltRef.current.getBoundingClientRect().width/2)/30)
    setyVal(-(e.clientY-tiltRef.current.getBoundingClientRect().y- tiltRef.current.getBoundingClientRect().height/2)/20  )

   
  }

  useGSAP(function(){
    gsap.to(tiltRef.current,{
      transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration:3,
      ease:'elastic.out(1,0.3)',

    })
  },[xVal,yVal])

  
  return (
    <div id="mainn" className="w-[100vw]  md:w-full  h-screen flex justify-center items-center ">
      <div onMouseMove={(e)=>{
        mouseMoving(e)
        // bg-gradient-to-r from-black to-stone-600 
        }} id='home' className=' relative px-40 h-[96vh] lg:rounded-[35px] rounded-[35px]
         md:w-[97.4vw] w-[93vw]   flex items-center justify-center py-28 md:px-32 gap-90'>
        
        <motion.div initial={{y:150, opacity:0}}
           animate={{y:0, opacity:1}}
           transition={{duration:0.8, delay:0.2}}  id='tiltDiv' ref={tiltRef} className='bg-white hidden lg:flex lg:flex-col 
           font-[anzo1]  bg-clip-text text-transparent  '>
          <h1 className='text-[4.1vw] leading-[4vw] font-bold'>FULL STACK
            <span className=' text-black filter drop-shadow-[2px_2px_2px_white] hover:drop-shadow-[2px_2px_2px_cyan]'>WEB</span>
          </h1>
          
          <h1 
           className='text-[11vw] leading-[7.5vw] font-bold cursor-pointer '>DEVELOPER
           </h1>

          <h1 className='text-[4.1vw] leading-[4vw] font-bold'>TO HIRE
           </h1>
        </motion.div>

        
          <div className=' flex flex-col items-center justify-center gap-5 text-white lg:mt-0 lg:ml-6'>
              <motion.div
              initial={{scale:0.8, opacity:0}}
              animate={{scale:1, opacity:1}}
              transition={{duration:0.8, delay:0.2}}>
            
                <img src={image} loading='lazy' alt="" className='w-[300px] mb-10 md:mb-0 cursor-pointer rounded-full  transition-all duration-300 
                hover:-translate-y-5 hover:scale-103 hover:duration-800 shadow-2xl shadow-cyan-600 bg-transparent hover:brightness-80 hover:shadow-cyan-500 md:w-[350px]  
                filter brightness-78 ' />
              </motion.div>

              <motion.div
                initial={{y:50, opacity:0}}
                animate={{y:0, opacity:1}}
                transition={{duration:0.8, delay:0.2}} className=' flex max-w-[800px] flex-col justify-center items-center gap-3 text-center'>
                <h2 className='md:text-base text-pretty text-3xl  uppercase font-[nf]'>Hello, i'm</h2>
                <h1  className="bg-white bg-clip-text text-transparent
                opacity-80 text-5xl font-light md:text-4xl  uppercase font-[nf] md:border-b-2 border-white">Prathamesh Pawar</h1>
                <h3 className="md:hidden  bg-gradient-to-r from-stone-500 to-white bg-clip-text text-transparent
                  opacity-80 text-2xl md:text-3xl  ">Full Stack Web Developer
                </h3> 
                

                <ul className="hidden md:flex gap-4  text-gray-300">
                    <a href="https://www.linkedin.com/in/prathamesh-pawar-47b841234/" target="blank" className="cursor-pointer text-xl opacity-70 
                    transition-all duration-300 hover:text-blue-500 hover:opacity-100"><BsLinkedin /></a>

                    <a href="https://github.com/prathameshpawar12" target="blank" className="cursor-pointer text-xl opacity-70 transition-all 
                    duration-300 hover:text-gray-600 hover:opacity-100"><BsGithub /></a>

                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtXDztFvTqNqQGsgbLvshfjhkHPhNdszKbBFDrHgxSljzjGbFTHMqclsmFdgnbjRnjTwxB" 
                    target="_blank" className="cursor-pointer text-xl opacity-70 transition-all duration-300 
                  hover:text-blue-300 hover:opacity-100"><BsEnvelope /></a>
                        
                  <a href="https://www.instagram.com/pratham_96km/" target="blank" className="cursor-pointer text-xl opacity-70 
                    transition-all duration-300 hover:text-pink-500 hover:opacity-100"><BsInstagram /></a>
                </ul>
              </motion.div>
          </div>
      


      
          
        
        
      </div>
    </div>
  )
}

export default Hero