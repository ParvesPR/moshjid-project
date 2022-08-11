import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiFillEdit } from "react-icons/ai";
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';

const SinglePrayer = ({ result, refetch }) => {
    const { name, azan, ekamot } = result;
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    let azanTime;
    if (azan !== ' ') {
        azanTime = <p className='font-normal'>{azan}</p>;
    }
    else {
        azanTime = '-----'
    }
    let ekamotTime
    if (ekamot !== ' ') {
        ekamotTime = <p className='font-normal'>{ekamot}</p>;
    }
    else {
        ekamotTime = '-----'
    }

    return (
        <div className="lg:w-96 sm:max-w-sm mx-auto bg-[#e9e9e9] rounded-lg shadow-lg px-5">
            <div className="px-3 text-xl md:text-2xl lg:text-3xl font-bold grid grid-cols-3 justify-center border-[#c2c2c2a5] border-b-[1px] py-2">
                <p>{name}</p>
                <p className='font-normal'>{azanTime}</p>
                <p className='font-normal'>{ekamotTime} </p>
                {admin &&
                    <label htmlFor="prayerModal" class="btn btn-xs modal-button">edit</label>
                }

            </div>

        </div>
    );
};

export default SinglePrayer;