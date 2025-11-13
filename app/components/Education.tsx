import React from 'react'

const Education = () => {
  return (
     <div className="min-h-screen flex items-center justify-center w-full px-4 py-16 bg-white dark:bg-c2">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 max-w-6xl w-full">
        
        <div className="text-center lg:text-left max-w-2xl">
          <h1 className="text-2xl dark:text-gray-300 text-c2 sm:text-3xl lg:text-4xl font-serif">
            EDUCATION
          </h1>
          
          <div className="w-20 h-1 bg-c1 mx-auto lg:mx-0 mt-4 mb-8"></div>

         <div className="relative text-gray-700 dark:text-gray-300 dark:bg-dc2 leading-relaxed text-base bg-c3 px-15 py-10 sm:text-lg mb-6">
            <div className="absolute top-[-7] right-4">
              <div className="bg-c1 text-c2 text-xs py-2 px-3 font-bold">
                2025 - present
              </div>
            </div>

            <p className="font-bold font-serif text-sm">
              Université Internationale d'Agadir
            </p>
            <p className="font-extrabold dark:text-gray-50 font-serif text-xl mt-3">
              Software Engineering Degree
            </p>
            <p className="mt-3 text-sm">
              I'm a passionate full-stack developer with a love for creating digital
              solutions that make a difference. With expertise spanning both front-end
              and back-end technologies, I bring ideas to life through clean code and
              intuitive design.
            </p>
          </div>

          
          <div className="relative text-gray-700 dark:text-gray-300 dark:bg-dc2 leading-relaxed text-base bg-c3 px-15 py-10 sm:text-lg mb-6">
          <div className="absolute top-[-7] right-4">
            <div className="bg-c1 text-c2 text-xs py-2 px-3 font-bold">
              2023 - 2025
            </div>
          </div>

          <p className="font-bold font-serif text-sm">CMC - Laayoune</p>
          <p className="font-extrabold font-serif dark:text-gray-50 text-xl mt-3">Full Stack Diploma</p>
          <p className="mt-3 text-sm">
            I'm a passionate full-stack developer with a love for creating digital
            solutions that make a difference. With expertise spanning both front-end
            and back-end technologies, I bring ideas to life through clean code and
            intuitive design.
          </p>
        </div>

        <div className="relative text-gray-700 dark:text-gray-300 dark:bg-dc2 leading-relaxed text-base bg-c3 px-15 py-10 sm:text-lg mb-6">
          <div className="absolute top-[-7] right-4">
            <div className="bg-c1 text-c2 text-xs py-2 px-3 font-bold">
              2023
            </div>
          </div>

          <p className="font-bold font-serif text-sm">CHAM School</p>
          <p className="font-extrabold dark:text-gray-50 font-serif text-xl mt-3">Bachelor Degree</p>
          <p className="mt-3 text-sm">
            I'm a passionate full-stack developer with a love for creating digital
            solutions that make a difference. With expertise spanning both front-end
            and back-end technologies, I bring ideas to life through clean code and
            intuitive design.
          </p>
        </div>



      </div>
      </div>
    </div>
  )
}

export default Education