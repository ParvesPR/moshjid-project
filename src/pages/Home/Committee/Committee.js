/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import underline from '../../../assests/images/underline.png';
import image1 from '../../../assests/images/image1.png';
import './Committee.css';

const Committee = () => {
    return (
        <section className='mt-6 committee-section py-3 px-12'>
            <h2 className='text-center uppercase font-bold text-[#FFA90F] text-4xl'>Masjid Committee</h2>
            <div className='text-center block w-2/4 mx-auto mb-9'>
                <img src={underline} className='sm:max-w-sm lg:w-1/2 mx-auto' alt="" />
            </div>
            <div class="container">
                <div class="content">
                    <a href="https://unsplash.com/photos/HkTMcmlMOUQ" alt="" />
                    <div class="content-overlay"></div>
                    <img class="content-image sm:w-96 w-[280px] mb-2 rounded-full border-[#FFA90F] border-8" src={image1} />
                    <div class="content-details fadeIn-bottom">
                        <h3 class="content-title">This is a title</h3>
                        <p class="content-text">This is a short description</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Committee;