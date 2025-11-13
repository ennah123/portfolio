"use client"

const AboutMe = () => {
  function calculateAge() {
    const today = new Date()
    const birth = new Date("2004-09-30")
    
    let age = today.getFullYear() - birth.getFullYear()
    const monthDiff = today.getMonth() - birth.getMonth()
    const dayDiff = today.getDate() - birth.getDate()
    
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--
    }
    
    return age
  }
  const age = calculateAge()

  return (
    <div className="min-h-screen flex items-center justify-center w-full mt-15 px-4 py-16 bg-white">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 max-w-6xl w-full">
        
        <div className="text-center lg:text-left max-w-2xl">
          <h1 className="text-3xl text-c2 sm:text-4xl lg:text-5xl font-serif mb-2">
            OULDLAKHLIFA Ennah
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl mb-8">Full-Stack Developer</p>
          
          <div className="w-20 h-1 bg-c1 mx-auto lg:mx-0 mt-4 mb-8"></div>
          
          <p className="text-gray-700 leading-relaxed text-base text-sm mb-6 text-justify px-5">
            I'm a 21-year-old passionate full-stack developer from Laayoune, Morocco, with over 3 years of experience designing and building 
            digital solutions. My journey began with curiosity and a fascination for how technology can solve real-world problems, and over 
            the years, it has evolved into a commitment to creating scalable, efficient, and user-friendly applications. I enjoy tackling 
            challenges across both frontend and backend development, continuously learning new tools and frameworks to enhance my craft. Beyond coding, 
            I’m deeply interested in optimizing workflows, improving user experiences, and contributing to meaningful projects. You can reach me at 
            <span className="font-semibold text-c2">{" "} 123ennah@gmail.com</span>.
          </p>
          
          <p className="text-gray-700 leading-relaxed  text-base text-sm mb-6 text-justify px-5">
            I specialize in modern web technologies and thrive on turning complex problems into elegant, user-friendly solutions. I’m passionate about writing clean, maintainable code, optimizing performance, and creating seamless user experiences. I enjoy staying up-to-date with the latest trends and best practices, continuously learning and improving in the ever-evolving tech landscape.
          </p>

          <div className="bg-c3 p-6 mt-8">
            <p className="text-gray-800 italic text-base text-sm">
              "I can seamlessly switch between frontend magic and backend logic!"
            </p>
          </div>

          <div className="flex justify-center mt-20">
            <div className="flex flex-col items-center justify-center gap-3 bg-c1 text-c2 w-32 h-28 hover:bg-c2 hover:text-white transition-all duration-200 cursor-pointer">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="font-semibold text-xs text-center">Download CV</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe