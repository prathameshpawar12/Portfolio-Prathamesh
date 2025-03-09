import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import SmoothScroll from "./components/SmoothScroll";
import CursorFollower from "./components/CursorFollower";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 10);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1100);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <CursorFollower />
      {isLoading ? (
        <div className="loader-container h-[95.7vh] w-[92vw] md:h-[95.7vh] md:w-[97.4vw] rounded-[35px] top-4 left-[17px] fixed flex flex-col justify-center items-center bg-white dark:bg-gray-900">
          <div className="text-loader mb-8">
            <span style={{ animationDelay: '0s' }}>L</span>
            <span style={{ animationDelay: '0.1s' }}>O</span>
            <span style={{ animationDelay: '0.2s' }}>A</span>
            <span style={{ animationDelay: '0.3s' }}>D</span>
            <span style={{ animationDelay: '0.4s' }}>I</span>
            <span style={{ animationDelay: '0.5s' }}>N</span>
            <span style={{ animationDelay: '0.6s' }}>G</span>
          </div>

          {/* Progress Bar */}
          {/* <div className="w-64 h-3 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div> */}

          {/* Percentage Text */}
          <div className="mt-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
            {progress}%
          </div>
        </div>
      ) : (
        <SmoothScroll>
          <main className="flex flex-col items-center">
            <Navbar />
            <Hero />
            <About />
            <Tech />
            <Projects />
            <Contact />
          </main>
        </SmoothScroll>
      )}
    </>
  );
}

export default App;