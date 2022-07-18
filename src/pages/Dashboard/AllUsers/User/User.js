import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { RiDeleteBin6Line } from "react-icons/ri";

const User = ({ index, user, setManageUser }) => {
    const [users] = useAuthState(auth)
    const { email } = user;
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{users.displayName}</td>
                <td>{email}</td>
                <td>
                    <button className='btn btn-xs'>Make Admin</button>
                </td>
                <td>

                    <label onClick={() => setManageUser(user)} htmlFor="delete-user-modal" className="cursor-pointer modal-button"><RiDeleteBin6Line /></label>

                </td>
            </tr>
        </>

    );
};

export default User;