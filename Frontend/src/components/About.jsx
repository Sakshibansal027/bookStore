import React from "react";
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="min-h-screen bg-linear-to-br from-black via-gray-900 to-black px-4 py-20">
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold text-pink-500 text-center mb-10">
          About BookStore
        </h2>

        {/* INTRO */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-10 shadow-xl border border-white/10 text-gray-300">
          <p className="text-lg leading-relaxed">
            <span className="text-pink-400 font-semibold">BookStore</span> is an
            online platform built for book lovers who want easy access to both
            free and premium collections. Our goal is to make learning,
            entertainment, and knowledge available in one place.
          </p>

          <p className="mt-4 leading-relaxed">
            Whether you're a student, a professional, or a casual reader,
            BookStore helps you explore books across multiple categories with a
            smooth and user-friendly experience.
          </p>
        </div>

        {/* MISSION + VISION */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">

          {/* Mission */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/10 text-gray-300">
            <h3 className="text-2xl font-semibold text-pink-400 mb-3">
              Our Mission
            </h3>
            <p>
              To provide a simple, affordable, and accessible digital bookstore
              where users can discover, learn, and grow through quality books.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/10 text-gray-300">
            <h3 className="text-2xl font-semibold text-pink-400 mb-3">
              Our Vision
            </h3>
            <p>
              To become a trusted online reading platform that encourages
              knowledge sharing and builds a strong reading community.
            </p>
          </div>
        </div>

        {/* WHY US */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-10 shadow-xl border border-white/10 text-gray-300 mt-10">
          <h3 className="text-2xl font-semibold text-pink-400 mb-4">
            Why Choose Us?
          </h3>

          <ul className="space-y-2 list-disc list-inside">
            <li>Wide range of free & premium books</li>
            <li>Clean and modern UI</li>
            <li>Fast and responsive experience</li>
            <li>Student-friendly platform</li>
            <li>Secure and reliable access</li>
          </ul>
        </div>
        <Link to="/">
          <button className="mt-8 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg shadow-lg transition duration-300">
            Back to Home
          </button></Link>
      </div>
    </div>
  );
}

export default About;

