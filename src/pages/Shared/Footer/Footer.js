import React from 'react';
import './Footer.css';
import { GoLocation } from 'react-icons/go';
import { FiPhoneCall } from 'react-icons/fi';
import underlineFooter from '../../../assests/images/underline-footer.png'
import facebook from '../../../assests/images/facebook.png';
import mail from '../../../assests/images/mail.png';
import twitter from '../../../assests/images/twitter.png'
import insta from '../../../assests/images/insta.png';

const Footer = () => {
    return (
        <footer className='footer-section mt-7'>
            <div className='text-white text-2xl lg:text-3xl sm:flex justify-center items-center gap-10 pt-24 py-10 px-[107px]'>
                <div className='mb-7'>
                    <span className='flex mb-1 lg:mb-5 gap-2 items-center'><GoLocation></GoLocation>স্টেশন রোড, বগুড়া সদর, বগুড়া-৫৮০০ </span>
                    <span className='flex gap-2 items-center'> <FiPhoneCall></FiPhoneCall>+৮৮০১৭৪৫৩৩৩৬২৪, +৮৮০১৫১৬৭৪৭৩৭৭ </span>
                </div>
                <div>
                    <img src={underlineFooter} className='h-44 hidden lg:block' alt="" />
                </div>
                <div>
                    <h3 className='mb-1 lg:mb-5'>মুক্ত হস্তে দান করুন</h3>
                    <span className='flex gap-2 mb-1 items-center'><GoLocation></GoLocation> +৮৮০১৭৪৫৩৩৩৬২৪, (বিকাশ, নগদ, রকেট) </span>
                    <span className='flex gap-2 items-center'> <FiPhoneCall></FiPhoneCall> +৮৮০১৫১৬৭৪৭৩৭৭</span>
                </div>
            </div>
            <div className='flex justify-center items-center gap-8 pb-3'>
               <img className='cursor-pointer' src={facebook} alt="" /> 
               <img className='cursor-pointer' src={mail} alt="" /> 
               <img className='cursor-pointer' src={twitter} alt="" /> 
               <img className='cursor-pointer' src={insta} alt="" /> 
            </div>
            <hr />
            <div>
                <p className='text-center text-white text-xl copyright py-6'>&copy; Copyright Bogura Central Mashjid </p>
            </div>
        </footer>
    );
};

export default Footer;