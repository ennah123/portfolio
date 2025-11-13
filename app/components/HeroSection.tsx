"use client"
import Lottie from 'lottie-react'
import React, { useEffect, useState } from 'react'
import svg from "@/public/svgs/svg1.json";
import svg2 from "@/public/svgs/svg2.json";

const Hero = () => {
  const [currentSvg, setCurrentSvg] = useState(svg);
  const [isVisible, setIsVisible] = useState(true);
   useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentSvg(current => current === svg ? svg2 : svg);
        setIsVisible(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
   <div className="min-h-screen flex items-center justify-center w-full px-4 py-8 relative overflow-hidden  lg:mt-0 md:mt-0 mt-10 dark:bg-c2">
    {/* <div className="absolute inset-0 bg-[radial-gradient(circle,#FFCC0D_1px,transparent_1px)] bg-[size:30px_30px] opacity-25"></div>  
    <div className="absolute inset-0 bg-[radial-gradient(circle,#2C2C25_1px,transparent_1px)] bg-[size:25px_25px] opacity-0 animate-pulse"></div> */}
    <div className="absolute inset-0 flex justify-center">
      {/* Centered cluster of lines */}
      <div className="relative w-1/3 flex justify-between">
        <div className="w-[2px] h-full bg-gradient-to-b from-transparent via-c1 to-transparent animate-vertical-beam"></div>
        <div className="w-[2px] h-full bg-gradient-to-b from-transparent via-c2 dark:via-gray-200 to-transparent animate-vertical-beam animation-delay-300"></div>
        <div className="w-[2px] h-full bg-gradient-to-b from-transparent via-c1 to-transparent animate-vertical-beam animation-delay-600"></div>
        <div className="w-[2px] h-full bg-gradient-to-b from-transparent via-c2 dark:via-gray-200 to-transparent animate-vertical-beam animation-delay-900"></div>
        <div className="w-[2px] h-full bg-gradient-to-b from-transparent via-c1 to-transparent animate-vertical-beam animation-delay-300"></div>
      </div>
    </div>

      <div className=""></div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10 max-w-6xl ">
          <div className="text-center lg:text-left max-w-md lg:max-w-lg backdrop-blur-sm p-10! rounded-lg">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl dark:text-gray-300 text-c2 font-extrabold">
              FULL-STACK
            </h1>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl dark:text-gray-300 text-c2 font-extrabold mt-2">
              DEVELOPER
            </h1>
          <div className="w-24 h-1 bg-c1 mx-auto lg:mx-0 mt-4"></div>
          
          <p className="mt-6 lg:mt-10 dark:text-gray-300 text-gray-600 leading-relaxed text-sm sm:text-base">
            Crafting digital experiences from front-end elegance to back-end robustness. 
            I transform ideas into fully functional, scalable web applications using modern 
            technologies and best practices.
          </p>

          <div className="mt-8 lg:mt-12 flex flex-wrap gap-3 justify-center lg:justify-start">
            <i className="devicon-react-original dark:text-gray-300 text-c2 text-3xl lg:text-4xl"></i>
            <i className="devicon-laravel-original dark:text-gray-300 text-c2 text-3xl lg:text-4xl"></i>
            <i className="devicon-typescript-plain dark:text-gray-300 text-c2 text-3xl lg:text-4xl"></i>
            <i className="devicon-nextjs-plain dark:text-gray-300 text-c2 text-3xl lg:text-4xl"></i>
            <i className="devicon-mongodb-plain dark:text-gray-300 text-c2 text-3xl lg:text-4xl"></i>
            <i className="devicon-azuresqldatabase-plain dark:text-gray-200 text-c2 text-3xl lg:text-4xl"></i>
          </div>

          <div className="mt-8 lg:mt-12 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-6 py-3 text-xs  bg-c1 text-c2 font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg">
              Aboute me
            </button>
            <button className="px-6 py-3 text-xs border-2 dark:text-gray-300 text-c2 border-dotted dark:border-gray-300 border-c2 font-semibold dark:hover:bg-dc2 hover:bg-c3 hover:border-2 hover:border-c3 transition-all duration-300">
              Contact Me
            </button>
          </div>
        </div>




          <div className={`h-64 sm:h-80 lg:h-96 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <Lottie
              animationData={currentSvg}
              loop={true}
              className="w-full h-full"
            />
          </div>


      </div>
    </div>
  )
}

export default Hero