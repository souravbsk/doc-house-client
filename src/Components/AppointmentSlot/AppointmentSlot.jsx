import React from 'react';
import img from '../../assets/slotIcon/slot1.png'
const AppointmentSlot = ({slots,handleSlotSelect}) => {
    return (
        <div className='st'>
             <h2 className="text-center mb-12 mt-3 text-2xl md:text-4xl font-bold">
             {  slots?.serviceName &&  `${"Available slots for " + slots?.serviceName}` }
            </h2>
            <div className=' grid lg:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1'> 
              {
                slots?.slots?.map((slot,i) => <div key={i} className=' p-8 md:p-[60px] shadow-md rounded-lg'>
                <img className='w-16 md:w-32 mx-auto h-16 md:h-32 rounded-full' src={slot?.serviceIcon} alt="" />
                <div className='text-center mt-7'>
                    <h2 className='font-bold mb-3 md:text-2xl'>{slot?.slotName}</h2>
                    <p className='font-semibold mb-10 text-sm uppercase'>{slot?.appointmentSlotTime}</p>
                    <label htmlFor="my_modal_6" onClick={() => handleSlotSelect({...slot, serviceName: slots?.serviceName,id: slots?._id})} className='uppercase text-white text-sm font-bold px-6 py-4 rounded-lg hover:bg-[#f7a582c2] bg-[#F7A582]'>
                        BOOK APPOINTMENT
                    </label>
                </div>
            </div>)
              }
            </div>
        </div>
    );
};

export default AppointmentSlot;