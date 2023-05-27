import React from "react";
import { Link } from "react-router-dom";
import footerBrand from "../../../assets/logo/footer.png";

const Footers = () => {
  return (
    <div className="st bg-[#F3F3F3]">
      <footer className="container">
        <div className="footer pt-8 md:pt-32 pb-10  text-base-content">
          <div className="md:justify-items-start justify-items-center">
            <Link>
              <img
                className="max-w-full w-40 md:w-56 h-10 md:h-14 object-fill"
                src={footerBrand}
                alt=""
              />
            </Link>
            <p className="my-4 md:text-start text-center">
              Lorem Ipsum is simply dummy text of
              <br /> the printing and typesetting industry. has been <br />{" "}
              since the printer took.
            </p>
            <button className="btn btn-outline hover:border-[#F7A582] hover:bg-[#F7A582] border-[#F7A582] text-[#F7A582]">
              Appointment
            </button>
          </div>
          <div>
            <span className=" text-xl text-black font-bold">Quick Links</span>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Service</a>
            <a className="link link-hover">Doctors</a>
            <a className="link link-hover">Departments</a>
            <a className="link link-hover">Online Payment</a>
            <a className="link link-hover">Contact Us</a>
            <a className="link link-hover">My Account</a>
          </div>
          <div>
            <span className="text-xl text-black font-bold">
              Doc House Services
            </span>
            <a className="link link-hover">Pediatric Clinic</a>
            <a className="link link-hover">Diagnosis Clinic</a>
            <a className="link link-hover">Cardiac Clinic</a>
            <a className="link link-hover">Laboratory Analysis</a>
            <a className="link link-hover">Gynecological Clinic</a>
            <a className="link link-hover">Personal Counseling</a>
            <a className="link link-hover">Dental Clinic</a>
          </div>
          <div>
            <span className="text-xl text-black font-bold">Working Hours</span>
            <ul className="space-y-2">
              <li className="text-left">Monday - 10 am to 7 pm</li>
              <li className="text-left">Tuesday - 10 am to 7 pm</li>
              <li className="text-left">Wednesday - 10 am to 7 pm</li>
              <li className="text-left">Thursday - 10 am to 7 pm</li>
              <li className="text-left">Friday - 10 am to 7 pm</li>
              <li className="text-left">Saturday - 10 am to 7 pm</li>
              <li className="text-left">Sunday - 10 am to 7 pm</li>
            </ul>
          </div>
        </div>

        <div className="divider"></div>
        <div className="py-12 text-center">
          <p>
            <small>
              Copyright © 2022 - All right reserved by Doc House Ltd
            </small>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footers;
