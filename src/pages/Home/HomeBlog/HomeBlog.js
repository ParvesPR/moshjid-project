import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const HomeBlog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='flex sm:flex-col lg:flex-row p-12'>
            {
                blogs.map(blog => <Blog
                    key={blog._id}
                    blog={blog}
                ></Blog>)
            }
        </div>
    );
};

export default HomeBlog;