import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { HiOutlineUser, HiOutlineUsers } from 'react-icons/hi2';

const DocPortal = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-3 gap-8 md:grid-cols-2 grid-cols-1'>
                <div className='bg-white px-8 rounded-lg py-8'>
                <div className='flex border-b-4 pb-8 border-b-[#ff0034] items-center gap-3'>
                    <p className='text-5xl rounded-md text-[#ff0034] inline-block px-5 py-4 bg-[#ffe5eb]'>
                    <HiOutlineUser></HiOutlineUser>
                    </p>
                    <h2 className='text-5xl text-[#6c6b6b] font-semibold'>168</h2>
                </div>
                <p className='text-2xl pt-4 text-[#6c6b6b] font-medium'>Doctor</p>
                </div>
                <div className='bg-white px-8 rounded-lg py-8'>
                <div className='flex border-b-4 pb-8 border-b-[#7bb13c] items-center gap-3'>
                    <p className='text-5xl rounded-md text-[#7bb13c] inline-block px-5 py-4 bg-[#f2f7eb]'>
                    <HiOutlineUsers></HiOutlineUsers>
                    </p>
                    <h2 className='text-5xl text-[#6c6b6b] font-semibold'>168</h2>
                </div>
                <p className='text-2xl pt-4 text-[#6c6b6b] font-medium'>Patients</p>
                </div>
                <div className='bg-white px-8 rounded-lg py-8'>
                <div className='flex border-b-4 pb-8 border-b-[#ffbc34] items-center gap-3'>
                    <p className='text-5xl rounded-md text-[#ffbc34] inline-block px-5 py-4 bg-[#fff8eb]'>
                    <AiOutlineUser></AiOutlineUser>
                    </p>
                    <h2 className='text-5xl text-[#6c6b6b] font-semibold'>168</h2>
                </div>
                <p className='text-2xl pt-4 text-[#6c6b6b] font-medium'>Appointment</p>
                </div>

            </div>
        </div>
    );
};

export default DocPortal;