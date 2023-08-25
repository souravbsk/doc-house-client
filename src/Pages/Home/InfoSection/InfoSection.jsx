import React from 'react';
import {FaRegClock} from "react-icons/fa"
import {FiMapPin,FiPhoneOutgoing} from "react-icons/fi"

const InfoSection = () => {
    return (
        <section className='st'>
            <div className='container grid md:grid-cols-3 gap-6 text-white'>
                <div className='bg-[#07332F] flex gap-5 justify-center p-5 md:p-7 md:p-[50px]  hover:bg-[#F7A582] duration-300 rounded-lg'>
                    <p className='text-3xl md:text-5xl'><FaRegClock></FaRegClock></p>
                    <div>
                        <h4 className='text-2xl font-semibold'>Opening Hours</h4>
                        <p className='text-sm md:text-base font-light mt-2 md:mt-4'>Open 9.00 am to 5.00pm <br /> Everyday</p>
                    </div>
                </div>
                <div className='bg-[#07332F] flex gap-5 justify-center p-5 md:p-7 md:p-[50px]  hover:bg-[#F7A582] duration-300 rounded-lg'>
                    <p className='text-3xl md:text-5xl'><FiMapPin></FiMapPin></p>
                    <div>
                        <h4 className='text-2xl font-semibold'>Opening Hours</h4>
                        <p className='text-sm md:text-base font-light mt-2 md:mt-4'>Open 9.00 am to 5.00pm <br /> Everyday</p>
                    </div>
                </div>
                <div className='bg-[#07332F] flex gap-5 justify-center p-5 md:p-7 md:p-[50px]  hover:bg-[#F7A582] duration-300 rounded-lg'>
                    <p className='text-3xl md:text-5xl'><FiPhoneOutgoing></FiPhoneOutgoing></p>
                    <div>
                        <h4 className='text-2xl font-semibold'>Opening Hours</h4>
                        <p className='text-sm md:text-base font-light mt-2 md:mt-4'>Open 9.00 am to 5.00pm <br /> Everyday</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;