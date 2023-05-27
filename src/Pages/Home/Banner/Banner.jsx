import React from 'react';
import headerLefPhoto from "../../../assets/Home/Banner/herader-pic.png"

const Banner = () => {
    return (
        <div className=' bg-[#07332F]  banner-bg'>
            <div className='container flex flex-col md:flex-row gap-12 items-center justify-between pb-12 md:pb-28  pt-36 md:pt-52'>
                <div className='text-[#F3F3F3] text-center md:text-start space-y-3 md:space-y-6 flex-1'>
                    <h1 className='text-3xl md:text-7xl font-medium md:font-semibold'>Your Best Medical Help Center</h1>
                    <p className='text-sm md:text-xl font-light'>Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s stardard.</p>
                    <button className='btn bg-[#F7A582]'>All Service</button>
                </div>
                <div className='flex-1 bg-no-repeat bg-top md:banner-cirele-bg'>
                    <img className='max-w-full w-80  md:w-[633px] h-60 md:h-[454px]' src={headerLefPhoto} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;