import React from 'react';
import headerLefPhoto from "../../../assets/Home/Banner/herader-pic.png"

const Banner = () => {
    return (
        <div className=' bg-[#07332F]  banner-bg'>
            <div className='container flex items-center justify-between pb-28 pt-52'>
                <div className='text-[#F3F3F3] space-y-6 flex-1'>
                    <h1 className='text-7xl font-semibold'>Your Best Medical Help Center</h1>
                    <p className='text-xl font-light'>Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s stardard.</p>
                    <button className='btn bg-[#F7A582]'>All Service</button>
                </div>
                <div className='flex-1 bg-no-repeat bg-top banner-cirele-bg'>
                    <img className='max-w-full w-[633px] h-[454px]' src={headerLefPhoto} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;