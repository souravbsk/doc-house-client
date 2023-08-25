import React, { useEffect, useState } from "react";
import chair1 from "../../assets/appointment/chair1.png";
import AppointmentCalender from "../../Components/AppointmentCalender/AppointmentCalender";
import icon1 from "../../assets/serviceicon/icon1.png";
import icon2 from "../../assets/serviceicon/icon2.png";
import icon3 from "../../assets/serviceicon/icon3.png";
import icon4 from "../../assets/serviceicon/icon4.png";
import icon5 from "../../assets/serviceicon/icon5.png";
import icon6 from "../../assets/serviceicon/icon6.png";
import moment from "moment/moment";
import AppointmentSlot from "../../Components/AppointmentSlot/AppointmentSlot";
import SlotBookingModal from "../../Components/SlotBookingModal/SlotBookingModal";
const Appointment = () => {
  const [appointmentDate, setAppointmentDate] = useState(new Date());
  const [services, setServices] = useState([]);
  const [slots,setSlots] = useState([])
  const [bookSlot,setBookSlot] = useState({})
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const handleServiceSlot = (id) => {
    fetch(`http://localhost:5000/services/${id}`)
    .then(res => res.json())
    .then(data => setSlots(data))
  }
  const handleSlotSelect = (slot) => {
   setBookSlot(slot)
  }
  console.log(bookSlot);
  return (
    <div>
      <div className="bg-[#07332F]">
        <div className="viewDocBg text-white pt-40 md:pt-56 pb-12 md:pb-36 md:mx-20">
          <div className="md:px-20 md:text-left text-center">
            <p className="text-sm font-light mb-3">Home/Appointment</p>
            <h3 className="text-3xl md:text-5xl font-bold">Appointment</h3>
          </div>
        </div>
      </div>
      <div className="appointmentBg py-16 md:py-32">
        <div className="container flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          <div className="flex-1 flex items-center justify-center">
            <div className="bg-white inline-block rounded-2xl shadow-lg ">
              <AppointmentCalender
                setAppointmentDate={setAppointmentDate}
              ></AppointmentCalender>
            </div>
          </div>
          <div className="flex-1">
            <img src={chair1} alt="" />
          </div>
        </div>
       
      </div>
      <div className="container">
          <div>
            <p className="text-[#F7A582] font-normal text-center  md:text-xl">
              Available Services on{" "}
              {moment(new Date(appointmentDate)).format("MMM D, YYYY")}
            </p>
            <h2 className="text-center mt-3 text-2xl md:text-4xl font-bold">
              Please select a service.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {services?.map((service) => (
              <div key={service._id} onClick={() => handleServiceSlot(service?._id)} className="flex p-6 flex-col md:flex-row bg-white rounded-lg shadow-md cursor-pointer items-center gap-6">
                <div className="bg-[#FF41551A] inline-block p-3 md:p-5 rounded-md">
                  <img className="w-8 md:w-16 h-8 md:h-16" src={service?.serviceIcon} alt="" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold ">{service?.serviceName}</h2>
              </div>
            ))}

          </div>
          <>
            <AppointmentSlot handleSlotSelect={handleSlotSelect} slots={slots}></AppointmentSlot>
          </>
          <SlotBookingModal appointmentDate={appointmentDate} bookSlot={bookSlot}></SlotBookingModal>
        </div>
    </div>
  );
};

export default Appointment;
