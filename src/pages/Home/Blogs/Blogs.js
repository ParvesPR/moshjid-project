import React from 'react';
import comingSoon from '../../../assests/images/coming-soon.jpg'
import NavBar from '../../Shared/NavBar/NavBar';

const Blogs = () => {
    return (
        <section>
            <div className='my-10'>
                <NavBar></NavBar>
            </div>
            <div>
                <img src={comingSoon} alt="" />
            </div>
        </section>
    );
};

export default Blogs;