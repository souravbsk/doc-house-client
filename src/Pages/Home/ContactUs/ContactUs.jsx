import React from "react";
import { FiMapPin } from "react-icons/fi";
import { HiOutlinePhoneArrowUpRight } from "react-icons/hi2";

const ContactUs = () => {
  return (
    <section className="st">
      <div className="container bg-[#07332F] rounded-lg">
        <div className=" ">
          <div className="hero-content p-[100px] flex flex-col md:flex-row">
            <div className="text-center text-white lg:text-left">
              <h1 className="text-4xl font-bold">Contact With Us</h1>
              <p className="py-6 text-sm text-gray-300 font-thin">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inve ntore veritatis et quasi.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm  text-gray-300 gap-4">
                  <HiOutlinePhoneArrowUpRight></HiOutlinePhoneArrowUpRight>{" "}
                  <span>+88 01750 14 14 14</span>
                </li>
                <li className="flex items-center text-sm text-gray-300 gap-4">
                  <FiMapPin></FiMapPin>{" "}
                  <span>Dhanmondi, Dhaka, Bangladesh</span>
                </li>
              </ul>
            </div>
            <div className="card w-full ">
              <div className="card-body">
                <div className="flex gap-5 items-center justify-between mb-6">
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Name"
                      className="input input-bordered text-white bg-[#133D39]"
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Email"
                      className="input input-bordered text-white bg-[#133D39]"
                    />
                  </div>
                </div>
                <div className="flex gap-5 items-center justify-between mb-6">
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Mobile Number"
                      className="input input-bordered text-white bg-[#133D39]"
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Doctor Name"
                      className="input input-bordered text-white bg-[#133D39]"
                    />
                  </div>
                </div>
                <div className="flex gap-5 items-center justify-between mb-6">
                  <div className="form-control w-full">
                    <input
                      type="date"
                      placeholder="Date"
                      className="input input-bordered w-full text-white bg-[#133D39]"
                    />
                  </div>
                  <div className="form-control w-full">
                    <select className="select select-bordered text-white bg-[#133D39] w-full max-w-xs">
                      <option value="one">Time</option>
                      <option value="two">Time</option>
                    </select>
                  </div>
                </div>
                <div className="form-control ">
                  <button className="btn bg-[#F7A582]">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
