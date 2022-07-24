import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { RiDeleteBin6Line } from "react-icons/ri";
import useAdmin from '../../hooks/useAdmin';
import auth from '../../firebase.init';
import Swal from 'sweetalert2';
import './AllNotice.css';

const AllNotice = ({ notice, refetch }) => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const [showMore, setShowMore] = useState(true);
    const { name, subject, _id } = notice;

    const deleteConfirm = (id) => {
        Swal.fire({
            title: `আপনি কি (${name}) delete করতে চান?`,
            text: "delete করলে আপনি এটি ফিরিয়ে আনতে পারবেন না!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                const url = `http://localhost:5000/notice/${id}`;
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
        <div className='px-12'>
            <div className="card bg-base-100 shadow-xl mb-3 content h-min">
                <div className="card-body">
                    <div className='flex items-center gap-5 justify-between'>
                        <h2 className="card-title">{name}</h2>
                        {admin && <span title='Delete' onClick={() => deleteConfirm(_id)} className=' font-bensen border-red-600 rounded-full border-2 p-1 cursor-pointer'><RiDeleteBin6Line /></span>}

                    </div>

                    <h5>
                        {showMore ? subject : subject.slice(0, 100)}
                        <span>{subject.length > 100 &&
                            <button className="text-purple-500 text-xs ml-1 font-semibold" onClick={() => setShowMore(!showMore)}>
                                {showMore ? "Show less" : "...Show more"}
                            </button>
                        }
                        </span>
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default AllNotice;