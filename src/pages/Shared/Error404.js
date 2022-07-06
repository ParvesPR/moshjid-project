import React from 'react';
import notFound from '../../assests/images/404.gif';

const Error404 = () => {
    return (
        <div>
            <img src={notFound} alt="" />
        </div>
    );
};

export default Error404;