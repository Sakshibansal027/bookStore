import React from 'react'
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useNavigate,useLocation } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from "../context/AuthProvider";


function Signup() {
  const location=useLocation();
  const navigate = useNavigate();
  const from=location.state?.from?.pathname || "/";
  const [authUser, setAuthUser] = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password
    };
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/user/signup`, userInfo)
      if (res.data) {
        toast.success("Signup Successful");
        setAuthUser(res.data.user);
        localStorage.setItem("authUser", JSON.stringify(res.data.user));
        setTimeout(() => {
          navigate(from,{ replace: true });
        }, 100);

      }

    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed !!!");
    }

  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black via-gray-900 to-black">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/10">

        <h2 className="text-3xl font-bold text-pink-500 mb-6 text-center">
          Sign Up
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <Link to="/">
            <button type="button" className="btn btn-sm btn-circle btn-ghost outline-none absolute right-2 top-2">✕</button>
          </Link>
          <div>
            <label className="text-sm text-gray-300">Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-black/40 text-white border border-gray-600 focus:outline-none focus:border-pink-500"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && <div className='text-pink-900'>This field is required !</div>}
          </div>

          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-black/40 text-white border border-gray-600 focus:outline-none focus:border-pink-500"
              {...register("email", { required: true })}
            />
            {errors.email && <div className='text-pink-900'>This field is required !</div>}
          </div>

          <div>
            <label className="text-sm text-gray-300">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-black/40 text-white border border-gray-600 focus:outline-none focus:border-pink-500"
              {...register("password", { required: true })}
            />
            {errors.password && <div className='text-pink-900'>This field is required !</div>}
          </div>
          <button type="submit" className="w-full mt-4 bg-pink-500 hover:bg-pink-600 transition text-white py-2 rounded-lg font-semibold" >
            Signup
          </button>

          <p className="text-center text-sm text-gray-400 mt-4">
            Have Account?
            <Link to="/"> <span className="text-pink-400 cursor-pointer hover:underline ml-1">
              Login
            </span></Link>



          </p>
        </form>

      </div>
    </div>

  )
}
export default Signup