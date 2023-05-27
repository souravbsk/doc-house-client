import React, { useContext, useState } from "react";
import brandLogo from "../../../assets/logo/header-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Headers = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  console.log(isOpen);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login")
        Swal.fire({
          position: "center",
          icon: "success",
          title: "LogOut Success",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="">
      <div className="navbar flex-col md:flex-row py-10 items-start md:items-center max-w-full md:w-10/12 mx-auto absolute z-50 text-white top-0 left-0 right-0">
        <div
          className="flex-1 w-full flex items-center justify-between
        "
        >
          <a className="btn btn-ghost normal-case text-xl">
            <img
              className="max-w-full object-fill w-32 md:w-60 h-8 md:h-16"
              src={brandLogo}
              alt=""
            />
          </a>
          <div className="block md:hidden">
            <button
              onClick={() => setOpen(!isOpen)}
              className="text-2xl font-semibold"
            >
              {isOpen ? (
                <RxCross1></RxCross1>
              ) : (
                <RxHamburgerMenu></RxHamburgerMenu>
              )}
            </button>
          </div>
        </div>
        <div className="flex-none ">
          <ul
            className={`menu absolute items-center md:static top-24 md:px-0 px-10 duration-300 backdrop-blur-3xl flex-col md:flex-row menu-horizontal  md:h-auto h-screen ${
              isOpen ? "left-0" : "-left-96"
            }`}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/appointment">Appointment</Link>
            </li>
            {user && (
              <li>
                <div className="avatar placeholder">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                    <span>{user?.displayName[0]}</span>
                  </div>
                </div>
              </li>
            )}
            <li>
              {user ? (
                <button
                  onClick={handleLogOut}
                  className="btn btn-outline btn-xl"
                >
                  Log Out
                </button>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Headers;
