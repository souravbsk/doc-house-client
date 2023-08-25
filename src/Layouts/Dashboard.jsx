import React from "react";
import Headers from "../Pages/Shared/Headers/Headers";
import { Link, Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const Dashboard = () => {
  const [isSideBarShow, setSideBarShow] = useState(true);
  const handleSideBarShow = () => {
    setSideBarShow(!isSideBarShow);
  };
  console.log("slide", isSideBarShow);
  return (
    <main>
      <Headers header={true}></Headers>

      <div className="flex h-screen">
        <div
          className={`bg-white h-full w-8/12 z-50 lg:w-3/12 duration-300 md:static absolute ${
            isSideBarShow ? "-left-[450px]" : "left-0"
          }`}
        >
          <div className="text-right px-5 py-5">
            <button
              onClick={() => setSideBarShow(true)}
              className="text-2xl md:hidden block"
            >
              <AiFillCloseCircle></AiFillCloseCircle>
            </button>
          </div>
          <ul className="flex flex-col px-6 md:px-12 gap-8">
            <li>
              <Link className="py-3 font-semibold" to="/">
                My Appointment
              </Link>
            </li>
            <li>
              <Link className="py-3 font-semibold" to="/">
                About
              </Link>
            </li>
            <li>
              <Link className="py-3 font-semibold" to="/">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full bg-[#F1F5F9]">
          <div className="block md:hidden px-2 py-2">
            <button
              onClick={handleSideBarShow}
              className="text-xl px-2 py-2 btn"
            >
              <FaBars></FaBars>
            </button>
          </div>
          <div className="w-full px-2 md:px-14 py-7">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
