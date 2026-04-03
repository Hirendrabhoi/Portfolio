import React from 'react'
import ProjectSwiper from '../swipper/ProjectSwiper'
import newsimg from '../../assets/news.jpg'

const projectcard = [
  {
    title: 'Newsman',
    desc: 'A news web app built with React that fetches real-time articles from an API. Initially faced issues with API rate limits and slow loading, which I solved by implementing conditional rendering, loading states, and optimizing API calls. Also handled category-based filtering for better user experience.',
    img: newsimg,
    skills: ['JAVASCRIPT', 'REACT', 'API', 'TAILWIND'],
    gitlink: 'https://github.com/Hirendrabhoi/newsman',
    hostlink: ''
  },
  {
    title: 'Auth System',
    desc: 'A full-stack authentication system using Node.js and JWT. Faced challenges with secure login sessions and token storage, which I solved using HTTP-only cookies and proper backend validation. Implemented login, logout, and protected routes.',
    img: newsimg,
    skills: ['NODE', 'EXPRESS', 'JWT', 'MONGODB'],
    gitlink: '#',
    hostlink: ''
  },
  {
    title: 'Image Upload App',
    desc: 'Built an app where users can upload images and store them in cloud storage. Initially struggled with handling file buffers and upload flow, but solved it by integrating Cloudinary and managing file data properly from frontend to backend.',
    img: newsimg,
    skills: ['REACT', 'NODE', 'CLOUDINARY', 'MULTER'],
    gitlink: '#',
    hostlink: ''
  },
  {
    title: 'Excel & PDF Generator',
    desc: 'Created a feature to export data into Excel and PDF format. Faced issues in formatting structured data and headers, which I solved by mapping JSON data correctly and using libraries like XLSX and jsPDF for proper file generation.',
    img: newsimg,
    skills: ['JAVASCRIPT', 'XLSX', 'JSPDF'],
    gitlink: '#',
    hostlink: ''
  },
  {
    title: 'Portfolio Website',
    desc: 'Developed a personal portfolio using React and Tailwind CSS. Focused on responsive design and smooth UI interactions. Solved layout issues across devices and implemented Swiper.js for interactive project and skill sections.',
    img: newsimg,
    skills: ['REACT', 'TAILWIND', 'SWIPER'],
    gitlink: '#',
    hostlink: ''
  }
];

const Projects = () => {
  return (
    <section id='project' className='w-full py-20 px-4 bg-transparent mt-20'>

      <div className='max-w-6xl mx-auto flex flex-col gap-12'>

        {/* HEADER */}
        <div className='text-center'>
          <h2 className='text-3xl md:text-5xl font-bold text-white'>
            My <span className='text-yellow-400'>Projects</span>
          </h2>
          <p className='text-[#0f172a] mt-3 max-w-2xl mx-auto text-sm md:text-base'>
            Here are some of the projects I’ve built while learning full-stack development, 
            focusing on solving real-world problems and improving performance.
          </p>
        </div>

        {/* SWIPER CONTAINER */}
        <div className='relative bg-[#0f172a] border border-yellow-500/20 
        rounded-2xl p-4 md:p-6 shadow-lg shadow-yellow-500/10'>

          <ProjectSwiper projectcard={projectcard} />

        </div>

      </div>

    </section>
  )
}

export default Projects