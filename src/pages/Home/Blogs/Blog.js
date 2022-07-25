import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { RiDeleteBin6Line } from 'react-icons/ri';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin.js';

const Blog = ({ blogs, refetch }) => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    const { title, image, subject } = blogs;
    return (
        <div className="card lg:max-w-lg glass">
            <figure>
                <img className='w-3/4 p-2' src={image} alt="card-img" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{subject}</p>
            </div>
            {admin &&
                <div class="card-actions justify-center p-5">
                    <div class="ease-in duration-300 btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-md flex items-center gap-2 hover:bg-red-800">
                        <RiDeleteBin6Line />
                        Delete</div>
                </div>}
        </div>
    );
};

export default Blog;