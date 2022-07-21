/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import logo from '../../../assests/images/logo.png';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import './NavBar.css';
import CustomLink from '../CustomLink/CustomLink';
import { Link } from 'react-router-dom';

const NavBar = () => {

  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken')
  };

  const menuItems = <>
    <li><CustomLink to="/">হোম</CustomLink></li>
    <li><CustomLink to="/about">আমাদের সম্পর্কে</CustomLink></li>
    <li><CustomLink to="/blogs">ব্লগ</CustomLink></li>

    <li>{user && <>
      <CustomLink to="/notice">নোটিশ</CustomLink>
      <CustomLink to="/users">ইউজার</CustomLink>
      <CustomLink to="/dashboard">ড্যাশবোর্ড</CustomLink>
    </>
    }
    </li>

    <li>{user ? <button onClick={logout} className='btn btn-outline btn-primary'>লগ আউট</button> : <CustomLink to='/login' className='rounded-lg'>লগইন</CustomLink>}</li>
  </>
  return (
    <header className='w-3/4 mx-auto relative'>

      <nav className="navbar bg-[#c4c4c4ce] rounded-2xl navbar-font">
        <div className="navbar-start relative flex">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuItems}
            </ul>
          </div>
          <button className="btn btn-ghost normal-case text-xl">
            <Link to='/home'>
              <img src={logo} className='absolute ml-10 left-8 top-[-35px] w-[90px] h-[90px]' alt="" />
            </Link>
          </button>
        </div>

        <div className="navbar-end">
          <label title='Dashboard' for="my-drawer" class="btn btn-ghost  drawer-button d-block lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" checked /></svg>
          </label>
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