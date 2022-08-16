import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';

const SinglePrayer = ({ result, setManageTime, refetch }) => {
    const { name, currentTime } = result;
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className="lg:w-96 sm:max-w-sm mx-auto bg-[#e9e9e9] rounded-lg shadow-lg px-5">
            <div className="px-3 text-xl md:text-2xl lg:text-3xl font-bold grid grid-cols-3 justify-center border-[#c2c2c2a5] border-b-[1px] py-2">
                <span>{name}</span>
                <span className='font-normal'>{currentTime ? currentTime?.azan : "-----"}</span>
                <span className='font-normal'>{currentTime ? currentTime?.ekamot : "-----"} </span>
                {admin &&
                    <label onClick={() => setManageTime(result)} htmlFor="prayerModal" className="cursor-pointer bg-[#FFA90F] py-[1px] text-center text-xs rounded-lg text-white">Edit</label>

                }
            </div>

        </div>
    );
};

export default SinglePrayer;