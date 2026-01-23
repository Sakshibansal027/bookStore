// import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className="min-h-screen bg-linear-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-12 shadow-2xl border border-white/10">

        <h2 className="text-3xl md:text-4xl font-bold text-pink-500 text-center mb-8">
          Contact Us
        </h2>

        <div className="text-gray-300 space-y-6 text-center">

          <p className="text-lg">
            Have questions about our books or collections?  
            You can reach us directly using the details below 📚
          </p>

          <div>
            <p className="font-semibold text-pink-400">📧 Email</p>
            <p>support@bookstore.com</p>
            <a
              href="mailto:support@bookstore.com"
              className="inline-block mt-2 text-sm text-pink-300 underline"
            >
              Send Email
            </a>
          </div>

          <div>
            <p className="font-semibold text-pink-400">📞 Phone</p>
            <p>+91 98765 43210</p>
            <a
              href="tel:+919876543210"
              className="inline-block mt-2 text-sm text-pink-300 underline"
            >
              Call Now
            </a>
          </div>

          <div>
            <p className="font-semibold text-pink-400">📍 Address</p>
            <p>New Delhi, India</p>
          </div>

          <Link to="/">
            <button className="mt-6 bg-pink-500 hover:bg-pink-600 transition text-white py-2 px-6 rounded-lg font-semibold">
              Back to Home
            </button>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Contact
