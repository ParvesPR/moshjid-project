import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const User = ({ index, user }) => {
    const [users] = useAuthState(auth)
    const { email } = user;
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{users.displayName}</td>
                <td>{email}</td>
            </tr>
        </>

    );
};

export default User;