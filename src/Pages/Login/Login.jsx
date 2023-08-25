import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import Swal from "sweetalert2";

const Login = () => {
const {loginUser} = useContext(AuthContext)
const [error,setError] = useState('')
const [disableValue,setDisableValue] = useState(false)
const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault()
    setError('')
    const form =e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email,password)
    .then(result => {
      const user =result.user;
      navigate("/")
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Login Success. Welcome to doc house',
        showConfirmButton: false,
        timer: 1500
      })
    })
    .catch(err => {

    })
    console.log(email,password);
  }


  // useEffect(() => {
  //   loadCaptchaEnginge(6);
  // }, []);

// const handleCaptcha = e => {
//   const captchaValue = e.target.value;
//   if (validateCaptcha(captchaValue)) {
//     setDisableValue(false)
// }

// else {
//   setDisableValue(true)
// }
// }
  return (
    <div className="card mx-5 md:mx-24 border rounded-md">
      <div className="card-body">
        <h1 className="text-2xl text-center font-bold">Sign in to Doc House</h1>
        <form onSubmit={handleLogin} className="handleLogin">
          <div className="form-control">
            <label className="label">
              <span className=" text-black text-sm font-semibold">
                Email Address
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your username or address"
              className="input bg-base-300 text-sm"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-black text-sm font-semibold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input bg-base-300 text-sm"
            />
            <label className="label justify-end">
              <Link
                to="#"
                className="label-text-alt text-[#F7A582] link link-hover"
              >
                Forgot password
              </Link>
            </label>
          </div>
          {/* <div className="">
            <label className="label">
            <LoadCanvasTemplate />
            </label>
            <input
              type="text"
              onBlur={handleCaptcha}
              placeholder="Enter your password"
              className="input bg-base-300 text-sm"
            />
          </div> */}
          <div className="form-control">
            <button disabled={disableValue} className="btn mt-5 border-0 bg-[#F7A582]">Login</button>
          </div>
        </form>
        <p className="text-center mt-5 text-gray-600 text-sm ">
          Please register at first. Go to{" "}
          <Link to="/register" className="text-[#F7A582] font-semibold">SIGN UP</Link>
        </p>
        <p className="text-center text-sm text-red-600">{error}</p>
      </div>
    </div>
  );
};

export default Login;
