import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useRef } from 'react';
import { FiChevronLeft, FiChevronRight, } from 'react-icons/fi';
import { Autoplay } from 'swiper/modules';

export default function ProjectSwiper({ projectcard }) {

    const swiperRef = useRef(null);

    return (
        <div className="relative w-full">

            {/* LEFT BUTTON */}
            <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="hidden md:block absolute left-2 top-1/2 -translate-y-1/2 z-10 
        bg-[#e24833] text-white px-3 py-3 rounded-full cursor-pointer">
                <FiChevronLeft />
            </button>

            {/* RIGHT BUTTON */}
            <button
                onClick={() => swiperRef.current?.slideNext()}
                className="hidden md:block absolute right-2 top-1/2 -translate-y-1/2 z-10 
        bg-[#e24833] text-white px-3 py-3 rounded-full cursor-pointer">
                <FiChevronRight />
            </button>

            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className="px-10"
                autoplay={{
                    delay: 2000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false
                }}
            >
                {/* cards to show */}
                {projectcard?.map((item, i) => {

                    const Skill = item.skills

                    return (
                       <SwiperSlide key={i}>
                            <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] 
  text-white rounded-2xl shadow-xl border border-gray-700 
  flex flex-col md:flex-row overflow-hidden">

                                {/* LEFT IMAGE */}
                                <div className='md:w-1/2 w-full'>
                                    <img
                                        src={item?.img}
                                        alt={item?.title}
                                        className='w-full h-full object-cover'
                                    />
                                </div>

                                {/* RIGHT CONTENT */}
                                <div className='md:w-1/2 w-full p-6 flex flex-col'>

                                    {/* TOP CONTENT */}
                                    <div>
                                        <h2 className='text-2xl md:text-3xl font-bold mb-2 '>
                                            {item?.title}
                                        </h2>
                                        <span className='w-[100px] absolute border-yellow-400 border'></span>

                                        <p className='text-gray-300 text-sm md:text-base leading-relaxed mb-4 mt-5'>
                                            {item?.desc}
                                        </p>

                                        {/* SKILLS */}
                                        <div className='flex flex-wrap gap-2 mb-4'>
                                            {Skill?.map((skill, i) => (
                                                <span
                                                    key={i}
                                                    className='border border-gray-600 px-3 py-1 rounded-md text-sm bg-[#020617]'
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* button */}
                                    <div className='mt-auto flex gap-4 justify-end'>

                                        <a
                                            href={item?.gitlink}
                                            target='_blank'
                                            className='relative px-4 py-2 border border-[#e24833] rounded-lg 
          text-[#e24833] overflow-hidden group flex justify-center items-center '>

                                            <span className='absolute inset-0 bg-[#e24833] scale-x-0 
          origin-left transition-transform duration-300 
          group-hover:scale-x-100'></span>

                                            <span className='relative group-hover:text-white text-xs font-semibold md:text-sm'>
                                                GitHub
                                            </span>
                                        </a>

                                        
                                        <a
                                            href={item?.hostlink}
                                            target='_blank'
                                            className='px-4 py-2 bg-[#e24833] text-white rounded-lg 
          hover:bg-[#c73a28] transition'>
                                            Live Demo →
                                        </a>

                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
                )}
            </Swiper>

        </div>
    )
}