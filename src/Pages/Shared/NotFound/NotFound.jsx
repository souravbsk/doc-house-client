import React from "react";
import notFound from "../../../assets/NotFound/Group.png";
import { Link } from "react-router-dom";
import {FaArrowRight} from "react-icons/fa"
const NotFound = () => {
  return (
    <div className="container h-screen flex items-center justify-center">
      <div className="px-14">
        <h2 className="text-center text-2xl md:text-5xl font-bold">Sorry</h2>
        <p className="text-center text-gray-700 md:text-3xl font-medium">
          This page is not found.
        </p>
        <img className="max-w-full md:w-1/2 mx-auto" src={notFound} alt="" />
      <div className="text-center mt-5">
        <Link to="/">                    <button className='btn  bg-[#F7A582]'>Back to home</button>
      
</Link>
      </div>
      </div>
    </div>
  );
};

export default NotFound;
