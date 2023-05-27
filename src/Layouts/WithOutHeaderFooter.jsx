import React from 'react';
import { Outlet } from 'react-router-dom';
import loginImg  from "../assets/Login/login-img.png"

const WithOutHeaderFooter = () => {
    return (
        <div className='flex flex-col gap-8 md:flex-row items-center justify-between'>
            <div className=' md:w-1/2 login-bg px-14 pt-32 pb-12 md:p-24 md:h-screen bg-[#07332F]'>
                <img className='max-w-full w-[270px] md:w-[471px] h-[270px] md:h-[471px]' src={loginImg} alt="" />
            </div>
           <div className='md:w-1/2'>
           <Outlet></Outlet>
           </div>
        </div>
    );
};

export default WithOutHeaderFooter;