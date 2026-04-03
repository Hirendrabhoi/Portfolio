import React from 'react'
import { FaCode, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const social = [
    {
        icon: FaTwitter,
        link: ''
    },
    {
        icon: FaGithub,
        link: 'https://github.com/Hirendrabhoi'
    },
    {
        icon: FaLinkedin,
        link: ''
    }
]

const Header = () => {
    return (
        <div className='border-4 border-[#e24833] rounded-xl px-4 py-2 max-w-7xl m-auto
flex items-center md:flex-row md:items-center md:justify-between justify-around gap-4 sticky top-2 z-50 bg-[#FE5944]'>

            {/* LEFT */}
            <div className='  md:gap-3 md:flex md:items-center '>

                {/* Logo Block */}
                <div className='relative flex items-center'>
                    <span className='w-8 h-12 bg-gray-200 rounded-l-lg'></span>

                    <a
                        href='#'
                        className='absolute -left-2 top-1/2 -translate-y-1/2 
      bg-[#e24833] text-white w-12 h-12 rounded-md 
      flex items-center justify-center text-lg font-bold shadow-md'>
                        <FaCode size={25} />
                    </a>
                </div>

                {/* Name */}
                <a 
                href='#'
                className='text-[#fe5944] bg-white px-3 py-1 rounded-md hidden md:block'>
                    <p className='text-sm md:text-base font-semibold leading-tight'>
                        HIRENDRA <br /> BHOI
                    </p>
                </a>

            </div>

            {/* RIGHT */}
            <nav className='flex flex-col md:flex-row items-center gap-3 md:gap-6'>

                {/* Links */}
                <div className=' md:flex gap-4 text-white font-semibold text-sm md:text-lg flex gap-x-3'>
                    <a href='#about' className='cursor-pointer hover:text-yellow-400 transition'>
                        ABOUT
                    </a>
                    <a
                        href='#contact'
                        className='cursor-pointer hover:text-yellow-400 transition'>
                        CONTACT
                    </a>
                </div>

                {/* social icons */}
                <div className='md:flex md:gap-3 hidden'>
                    {social.map((item, i) => {
                        const Icon = item.icon
                        return (
                            <a
                                href={item.link}
                                target='blank'
                                key={i}
                                className='bg-[#e24833] p-3 rounded-full 
          hover:ring-4 hover:ring-yellow-400 
          transition-all duration-200 flex items-center justify-center'>
                                <Icon size={20} color='white' />
                            </a>
                        )
                    }
                    )}
                </div>

            </nav>

        </div>
    )
}

export default Header