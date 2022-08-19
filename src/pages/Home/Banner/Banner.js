import banner1 from '../../../assests/images/banner1.jpg';
import banner2 from '../../../assests/images/banner2.jpg';
import banner3 from '../../../assests/images/banner3.jpg';
import banner4 from '../../../assests/images/banner4.jpg';
import kalema from '../../../assests/images/kalema.png';
import NavBar from '../../Shared/NavBar/NavBar';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Autoplay, Pagination } from "swiper";

const Banner = () => {
  return (
    <section>
      <div className='w-full absolute z-10 mt-10 md:mt-14 lg:mt-24'>
        <NavBar></NavBar>
      </div>

      <Swiper
        effect={"coverflow"}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="max-h-screen w-full mx-auto" src={banner1} alt="carousel" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="max-h-screen w-full mx-auto" src={banner2} alt="carousel" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="max-h-screen w-full mx-auto" src={banner3} alt="carousel" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="max-h-screen w-full mx-auto" src={banner4} alt='carousel' />
        </SwiperSlide>
        <SwiperSlide>
          <img className="max-h-screen w-full mx-auto" src={banner1} alt='carousel' />
        </SwiperSlide>
        <SwiperSlide>
          <img className="max-h-screen w-full mx-auto" src={banner2} alt='carousel' />
        </SwiperSlide>
        <SwiperSlide>
          <img className="max-h-screen w-full mx-auto" src={banner3} alt='carousel' />
        </SwiperSlide>
        <SwiperSlide>
          <img className="max-h-screen w-full mx-auto" src={banner1} alt='carousel' />
        </SwiperSlide>
        <SwiperSlide>
          <img className="max-h-screen w-full mx-auto" src={banner1} alt='carousel' />
        </SwiperSlide>
      </Swiper>
    </section >
  );
};

export default Banner;