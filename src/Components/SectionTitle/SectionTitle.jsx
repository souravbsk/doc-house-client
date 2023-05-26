import React from 'react';


const SectionTitle = ({sectionTitle}) => {
    const {title,pera} = sectionTitle;
    return (
        <div className='max-w-ful mb-12 text-center w-10/12 mx-auto '>
            <h2 className='text-4xl font-semibold'>{title}</h2>
            <p className='mt-5 text-[#3B3A3A]'>{pera}</p>
        </div>
    );
};

export default SectionTitle;