import React, { useEffect, useState } from 'react'
import SkillCard from '../swipper/SkillCard'
import { BiRightArrow } from 'react-icons/bi'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { SiExpress, SiJavascript, SiJsonwebtokens, SiMongodb, SiPostman } from 'react-icons/si'
import { RiTailwindCssFill } from 'react-icons/ri'

const About = () => {

  const skillcards = [
    {
      id: 1,
      skill: 'REACT JS',
      icons: FaReact,
      description: 'Frontend library for building UI components',
      link: 'https://react.dev/learn'
    },
    {
      id: 2,
      skill: 'NODE JS',
      icons: FaNodeJs,
      description: 'Backend runtime for server-side applications',
      link: 'https://nodejs.org/en/learn/getting-started/introduction-to-nodejs'
    },
    {
      id: 3,
      skill: 'EXPRESS JS',
      icons: SiExpress,
      description: 'Web framework for building APIs',
      link: 'https://expressjs.com/'
    },
    {
      id: 4,
      skill: 'TAILWIND CSS',
      icons: RiTailwindCssFill,
      description: 'Utility-first CSS framework for styling',
      link: 'https://tailwindcss.com/docs/installation/using-vite'
    },
    {
      id: 5,
      skill: 'MONGODB',
      icons: SiMongodb,
      description: 'NoSQL database for storing application data',
      link: 'https://www.mongodb.com/docs/manual/core/document/'
    },
    {
      id: 6,
      skill: 'JAVASCRIPT',
      icons: SiJavascript,
      description: 'Core programming language for web development',
      link: 'https://devdocs.io/javascript/'
    },
    {
      id: 7,
      skill: 'POSTMAN',
      icons: SiPostman,
      description: 'API testing and development tool',
      link: 'https://learning.postman.com/docs/introduction/overview'
    }
  ];

  const bullet_points = [
    "Strong in React and modern frontend development.",
    "Experience building full-stack applications (MERN).",
    "Currently learning backend optimization & system design."
  ]

  const [selectedcard, setSelectedcard] = useState(null)

  function cardtoshow(id) {
    const card = skillcards.find((c) => c.id === id)
    setSelectedcard(card)
  }

  useEffect(() => {
    cardtoshow(1)
  }, [])

  return (
    <div id='about' className='w-full mt-40 py-20 px-4 flex items-center'>
      <div className='max-w-6xl w-full mx-auto flex flex-col gap-12'>

        {/* HEADING */}
        <div className="flex flex-col gap-2">
          <span className="text-yellow-400 uppercase tracking-widest text-sm">
            About Me
          </span>

          <h2 className='text-3xl md:text-4xl font-bold text-white'>
            Who I Am & What I Do
          </h2>

          <div className="w-20 h-1 bg-[#e24833] rounded-full"></div>
        </div>

        <div className='md:grid md:grid-cols-12 gap-10 flex flex-col'>

          {/* LEFT SIDE */}
          <div className='col-span-6 flex flex-col gap-6'>

            {/* Description */}
            <p className='text-gray-100 text-lg leading-relaxed'>
              I’m a <span className="text-white font-semibold">Full Stack MERN Developer</span> focused on building clean, responsive, and scalable web applications. I enjoy turning ideas into real-world products with smooth user experience and efficient backend systems.
            </p>

            {/* Bullet Points */}
            <ul className='flex flex-col gap-4'>
              {bullet_points.map((point, index) => (
                <li
                  key={index}
                  className='flex items-start gap-3 text-gray-100 text-base'>

                  {/* Custom bullet */}
                  <span className="text-yellow-400 mt-1"><BiRightArrow /> </span>

                  <span className='text-[#1e293b]'>{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-6 mt-4">

              <div>
                <p className="text-3xl font-bold text-white">5+</p>
                <p className="text-lg text-[#1e293b]">Projects</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-white">1+</p>
                <p className="text-lg text-[#1e293b]">Years Learning</p>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE  */}
          <div className='col-span-6 flex flex-col gap-6'>

            {/* Selected Card Display */}
            {selectedcard && (
              <div className='relative bg-gradient-to-br from-[#1e293b] to-[#0f172a] 
    p-6 rounded-2xl text-white shadow-xl border border-gray-700
    transition-all duration-300 hover:shadow-2xl'>

                {/* Top Section */}
                <div className='flex items-center gap-4 mb-3'>
                  <div className='bg-[#e24833]/20 p-3 rounded-xl'>
                    {(() => {
                      const Icon = selectedcard.icons;
                      return <Icon size={26} className="text-[#e24833]" />;
                    })()}
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold tracking-wide">
                      {selectedcard.skill}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {selectedcard.description}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-gray-700 my-4"></div>

                {/* Bottom Section */}
                <div className='flex justify-end'>
                  <a
                    href={selectedcard.link}
                    target='_blank'
                    className="relative px-4 py-2 rounded-lg text-sm font-medium 
          text-[#e24833] border border-[#e24833]
          overflow-hidden group transition-all duration-300">

                    <span className="absolute inset-0 bg-[#e24833] scale-x-0 
          origin-left transition-transform duration-300 group-hover:scale-x-100"></span>

                    <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                      Learn More →
                    </span>
                  </a>
                </div>
              </div>
            )}

            {/* Skill Slider */}
            <div className=' p-4 rounded-2xl border border-gray-800 shadow-inner'>
              <SkillCard skillcards={skillcards} showit={cardtoshow} />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About