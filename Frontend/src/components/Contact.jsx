import React from 'react'
import { Link } from 'react-router'

function Contact() {
    return (
        <div>

            <div className="min-h-screen bg-linear-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
                <div className="w-full max-w-4xl bg-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-12 shadow-2xl border border-white/10">

                    <h2 className="text-3xl md:text-4xl font-bold text-pink-500 text-center mb-8">
                        Contact Us
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">

                        {/* LEFT INFO */}
                        <div className="text-gray-300 space-y-4">
                            <p className="text-lg">
                                Have questions about our books or collections?
                                We'd love to hear from you 📚
                            </p>

                            <div>
                                <p className="font-semibold text-pink-400">📧 Email</p>
                                <p>support@bookstore.com</p>
                            </div>

                            <div>
                                <p className="font-semibold text-pink-400">📞 Phone</p>
                                <p>+91 98765 43210</p>
                            </div>

                            <div>
                                <p className="font-semibold text-pink-400">📍 Address</p>
                                <p>New Delhi, India</p>
                            </div>
                            <Link to="/">  <button className="mt-4 bg-pink-500 hover:bg-pink-600 transition text-white py-2 px-4 rounded-lg font-semibold">
                                Back to home
                            </button></Link>

                        </div>

                        {/* RIGHT FORM */}
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-2 rounded-lg bg-black/40 text-white border border-gray-600 focus:outline-none focus:border-pink-500"
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-2 rounded-lg bg-black/40 text-white border border-gray-600 focus:outline-none focus:border-pink-500"
                            />

                            <textarea
                                rows="4"
                                placeholder="Your Message"
                                className="w-full px-4 py-2 rounded-lg bg-black/40 text-white border border-gray-600 focus:outline-none focus:border-pink-500"
                            />

                            <button
                                type="submit"
                                className="w-full bg-pink-500 hover:bg-pink-600 transition text-white py-2 rounded-lg font-semibold"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default Contact
