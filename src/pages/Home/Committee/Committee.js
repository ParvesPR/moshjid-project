import React from 'react'
import underline from '../../../assests/images/underline.png';
import image1 from '../../../assests/images/image1.png';
import './Committee.css';

const Committee = () => {
    return (
        <section className='mt-6 committee-section py-3'>
            <h2 className='text-center uppercase font-bold text-[#FFA90F] text-4xl'>Masjid Committee</h2>
            <div className='text-center block w-2/4 mx-auto mb-9'>
                <img src={underline} className='sm:max-w-sm lg:w-1/2 mx-auto' alt="" />
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 justify-items-center'>
                <img src={image1} className='w-[280px] mb-2 rounded-full border-[#FFA90F] border-8' alt="" />
                <img src={image1} className='w-[280px] mb-2 rounded-full border-[#FFA90F] border-8' alt="" />
                <img src={image1} className='w-[280px] mb-2 rounded-full border-[#FFA90F] border-8' alt="" />
                <img src={image1} className='w-[280px] rounded-full border-[#FFA90F] border-8' alt="" />
            </div>
        </section>
    );
};

export default Committee;