import React from 'react'
import { Link } from 'react-router';
import { useForm } from "react-hook-form"

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        document.getElementById("my_modal_3").close();
    };
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost outline-none absolute right-2 top-2" onClick={() => document.getElementById("my_modal_3").close()}>✕</button>

                    </form>
                    <h3 className="font-bold text-xl text-pink-500">Login</h3>
                    <div className='pt-6'>
                        <div className='text-gray-300'>Email</div>
                        <input type="text" placeholder="Enter your email" className="input outline-none  w-full max-w-xs mt-2 mb-4" {...register("email", { required: true })} />
                        {errors.email && <div className='text-pink-900'>This field is required !</div>}
                        <div className='text-gray-300'>Password</div>
                        <input type="password" placeholder="Enter your password" className="input outline-none  w-full max-w-xs mt-2 mb-4" {...register("password", { required: true })} />
                        {errors.password && <div className='text-pink-900'>This field is required !</div>}
                        <br />
                        <div className='flex justify-around'>

                            <button className="bg-pink-500 text-white px-3 md:px-4 md:p-2 rounded-md hover:bg-pink-400 duration-300 cursor-pointer " onClick={handleSubmit(onSubmit)}>Login</button>
                            <p className='text-pink-300 mt-3 ml-50'>Not registered? <a className='underline text-pink-400 cursor-pointer hover:text-pink-500' href="/signUp">Sign up</a></p>
                        </div>

                    </div>
                    <div>

                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default Login
