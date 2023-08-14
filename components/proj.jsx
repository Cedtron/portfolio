import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function Proj() {

  const [isHovered, setIsHovered] = useState(false);
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 600;
  return (
   <div>

<Swiper
        effect={'coverflow'}
       
        centeredSlides={true}
        slidesPerView={2}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 420,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="project-card">
        <Image
      // loader={myLoader}
       src={isMobile ? '/images/projects/excell2.png' : '/images/projects/excell.png'}
      alt="Picture of the cedo"  
      width={800}
      height={420}
     onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    />
    <div className={`project-details ${isHovered ? 'visible' : ''}`}>
   Proudly designed and developed the official website for ExcelSolutions Uganda Ltd, 
    an import and export company facilitating seamless global trade.
   </div>
    <h3>Excelsolution LTD</h3>
        </div>
        </SwiperSlide>


        <SwiperSlide>
            <div className="project-card">
        <Image
      // loader={myLoader}
       src={isMobile ? '/images/projects/jesus2.png' : '/images/projects/jesus.png'}
      alt="Picture of the cedo"  
      width={800}
      height={420}
     onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    />
   <div className={`project-details ${isHovered ? 'visible' : ''}`}>I crafted and brought to life the JTM Church website,
    complete with an engaging online presence for their child charity organization,
    fostering a meaningful digital platform for their philanthropic initiatives.</div>
    <h3>Jesus the Messiah</h3>
        </div>
        </SwiperSlide>


        <SwiperSlide>
            <div className="project-card">
        <Image
      // loader={myLoader}
    
       src={isMobile ? '/images/projects/trecabb2.png' : '/images/projects/trecabb.png'}
      alt="Picture of the cedo"  
      width={800}
      height={420}
     onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    />
   <div className={`project-details ${isHovered ? 'visible' : ''}`}>
   Trecabb Environment Protection, effectively translating their commitment to environmental conservation
    into an impactful website that spreads awareness and encourages positive action.
   </div>
    <h3>Trecabb</h3>
        </div>
        </SwiperSlide>


        <SwiperSlide>
            <div className="project-card">
        <Image
      // loader={myLoader}

       src={isMobile ? '/images/projects/gold2.png' : '/images/projects/gold.png'}
      alt="Picture of the cedo"  
      width={800}
      height={420}
     onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    />
   <div className={`project-details ${isHovered ? 'visible' : ''}`}>I played a pivotal role in designing and developing the Gateway Minerals website,
    contributing to their online visibility as a key player in the mining industry</div>
   <h3>Gateway minerals</h3>
        </div>
        </SwiperSlide>


       
      </Swiper>
        
    </div>
  )
}
