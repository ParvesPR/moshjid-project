import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Swal from 'sweetalert2';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin.js';

const Blog = ({ blogs, refetch }) => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    const { title, image, subject, _id } = blogs;

    const deleteConfirm = (id) => {
        Swal.fire({
            title: `আপনি কি এই (${title}) ব্লগটি delete করতে চান?`,
            text: "delete করলে আপনি এটি ফিরিয়ে আনতে পারবেন না!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                const url = `http://localhost:5000/blogs/${id}`;
                console.log(url);
                fetch(url, {
                    method: 'DELETE',
                    headers: {
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('data', data);
                        refetch();
                    })
            }
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'সফলভাবে delete করা হয়েছে!',
                    'success'
                )
            }
        })
    }
    return (
        <div className="card bg-base-100 shadow-xl col-start-3 col-span-4 lg:w-3/4 mx-auto">
            <figure>
                <img className='w-2/4 mx-auto' src={image} alt="card-img" />
            </figure>
            <div className="card-body">
                <h2 className="font-bold text-2xl">{title}</h2>
                <p className='text-slate-500'>{subject}</p>
            </div>
            {admin &&
                <div className="card-actions justify-center p-5">
                    <button onClick={() => deleteConfirm(_id)} className="ease-in duration-300 btn btn-outline btn-xs sm:btn-sm md:btn-sm flex items-center gap-2 hover:bg-red-800">
                        <RiDeleteBin6Line />
                        Delete</button>
                </div>}
        </div>
    );
};

export default Blog;