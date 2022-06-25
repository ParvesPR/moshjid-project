import React from 'react';
import banner1 from '../../../assests/images/banner1.jpg';
import banner2 from '../../../assests/images/banner2.jpg';
import banner3 from '../../../assests/images/banner3.jpg';
import banner4 from '../../../assests/images/banner4.jpg';
import kalema from '../../../assests/images/kalema.png';
import NavBar from '../../Shared/NavBar/NavBar';

const Banner = () => {
  return (
    <section>
      <NavBar></NavBar>
      <div className="relative z-0 carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner1} className="w-full h-screen" alt='' />
          <div className='absolute flex justify-center mt-[200px] transform translate-x-2/4'>
            <img className='' src={kalema} alt="" />
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle bg-[#c4c4c46c]">❮</a>
            <a href="#slide2" className="btn btn-circle bg-[#c4c4c46c]">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={banner2} className="w-full h-screen" alt='' />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle bg-[#c4c4c46c]">❮</a>
            <a href="#slide3" className="btn btn-circle bg-[#c4c4c46c]">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={banner3} className="w-full h-screen" alt='' />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle bg-[#c4c4c46c]">❮</a>
            <a href="#slide4" className="btn btn-circle bg-[#c4c4c46c]">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={banner4} className="w-full h-screen" alt='' />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle bg-[#c4c4c46c]">❮</a>
            <a href="#slide1" className="btn btn-circle bg-[#c4c4c46c]">❯</a>
          </div>
        </div>
      </div>
    </section>
  );
}; 

export default Banner;