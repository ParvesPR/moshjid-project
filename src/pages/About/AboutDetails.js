import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import { RiDeleteBin6Line } from "react-icons/ri";
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const AboutDetails = ({ result, refetch }) => {
    const { _id, name, phone, committeeType, image } = result;
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
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
                const url = ` https://obscure-sierra-27359.herokuapp.com/committee/${id}`;
                console.log(url);
                fetch(url, {
                    method: 'DELETE'
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
        <div className='font-bensen'>
            <div className="content">
                <div className="content-overlay"></div>
                <img className="content-image w-[280px] mb-2 rounded-full border-[#FFA90F] border-8" src={image} alt="committee profile pic" />
                <div className="content-details fadeIn-bottom">
                    <h3 className="content-title">{name}</h3>
                    <h4 className="text-xl">{committeeType}</h4>
                    <p className="content-text">{phone}</p>
                </div>
            </div>
            {admin &&
                <div className='flex justify-center'>
                    <button title='Delete' onClick={() => deleteConfirm(_id)} className='btn btn-sm btn-warning btn-outline rounded-full'><RiDeleteBin6Line /></button>
                </div>
            }
        </div>
    );
};

export default AboutDetails;