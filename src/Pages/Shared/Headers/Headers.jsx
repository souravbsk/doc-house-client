import React from "react";
import brandLogo from "../../../assets/logo/header-logo.png"
import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <div className="">
      <div className="navbar py-10 max-w-full w-10/12 mx-auto absolute z-50 text-white top-0 left-0 right-0">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl"><img className="max-w-full object-cover w-60 h-16" src={brandLogo} alt="" /></a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/appointment">Appointment</Link>
              <Link to="/login">Login</Link>
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Headers;
