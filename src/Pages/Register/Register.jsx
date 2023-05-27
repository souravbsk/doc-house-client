import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const {createUser,userName} = useContext(AuthContext)
    const [error,setError] = useState("")
    const navigate =useNavigate()

    const handleCreateUser = e => {
        e.preventDefault()
        setError("e")
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        if(password.length < 6){
            setError("password minimum 6 character must")
            return
        }

        createUser(email,password)
        .then(result => {
            const user = result.user;
            userName(user,name)
            .then(() => {
                navigate("/")
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'You are Successfully Register',
                    showConfirmButton: false,
                    timer: 1500
                  })
            })
            .catch(err => {
                setError(err.message)
            })

        })
        .catch(err => {
            setError(err.message)
        })

       
    }


  return (
    <div className="card mx-5 md:mx-24 border rounded-md">
    <div className="card-body">
        <h1 className="text-xl md:text-2xl text-center   font-bold">Sign in to Doc House</h1>
        <form onSubmit={handleCreateUser}>
          <div className="form-control">
            <label className="label">
              <span className=" text-black text-sm font-semibold">
              Name
              </span>
            </label>
            <input required
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input bg-base-300 text-sm"
            />
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className=" text-black text-sm font-semibold">
              Email
              </span>
            </label>
            <input required
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input bg-base-300 text-sm"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-black text-sm font-semibold">Password</span>
            </label>
            <input required
            name="password"
              type="password"
              placeholder="Enter your password"
              className="input bg-base-300 text-sm"
            />
          
          </div>
          <div className="form-control">
            <input required type="submit" className="btn border-0 mt-6 bg-[#F7A582]"/>
          </div>
        </form>
        <p className="text-center mt-5 text-gray-600 text-sm ">
        Already registered? Go to{" "}
          <Link to="/login" className="text-[#F7A582] font-semibold">SIGN IN</Link>
        </p>
        <p className="text-red-600 text-sm text-center">{error}</p>
      </div>
    </div>
  );
};

export default Register;
