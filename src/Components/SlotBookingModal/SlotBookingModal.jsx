import moment from "moment";
import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const SlotBookingModal = ({ bookSlot,appointmentDate }) => {
    const date = moment(appointmentDate).format("MMM D, YYYY");
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSlotBooked = (e) => {
        e.preventDefault()

        if(user){
          const form = e.target
          const slotDate = form.slotDate.value;
          const appointmentSlotTime = form.appointmentSlotTime.value;
          const fullName = form.fullName.value;
          const phone = form.phone.value;
          const email = form.email.value;
  
          const newBookedSlot = {
              slotDate,appointmentSlotTime,fullName,email,phone, serviceId: bookSlot?.id, service: bookSlot?.serviceName,
          }
          fetch('http://localhost:5000/slot-booking',{
              method:"POST",
              headers:{
                  'content-type':"application/json"
              },
              body:JSON.stringify(newBookedSlot)
          })
          .then(res => res.json())
          .then(data => {
             if(data.insertedId){
              Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Slot Successfully Booked',
                  showConfirmButton: false,
                  timer: 1500
                })
                form.reset()
             }
          })
        }
        else{
          Swal.fire({
            title: 'Login First',
            text: "You won't go to login page",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/login")
              Swal.fire(
                'redirect to login page!',
                'login page',
                'success'
              )
            }
          })
        }

        

        console.log(newBookedSlot);
    }
  return (
    <>
      <input required type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label
            htmlFor="my_modal_6"
            className="btn btn-sm text-white btn-circle bg-[#07332F] btn-ghost absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">{bookSlot?.serviceName}</h3>
          <form onSubmit={handleSlotBooked} className="mt-6">
            <div className="form-control mb-4 w-full">
              <input required
              readOnly
              value={date || ""}
                className=" input border-gray-200  border-gray  focus:bg-[#E6E6E6] w-full rounded-lg"
                name="slotDate"
                type="text"
              />
            </div>
            <div className="form-control mb-4 w-full">
              <input required
              readOnly
              defaultValue={bookSlot?.appointmentSlotTime}
                className=" input border-gray-200  border-gray  focus:bg-[#E6E6E6] w-full rounded-lg"
                name="appointmentSlotTime"
                type="text"
              />
            </div>
           
            <div className="form-control mb-4 w-full">
              <input required
              defaultValue={user?.displayName}
                name="fullName"
                className=" input border-gray-200  border-gray  focus:bg-[#E6E6E6] w-full rounded-lg"
                type="text"
                readOnly
              />
            </div>
            <div className="form-control mb-4 w-full">
              <input required
                name="phone"
                placeholder="Phone Number"
                className=" input border-gray-200  border-gray  focus:bg-[#E6E6E6] w-full rounded-lg"
                type="phone"
         
              />
            </div>
            <div className="form-control mb-4 w-full">
              <input required
              defaultValue={user?.email}
              readOnly
                name="email"
                className=" input border-gray-200  border-gray  focus:bg-[#E6E6E6] w-full rounded-lg"
                type="email"
              />
            </div>
            <div>
                <button htmlFor="my_modal_6" className="w-full text-white font-medium bg-[#07332F] rounded-lg py-3">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SlotBookingModal;
