import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay, Pagination } from "swiper";
import './SingleBanner.css';

const SingleBanner = ({ result }) => {
    const { image, secondImg, title, subTitle } = result;
    return (
        <div>
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
                    <div className='slider-wrapper'>
                        <img className="max-h-screen -z-0 w-full mx-auto" src={image} alt="carousel" />
                        <img className='secondImg' src={secondImg} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default SingleBanner;