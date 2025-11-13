"use client"
import React, { useState } from 'react'

const TechStack = () => {
  const [stack, setStack] = useState('all')

  const techStacks = {
    frontend: [
      { name: 'shadcn/ui', badge: 'https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=react&logoColor=white' },
      { name: 'HTML5', badge: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white' },
      { name: 'CSS3', badge: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white' },
      { name: 'JavaScript', badge: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black' },
      { name: 'TypeScript', badge: 'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white' },
      { name: 'React', badge: 'https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black' },
      { name: 'Next.js', badge: 'https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white' },
      // { name: 'Vue.js', badge: 'https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white' },
      // { name: 'Angular', badge: 'https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white' },
      // { name: 'Svelte', badge: 'https://img.shields.io/badge/Svelte-FF3E00?style=for-the-badge&logo=svelte&logoColor=white' },
      { name: 'Tailwind CSS', badge: 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white' },
      { name: 'Bootstrap', badge: 'https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white' },
      // { name: 'Material-UI', badge: 'https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=mui&logoColor=white' },
      { name: 'Redux', badge: 'https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white' },
      // { name: 'Vite', badge: 'https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white' },
      // { name: 'Webpack', badge: 'https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black' },
    ],
    backend: [
      { name: 'Sequelize', badge: 'https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white' },
      { name: 'Mongoose', badge: 'https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white' },
      { name: 'WebSocket', badge: 'https://img.shields.io/badge/WebSocket-010101?style=for-the-badge&logo=websocket&logoColor=white' },
      { name: 'Cron Job', badge: 'https://img.shields.io/badge/Cron_Job-009688?style=for-the-badge&logo=cron&logoColor=white' },
      { name: 'Node.js', badge: 'https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white' },
      { name: 'Express.js', badge: 'https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white' },
      { name: 'Python', badge: 'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white' },
      // { name: 'Django', badge: 'https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white' },
      // { name: 'Flask', badge: 'https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white' },
      { name: 'Java', badge: 'https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white' },
      // { name: 'Spring', badge: 'https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white' },
      // { name: 'C#', badge: 'https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white' },
      // { name: '.NET', badge: 'https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white' },
      { name: 'PHP', badge: 'https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white' },
      { name: 'Laravel', badge: 'https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white' },
      // { name: 'Ruby', badge: 'https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white' },
      // { name: 'Ruby on Rails', badge: 'https://img.shields.io/badge/Ruby_on_Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white' },
      // { name: 'Go', badge: 'https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white' },
      // { name: 'Rust', badge: 'https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white' },
    ],
    databases: [
      { name: 'MySQL', badge: 'https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white' },
      { name: 'PostgreSQL', badge: 'https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white' },
      { name: 'MongoDB', badge: 'https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white' },
      // { name: 'Redis', badge: 'https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white' },
      { name: 'SQLite', badge: 'https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white' },
      // { name: 'Oracle', badge: 'https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white' },
      { name: 'Microsoft SQL Server', badge: 'https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white' },
      // { name: 'Firebase', badge: 'https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black' },
      // { name: 'Supabase', badge: 'https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white' },
      // { name: 'Cassandra', badge: 'https://img.shields.io/badge/Cassandra-1287B1?style=for-the-badge&logo=apache%20cassandra&logoColor=white' },
      // { name: 'Elasticsearch', badge: 'https://img.shields.io/badge/Elasticsearch-005571?style=for-the-badge&logo=elasticsearch&logoColor=white' },
    ],
    devops: [
      { name: 'Docker', badge: 'https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white' },
      // { name: 'Kubernetes', badge: 'https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white' },
      // { name: 'AWS', badge: 'https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white' },
      // { name: 'Azure', badge: 'https://img.shields.io/badge/Microsoft_Azure-0089D6?style=for-the-badge&logo=microsoft-azure&logoColor=white' },
      // { name: 'Google Cloud', badge: 'https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white' },
      // { name: 'GitHub Actions', badge: 'https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white' },
      // { name: 'GitLab CI', badge: 'https://img.shields.io/badge/GitLab_CI-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white' },
      // { name: 'Jenkins', badge: 'https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white' },
      // { name: 'Terraform', badge: 'https://img.shields.io/badge/Terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white' },
      // { name: 'Ansible', badge: 'https://img.shields.io/badge/Ansible-000000?style=for-the-badge&logo=ansible&logoColor=white' },
    ],
    tools: [
      { name: 'Git', badge: 'https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white' },
      { name: 'GitHub', badge: 'https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white' },
      { name: 'GitLab', badge: 'https://img.shields.io/badge/GitLab-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white' },
      // { name: 'Bitbucket', badge: 'https://img.shields.io/badge/Bitbucket-0052CC?style=for-the-badge&logo=bitbucket&logoColor=white' },
      { name: 'Jira', badge: 'https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=jira&logoColor=white' },
      // { name: 'Confluence', badge: 'https://img.shields.io/badge/Confluence-172B4D?style=for-the-badge&logo=confluence&logoColor=white' },
      { name: 'VS Code', badge: 'https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white' },
      { name: 'Postman', badge: 'https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white' },
      { name: 'Figma', badge: 'https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white' },
      // { name: 'Adobe XD', badge: 'https://img.shields.io/badge/Adobe%20XD-FF61F6?style=for-the-badge&logo=adobe%20xd&logoColor=white' },
    ],
    platforms: [
      { name: 'Vercel', badge: 'https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white' },
      { name: 'Netlify', badge: 'https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white' },
      { name: 'Render', badge: 'https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white' },
      // { name: 'Heroku', badge: 'https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white' },
      // { name: 'DigitalOcean', badge: 'https://img.shields.io/badge/Digital_Ocean-0080FF?style=for-the-badge&logo=digitalocean&logoColor=white' },
      // { name: 'Cloudflare', badge: 'https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white' },
    ],
    methodologies: [
      { name: 'Agile', badge: 'https://img.shields.io/badge/Agile-0096D6?style=for-the-badge&logo=agile&logoColor=white' },
      { name: 'Scrum', badge: 'https://img.shields.io/badge/Scrum-6DB33F?style=for-the-badge&logo=scrum&logoColor=white' },
      { name: 'Kanban', badge: 'https://img.shields.io/badge/Kanban-2587C3?style=for-the-badge&logo=kanban&logoColor=white' },
      { name: 'UML', badge: 'https://img.shields.io/badge/UML-3366CC?style=for-the-badge&logo=uml&logoColor=white' },
      { name: 'Merise', badge: 'https://img.shields.io/badge/Merise-FF6B6B?style=for-the-badge&logo=diagrams&logoColor=white' },
      // { name: 'TDD', badge: 'https://img.shields.io/badge/TDD-25A162?style=for-the-badge&logo=test&logoColor=white' },
      // { name: 'CI/CD', badge: 'https://img.shields.io/badge/CI/CD-4078C0?style=for-the-badge&logo=github-actions&logoColor=white' },
    ]
  }

  // Get all technologies for "all" view
  const allTechnologies = Object.values(techStacks).flat()

  // Get technologies for current filter
  const currentTechnologies = stack === 'all' ? allTechnologies : techStacks[stack]

  return (
    <div className="min-h-screen flex items-center justify-center w-full px-4 py-16 bg-white">
      <div className="flex flex-col items-center justify-center gap-12 max-w-6xl w-full">
        
        <div className="text-center max-w-2xl w-full">
          <h2 className="text-2xl text-c2 sm:text-3xl lg:text-4xl font-serif">
            Tech Skills
          </h2>
          
          <div className="w-20 h-1 bg-c1 mx-auto mt-4 mb-8"></div>

          <div className='my-10 flex flex-wrap gap-3 justify-center'>
            <button 
              onClick={() => setStack('all')}
              className={`text-c2 px-4 py-2 font-sans text-xs font-bold capitalize transition-all duration-200 ${
                stack === 'all' ? 'bg-c1 transform scale-105' : 'bg-c3 hover:bg-c1/80'
              }`}
            >
              All Technologies
            </button>
            {Object.keys(techStacks).map((category) => (
              <button 
                key={category}
                onClick={() => setStack(category)}
                className={`text-c2 px-4 py-2 font-sans font-bold text-xs capitalize transition-all duration-200 ${
                  stack === category ? 'bg-c1 transform scale-105' : 'bg-c3 hover:bg-c1/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {currentTechnologies.map((tech) => (
              <div key={tech.name} className="relative group">
                <img 
                  src={tech.badge} 
                  alt={tech.name}
                  className="transition-transform duration-200 group-hover:scale-105 cursor-pointer"
                />
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default TechStack