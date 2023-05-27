import React from 'react';


const SectionTitle = ({sectionTitle}) => {
    const {title,pera} = sectionTitle;
    return (
        <div className='max-w-ful md:mb-12 mb-4 text-center md:w-10/12 mx-auto '>
            <h2 className='text-2xl md:text-4xl font-semibold'>{title}</h2>
            <p className='md:mt-5 mt-4 text-sm md:text-base text-[#3B3A3A]'>{pera}</p>
        </div>
    );
};

export default SectionTitle;