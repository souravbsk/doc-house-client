import React from 'react';
import {FaRegClock} from "react-icons/fa"
import {FiMapPin,FiPhoneOutgoing} from "react-icons/fi"

const InfoSection = () => {
    return (
        <section className='st'>
            <div className='container grid grid-cols-3 gap-6 text-white'>
                <div className='bg-[#07332F] flex gap-5 justify-center p-[50px] hover:bg-[#F7A582] duration-300 rounded-lg'>
                    <p className='text-5xl'><FaRegClock></FaRegClock></p>
                    <div>
                        <h4 className='text-2xl font-semibold'>Opening Hours</h4>
                        <p className='font-light mt-4'>Open 9.00 am to 5.00pm <br /> Everyday</p>
                    </div>
                </div>
                <div className='bg-[#07332F] flex gap-5 justify-center p-[50px] hover:bg-[#F7A582] duration-300 rounded-lg'>
                    <p className='text-5xl'><FiMapPin></FiMapPin></p>
                    <div>
                        <h4 className='text-2xl font-semibold'>Opening Hours</h4>
                        <p className='font-light mt-4'>Open 9.00 am to 5.00pm <br /> Everyday</p>
                    </div>
                </div>
                <div className='bg-[#07332F] flex gap-5 justify-center p-[50px] hover:bg-[#F7A582] duration-300 rounded-lg'>
                    <p className='text-5xl'><FiPhoneOutgoing></FiPhoneOutgoing></p>
                    <div>
                        <h4 className='text-2xl font-semibold'>Opening Hours</h4>
                        <p className='font-light mt-4'>Open 9.00 am to 5.00pm <br /> Everyday</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;