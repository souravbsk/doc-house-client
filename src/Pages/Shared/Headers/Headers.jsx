import React, { useContext, useState } from "react";
import brandLogo from "../../../assets/logo/header-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Headers = ({header}) => {
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
    <div className={header && "bg-[#07332F]"}>
      <div className={`flex flex-col md:flex-row items-start md:items-center max-w-full px-3 md:px-32 mx-auto  z-50 text-white top-0 left-0 right-0 ${header ? "bg-[#07332F] static py-6" : "absolute py-8"}`}>
        <div
          className="flex-1 w-full flex items-center justify-between
        "
        >
          <a className="btn btn-ghost normal-case text-xl">
           {
            header ? <h2>Doc House</h2> : <img
            className="max-w-full object-fill w-32 md:w-60 h-8 md:h-16"
            src={brandLogo}
            alt=""
          />
           } 
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
            className={`menu absolute items-center md:static top-24 md:px-0 px-10 duration-300 md:backdrop-blur-0 backdrop-blur-3xl flex-col md:flex-row menu-horizontal  md:h-auto h-screen ${
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
                <Link to="/dashboard/my-appointment" className="avatar placeholder">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                    <span>{user?.displayName[0]}</span>
                  </div>
                </Link>
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
