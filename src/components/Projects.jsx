import React, { useState, useEffect } from "react";
import kanbanCoverImage from "../assets/kanbanCoverImage.png";
import amazonui from "../assets/amazonui.jpg";
import studentmanagement from "../assets/studentmanagement.png";
import fantalandingpage from "../assets/fantalangingpag.jpeg";
import atmachine from "../assets/atmachine.jpg";
import gsap from "gsap";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projectsData = [
    
    {
      image: kanbanCoverImage,
      title: "Kanban Board",
      description: "Full stack Kanban Board project created using React js for frontend, Express js for backend and MySQL as a database.",
      github: "https://github.com/yourusername/kanban-board",
      demo: "https://kanban-board-prathamesh.netlify.app/",
    },
    {
      image: studentmanagement,
      title: "Student Management",
      description: "Full stack Student management system project created using React js for frontend, Spring boot for backend and MySQL as a database.",
      github: "https://github.com/prathameshpawar12",
      demo: "https://student-management-by-prathamesh.netlify.app/",
    },
    {
      image: fantalandingpage,
      title: "Fanta Landing Page",
      description: "Made fanta landing page using gsap with th help of html, css and javascript..",
      github: "https://github.com/prathameshpawar12/Fanta-landing-page",
      demo: "https://prathamesh-fanta-landing-page.netlify.app/",
    },
    {
      image: amazonui,
      title: "Amazon UI Clone",
      description: "A front-end clone of Amazon’s interface created using html, css and javascript.",
      github: "https://github.com/prathameshpawar12/Amazon-clone-HTML-CSS",
      demo: "https://amazonbyprathamesh.netlify.app/",
    },
    {
      image: atmachine,
      title: "ATM Machine Java",
      description: "A simple ATM simulation program written in Java with account operations.",
      github: "https://github.com/prathameshpawar12/ATM-Machine-Core-Java-Project",
    },
  ];

  useEffect(() => {
  document.querySelectorAll('.elem').forEach(element => {
    let rotate = 0;
    let diffrance = 0;
    const img = element.querySelector(".moveimg");
    img.style.position = "absolute";

    element.addEventListener("mouseenter", function (details) {
    
      const elemRect = element.getBoundingClientRect();
      const leftPos = details.clientX - elemRect.left - img.offsetWidth / 2;
      const topPos = details.clientY - elemRect.top - img.offsetHeight / 2;

      gsap.set(img, {
        top: topPos,
        left: leftPos,
        opacity: 1,
      });
    });

    element.addEventListener("mouseleave", function () {
      gsap.to(img, {
        opacity: 0,
        ease: "power3.out",
        duration: 0.5,
       
      });
      const targetElement = element.querySelector(".titleh1");
      if (targetElement) {
        targetElement.style.marginLeft = "0px"; 
        targetElement.style.opacity = "0.7";
      }
    });

    element.addEventListener("mousemove", function (details) {
      const elemRect = element.getBoundingClientRect();
      const diff = details.clientY - elemRect.top;
      diffrance = details.clientX - rotate;
      rotate = details.clientX;

      const imgWidth = img.offsetWidth;
      const imgHeight = img.offsetHeight;
      const maxLeft = elemRect.width - imgWidth;
      const maxTop = elemRect.height - imgHeight;
      const leftPos = gsap.utils.clamp(0, maxLeft, details.clientX - elemRect.left - imgWidth / 2);
      const topPos = gsap.utils.clamp(0, maxTop, diff - imgHeight / 2);

      gsap.to(img, {
        top: topPos,
        left: leftPos,
        opacity: 1,
        ease: "power2.out",
        duration: 0.5,
        rotate: gsap.utils.clamp(-5, 5, diffrance * 0.9),
        overwrite: "auto",
      });

      const targetElement = element.querySelector(".titleh1");
      if (targetElement) {
        targetElement.style.transition = "margin-left 0.8s ease-in-out"; 
        targetElement.style.marginLeft = "50px";
        targetElement.style.opacity = "0.2";
      }
    });
  });
}, []);



  
  const ProjectCard = ({ project }) => {
    return (
      <div className=" elem md:flex md:flex-col md:justify-center md:w-[88vw] md:h-[14vw] font-[nf]  md:p-0 p-5 " style={{ pointerEvents: 'auto' }}>
        <div 
          className=" relative md:relative md:w-full border-t-[1px] border-t-[#888] md:h-[13vw] md:flex md:flex-row 
          md:justify-between md:items-center flex flex-col justify-center items-center md:gap-0 gap-2 md:p-0 p-5" >
          {/*This images are for small screen */}
          <img 
            src={project.image} 
            alt={project.title} 
            loading="lazy"
            className="lg:hidden rounded-2xl w-[80vw] h-[25vh] top-3"
          />

          {/*This images are for Large screen */}
          <img 
            src={project.image} 
            alt={project.title} 
            className="moveimg hidden lg:block md:opacity-0 md:absolute md:z-40 md:h-[35vh] md:w-[28vw] rounded-2xl  top-3"
          />
          <h1 className="titleh1 text-white md:text-[6vw] text-2xl font-extrabold opacity-[0.7] font-[gs1] uppercase">{project.title}</h1>
          <div className="z-50 md:flex md:flex-col flex flex-row md:gap-0 gap-4">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="z-999 text-sm w-23 h-8 flex justify-center items-center 
                  text-center bg-black text-gray-300 border-4 border-gray-500 rounded-full hover:bg-orange-500
                  hover:text-black transition-all duration-500 cursor-pointer mb-4 ">
                GitHub
            </a>
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="z-999 text-sm w-23 h-8 flex justify-center items-center 
                    text-center bg-black text-gray-300 border-4 border-gray-500 rounded-full hover:bg-orange-500 hover:text-black 
                    transition-all duration-500 cursor-pointer">
                      Live Demo
              </a>
            )}
          </div>
        </div>
        <p className="pd lowercase md:uppercase opacity-30 text-[14px]">{project.description}</p>
      </div>
    );
  };


  {/* Main return div */}
  return (
    <div id="projects" className=" bg-black w-full flex justify-center items-center md:flex md:justify-center md:items-center">
      <div id="projectin" className="mt-4 mb-4 text-white min-h-screen   flex-col justify-center items-center 
       md:py-15 bg-black rounded-[40px]">
        <div className="md:flex md:flex-row">
          <h1 className="text-3xl font-bold font-[gs1] md:text-[3vw] lg:ml-0 lg:mb-0 lg:mt-14 mt-5 lg:w-[70vw] 
          uppercase text-center md:text-left opacity-80">My Projects</h1>
          <p className="font-[gs1] opacity-60 hidden lg:block mt-[83px] -ml-[41px]">move mouse on projects to see their images</p>
        </div>
        <div className=" md:flex md:flex-col md:justify-center md:w-[91vw] md:pr-[90px] md:mr-14">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <div className="border-t-[1px]  w-[88vw] h-[15vh] border-t-[#888]"></div>
      </div>
    </div>
  );
};

export default Projects;
