/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assests/images/logo.png';

const NavBar = () => {
  const menuItems = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/parts">About Us</Link></li>
    <li><Link to="/business">Blog</Link></li>
    <li><Link to="/reviews">Notice</Link></li>
    <li><Link to="/blogs">Users</Link></li>
    <li><Link to="/login">Login</Link></li>
  </>
  return (
    <header className='w-3/4 mx-auto relative'>

      <nav className="navbar absolute z-10 mt-24 bg-[#c4c4c4ce] rounded-2xl">
        <div className="navbar-start relative flex">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img src={logo} className='absolute ml-10 left-8 top-[-35px] w-[90px] h-[90px]' alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {menuItems}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;