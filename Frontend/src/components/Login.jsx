import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from "../context/AuthProvider";


function Login() {
    const navigate = useNavigate();
const [authUser, setAuthUser] = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password
        };
        try {
            const res = await axios.post(
                "https://book-store-coral-nine.vercel.app/user/login",
                userInfo
            );

            toast.success("Login Successful");
            localStorage.setItem("authUser", JSON.stringify(res.data.user));
            setAuthUser(res.data.user); 
            navigate("/course");
            document.getElementById("my_modal_3").close();

        } catch (error) {
            toast.error(error.response?.data?.message || "Login failed");
        }
    };

    return (
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <button
                        type="button"
                        className="btn btn-sm btn-circle btn-ghost outline-none absolute right-2 top-2"
                        onClick={() => document.getElementById("my_modal_3").close()}
                    >
                        ✕
                    </button>

                    <h3 className="font-bold text-xl text-pink-500">Login</h3>

                    <div className="pt-6">
                        <div className="text-gray-300">Email</div>
                        <input
                            type="email"
                            className="input outline-none w-full max-w-xs mt-2 mb-4"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <div className="text-pink-900">Email required</div>}

                        <div className="text-gray-300">Password</div>
                        <input
                            type="password"
                            className="input outline-none w-full max-w-xs mt-2 mb-4"
                            {...register("password", { required: true })}
                        />
                        {errors.password && <div className="text-pink-900">Password required</div>}

                        <div className="flex justify-around mt-4">
                            <button
                                type="submit"
                                className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-400"
                            >
                                Login
                            </button>

                            <p className="text-pink-300 mt-2">
                                Not registered?
                                <Link to="/signUp" className="underline text-pink-400 ml-1">
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </dialog>
    )
}

export default Login;
