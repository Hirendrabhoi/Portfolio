import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useRef } from 'react';
import { FiChevronLeft, FiChevronRight,  } from 'react-icons/fi';
import { Autoplay } from 'swiper/modules';

export default function SkillCard({ skillcards,showit }) {

  const swiperRef = useRef(null);

  return (
    <div className="relative w-full">

      {/* LEFT BUTTON */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 
        bg-[#e24833] text-white px-3 py-3 rounded-full">
        <FiChevronLeft/>
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 
        bg-[#e24833] text-white px-3 py-3 rounded-full">
       <FiChevronRight/>
      </button>
       
      <Swiper
      modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          370:{
            slidesPerView:3
          },
          640:{
            slidesPerView:4
          }
        }}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="px-10"
        autoplay={{
          delay:2000,
          pauseOnMouseEnter:true,
          disableOnInteraction:false
        }}
      >
        {skillcards.map((card, i) => {
          const Icon = card?.icons

          return (
          <SwiperSlide key={i}>
            <div 
            onClick={()=>showit(card?.id)}
            className="bg-gray-800 text-white rounded-lg flex py-3 justify-center">
              <Icon size={40}/>
            </div>
          </SwiperSlide>
        )}
      )}
      </Swiper>

    </div>
  )
}