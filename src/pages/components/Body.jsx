import React from 'react'
import image2 from '../../assets/hs2.png'


const Body = () => {

    return (
        <div  
        id='#'
        className="w-full mt-20 flex h-full items-center px-4">

            <div className="max-w-6xl w-full mx-auto flex flex-col-reverse md:flex-row items-center gap-10">

                {/* LEFT */}
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4">

                    <span className="text-lg md:text-xl font-medium text-yellow-400 tracking-wide">
                        Full Stack Developer
                    </span>

                    <h1 className="text-4xl md:text-6xl font-bold md:text-white leading-tight">
                        Hirendra <br /> Bhoi
                    </h1>

                    <p className="text-gray-300 max-w-md">
                        Building full-stack applications with seamless user experience and efficient backend systems.
                    </p>

                    
                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <a
                        // href='https://drive.google.com/uc?export=download&id=1Nd-X7e68fb926kurBqReUHh6j9OBTIu-'
                        href={`${window.location.origin}/resume.pdf`}
                        download={'hirendra_bhoi_resume.pdf'}
                            className="group relative overflow-hidden px-6 py-3 rounded-md text-lg font-medium 
          bg-white text-black border border-yellow-400 
          before:absolute before:top-0 before:left-0 before:h-full before:w-0 
          before:bg-yellow-400 before:z-0 
          before:transition-all before:duration-300 
          hover:before:w-full">

                            <span className="relative z-10 transition group-hover:text-white">
                                RESUME
                            </span>
                        </a>

                        
                        <a
                        href='#project'
                            className="group relative overflow-hidden px-6 py-3 rounded-md text-lg font-medium 
          bg-transparent text-yellow-400 border border-yellow-400 
          before:absolute before:top-0 before:left-0 before:h-full before:w-0 
          before:bg-yellow-400 before:z-0 
          before:transition-all before:duration-300 
          hover:before:w-full">

                            <span className="relative z-10 transition group-hover:text-white">
                                PROJECTS
                            </span>
                        </a>

                    </div>
                </div>

                {/* RIGHT */}
                <div className="flex-1 flex justify-center">

                    <div className="relative bg-white border rounded-md">

                        <img
                            src={image2}
                            alt="character"
                            className="relative w-70 md:w-96 object-contain"
                        />

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Body