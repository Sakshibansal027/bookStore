import React from 'react'
import banner from "../../public/banner.png"

function Banner() {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex md:flex-row flex-col'>
                <div className='w-full md:w-1/2 order-2 md:order-1'>
                    <div className='space-y-6'>

                        <h1 className='font-bold text-4xl pt-30'> Hello, welcome here to learn something <span className='text-pink-400'>new everyday!!!</span> </h1>
                        <p className="mt-6 text-gray-400 text-base max-w-2xl leading-relaxed">
                            Discover a world where stories inspire and knowledge empowers. Our bookstore
                            offers a curated collection across genres to help you explore new ideas,
                            sharpen your skills, and grow smarter every day.
                        </p>

                        <div className="flex flex-col gap-4">
                            <label className="input validator hover:border-none focus-within:border-none focus-within:ring-0 md:w-xl">
                                <svg
                                    className="h-[1em] opacity-50"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </g>
                                </svg>
                                <input type="email" placeholder="Enter your email to login" required />
                            </label>

                            <div className="validator-hint hidden">Enter valid email address</div>

                            <a className="btn btn-secondary w-fit relative overflow-hidden px-7 py-4 rounded-xl font-semibold text-white sm:mb-4
                                                 bg-linear-to-r from-pink-400 via-pink-500 to-purple-500
                                                hover:scale-105 hover:shadow-xl transition-all duration-300 " href="/course">
                                Get Started →
                            </a>
                        </div>


                    </div>

                </div>


                <div className="w-full md:w-1/2 flex justify-center items-center mt- md:mt-0 order-1">
                    <img
                        src={banner}
                        alt="Books banner"
                        className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain"
                    />
                </div>

            </div>
        </>
    )
}

export default Banner
