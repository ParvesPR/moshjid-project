import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from 'sweetalert2';

const User = ({ index, user, refetch }) => {
    const { email, role } = user;
    const [users] = useAuthState(auth);

    const handleMakeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Failed to make an admin!',
                    })
                }
                return res.json();
            })
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: 'Good Job!',
                        text: 'Successfully made an admin',
                    })
                }
            })
    }
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{users.displayName}</td>
                <td>{email}</td>
                <td>
                    {role !== 'admin' && <button onClick={handleMakeAdmin} className='btn btn-xs'>Make Admin</button>}
                    {role === 'admin' && <button className='btn btn-xs'>Admin</button>}
                    
                </td>
                <td>
                    <label htmlFor="delete-user-modal" className="cursor-pointer modal-button"><RiDeleteBin6Line /></label>
                </td>
            </tr>
        </>

    );
};

export default User;