import React from 'react';
import './AboutDetails.css';

const AboutDetails = ({ result }) => {
    const { _id, name, phone, committeType, email, image } = result;
    return (
        <div className="content">
            <div className="content-overlay"></div>
            <img className="content-image w-[280px] mb-2 rounded-full border-[#FFA90F] border-8" src={image} alt="committee profile pic" />
            <div className="content-details fadeIn-bottom">
                <h3 className="content-title">{name}</h3>
                <p className="content-text">{phone}</p>
            </div>
        </div>
    );
};

export default AboutDetails;