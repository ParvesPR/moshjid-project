import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../assests/images/404.gif';

const Error404 = () => {
    return (
        <div>
            <h3 className='text-center font-bold text-3xl text-red-600 py-7'>Page not found</h3>
            <Link className='font-bold text-blue-600 p-10 underline' to="/home">Back To home</Link>
            <img className='flex justify-center lg:max-w-2/4 mx-auto' src={notFound} alt="" />
        </div>
    );
};

export default Error404;