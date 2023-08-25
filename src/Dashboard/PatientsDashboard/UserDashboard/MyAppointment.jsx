import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";
import Cookies from "js-cookie";
import { AuthContext } from "../../../Providers/AuthProvider";
const MyAppointment = () => {
  const { user } = useContext(AuthContext);
  const [slots, setSlots] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5000/slot-booking/?email=${user?.email}`)
      .then((data) => {
        setLoading(false);
        setSlots(data.data);
      });
  }, [user, refresh]);

  const handleSlotRemove = (slot) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be delete this slot!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(
          `http://localhost:5000/slot-booking/${slot._id}/?email=${user?.email}`)
          .then((data) => {
            if (data?.data?.deletedCount > 0) {
              setRefresh(!refresh);
              Swal.fire("Deleted!", "Your slot has been deleted.", "success");
            }
          });
      }
    });
  };

  useEffect(() => {
    // Get the JWT token from the cookie
    const jwtToken = Cookies.get('jwt');

    // You can now use the JWT token as needed (e.g., send it in the Authorization header of API requests)
    console.log('JWT Token:', jwtToken);

    // Other logic...
  }, []);


  return (
    <section>
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-xl md:text-2xl font-medium">My Appointment</h2>
        <button className="btn bg-transparent text-black hover:bg-transparent">
          {moment().format("MMM D, YYYY")}
        </button>
      </div>
     
      <div className="mt-6">
        {loading ? "Loading..." : ""}
       
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>NAME</th>
                <th>SERVICE</th>
                <th>TIME</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {slots?.map((slot, i) => (
                <tr key={slot._id}>
                  <th>{i + 1}</th>
                  <td>{slot?.fullName}</td>
                  <td>{slot?.service}</td>
                  <td>{slot?.appointmentSlotTime}</td>
                  <td>
                    <button
                      onClick={() => handleSlotRemove(slot)}
                      className="btn btn-ghost btn-md bg-red-400 text-white"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MyAppointment;
