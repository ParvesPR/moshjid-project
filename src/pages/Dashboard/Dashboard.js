/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from "react-router-dom";
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import NavBar from '../Shared/NavBar/NavBar';
import './Dashboard.css';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <section className='bg-base-200'>
            <div className='pt-7 pb-2'>
                <NavBar></NavBar>
            </div>
            <div className="drawer drawer-mobile bg-base-300">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h1 className='uppercase font-bold text-2xl lg:text-3xl text-center text-purple-500 py-10'>Welcome To Dashboard</h1>
                    <Outlet />

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="custom-font side-bg menu px-4 py-10 overflow-y-auto w-80 text-white">
                        <NavLink className='mt-2 font-normal text-white btn btn-outline' to="/dashboard/users">আমার প্রোফাইল</NavLink>
                        {admin && <>
                            <NavLink className='mt-2 font-normal text-white btn btn-outline' to="/dashboard/allUsers">সকল ইউজারস</NavLink>
                            <NavLink className='mt-2 font-normal text-white btn btn-outline' to="/dashboard/addNotice">নতুন নোটিশ যোগ করুন</NavLink>
                            <NavLink className='mt-2 font-normal text-white btn btn-outline' to="/dashboard/addBlog">নতুন ব্লগ যোগ করুন</NavLink>
                            <NavLink className='mt-2 font-normal text-white btn btn-outline' to="/dashboard/addCommittee">নতুন কমিটি যোগ করুন</NavLink>
                            <NavLink className='mt-2 font-normal text-white btn btn-outline' to="/dashboard/changeTime">নামাজের সময়সূচী পরিবর্তন করুন</NavLink> </>
                        }

                    </ul>

                </div>
            </div>
        </section>
    );
};

export default Dashboard;