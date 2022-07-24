import React from 'react';

const Blog = ({ blogs, refetch }) => {
    const { title, image, subject } = blogs;
    return (
        <div className="card w-96 glass">
            <figure>
                <img className='w-3/4' src={image} alt="card-img" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{subject}</p>
            </div>
        </div>
    );
};

export default Blog;