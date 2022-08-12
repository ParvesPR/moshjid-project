import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const PrayerModal = ({ manageTime, setManageTime, refetch }) => {
    const { name, _id } = manageTime;
    const [user] = useAuthState(auth);
    console.log(user)
    const handleTime = () => {
        console.log('clicked')
    }
    return (
        <div>
            <input type="checkbox" id="prayerModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label title='close' for="prayerModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-2xl text-center font-bold text-purple-700 uppercase">Hello {user.displayName}</h3>
                    <p className="py-4 font-semibold text-lg text-center text-slate-700">আপনি <span className='text-red-600 text-xl font-bold'>{name}</span> সময় পরিবর্তনের জন্য নির্বাচন করেছেন</p>
                    <button className='w-full btn btn-sm' onClick={() => handleTime(_id)}>Save Change</button>
                </div>
            </div>
        </div>
    );
};

export default PrayerModal;