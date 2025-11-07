"use client"
import Lottie from 'lottie-react'
import React from 'react'
import svg from "@/public/svgs/svg2.json";

const Hero = () => {
  return (
   <div className="min-h-screen flex items-center justify-center w-fit px-4 py-8">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 max-w-6xl w-full">
        <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
          <div className="w-full h-64 sm:h-80 lg:h-96">
            <Lottie
              animationData={svg}
              loop={true}
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="text-center lg:text-left max-w-md lg:max-w-lg">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold">
            FULL-STACK
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold mt-2">
            DEVELOPER
          </h1>
          
          <div className="w-24 h-1 bg-c1 mx-auto lg:mx-0 mt-4"></div>
          
          <p className="mt-6 lg:mt-10 text-gray-600 leading-relaxed text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ex exercitationem 
            in voluptas eos error libero beatae enim. Cupiditate laudantium optio nesciunt porro 
            voluptatibus molestias saepe eius debitis minima maxime?
          </p>
        </div>
      </div>
     </div>
  )
}

export default Hero