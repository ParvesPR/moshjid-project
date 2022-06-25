import React from 'react'
import underline from '../../../assests/images/underline.png';
import image1 from '../../../assests/images/image1.png';

const Committee = () => {
    return (
        <section className='mt-6'>
            <h2 className='text-center uppercase font-bold text-[#FFA90F] text-4xl'>Masjid Committee</h2>
            <div className='text-center block w-2/4 mx-auto'>
                <img src={underline} className='w-6/12 mx-auto' alt="" />
            </div>
        </section>
    );
};

export default Committee;