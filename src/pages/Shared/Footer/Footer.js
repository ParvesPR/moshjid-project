import React from 'react';
import './Footer.css';
import { GoLocation } from 'react-icons/go';
import { FiPhoneCall } from 'react-icons/fi';
import underline from '../../../assests/images/underline.png'

const Footer = () => {
    return (
        <footer className='footer-section flex justify-around py-10 mt-7'>
            <div className='text-white'>
                <span className='flex gap-2 items-center'><GoLocation></GoLocation> Station Road, Bogura</span>
                <span className='flex gap-2 items-center'> <FiPhoneCall></FiPhoneCall> 01789445555</span>
            </div>
            <div className='footer-image'>
                <img src={underline} className='w-40 images' alt="" />
            </div>
            <div className='text-white'>
                <h3>For Donation</h3>
                <span className='flex gap-2 items-center'><GoLocation></GoLocation> Station Road, Bogura</span>
                <span className='flex gap-2 items-center'> <FiPhoneCall></FiPhoneCall> 01789445555</span>
            </div>
        </footer>
    );
};

export default Footer;