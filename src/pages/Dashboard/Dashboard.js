/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import NavBar from '../Shared/NavBar/NavBar';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <section className='bg-base-200'>
            <div className='pt-7 pb-2'>
                <NavBar></NavBar>
            </div>
            <div class="drawer drawer-mobile bg-base-300">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <h1 className='uppercase font-bold text-3xl text-center text-purple-500 py-10'>Welcome To Dashboard</h1>
                    <Outlet />

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="custom-font side-bg menu px-4 py-10 overflow-y-auto w-80 text-white">
                        <NavLink className='mt-2 font-normal text-white btn btn-outline' to="/dashboard/users">আমার প্রোফাইল</NavLink>
                        <NavLink className='mt-2 font-normal text-white btn btn-outline' to="/dashboard/users">সকল ব্যবহারকারী</NavLink>
                        <NavLink className='mt-2 font-normal text-white btn btn-outline' to="/dashboard/addNotice">নতুন নোটিশ যোগ করুন</NavLink>
                        <NavLink className='mt-2 font-normal text-white btn btn-outline' to="/dashboard/users">নতুন ব্লগ যোগ করুন</NavLink>
                        <NavLink className='mt-2 font-normal text-white btn btn-outline' to="/dashboard/users">নামাজের সময়সূচী পরিবর্তন করুন</NavLink>
                    </ul>

                </div>
            </div>
        </section>
    );
};

export default Dashboard;