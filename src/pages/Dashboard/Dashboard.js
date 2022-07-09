/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Outlet } from "react-router-dom";
import NavBar from '../Shared/NavBar/NavBar';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <section>
            <div className='my-10'>
                <NavBar></NavBar>
            </div>
            <div class="drawer drawer-mobile bg-slate-400">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    <Outlet />
                    <h1 className='uppercase font-bold text-3xl text-center'>Welcome To Dashboard</h1>
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                   
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="side-bg menu p-4 overflow-y-auto w-80 text-white">
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
        </section>
    );
};

export default Dashboard;