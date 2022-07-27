import React from 'react';
const Blog = ({ blog }) => {
    const { title, image, subject } = blog;
    return (
        <div className='blog-child'>
            <div className="card lg:max-w-lg">
                <figure>
                    <img className='w-3/4' src={image} alt="card-img" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{subject}</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;