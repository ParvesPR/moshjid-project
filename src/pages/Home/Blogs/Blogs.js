import React from 'react';
import comingSoon from '../../../assests/images/coming-soon.jpg'

const Blogs = () => {
    return (
        <section>

            <div>
                <img src={comingSoon} alt="" />
            </div>
            <button className='text-white bg-[#FFA90F] font-bold'>See More</button>
        </section>
    );
};

export default Blogs;