/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import logo from '../../../assests/images/logo.png';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const NavBar = () => {

  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth)
};

  const menuItems = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/parts">About Us</NavLink></li>
    <li><NavLink to="/business">Blog</NavLink></li>
    <li><NavLink to="/reviews">Notice</NavLink></li>
    <li><NavLink to="/blogs">Users</NavLink></li>
    {/* <li><Link to="/login">Login</Link></li> */}
    {
      user &&  <li><NavLink to="/dashboard">Dashboard</NavLink></li>
    }

    <li>{user ? <button onClick={logout} className='btn btn-ghost'> Sign Out</button> : <NavLink to='/login' className='rounded-lg'>Login</NavLink>}</li>
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