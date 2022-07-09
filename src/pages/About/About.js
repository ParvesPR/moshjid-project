import React from 'react';
import NavBar from '../Shared/NavBar/NavBar';

const About = () => {
    return (
        <section>
            <div className='my-10'>
                <NavBar></NavBar>
            </div>
            <h2 className='text-5xl font-bold bg-slate-500'>About us</h2>
        </section>
    );
};

export default About;