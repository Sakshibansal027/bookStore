import React, { useEffect, useState } from "react";
import Login from "./Login";
import { Link } from "react-router";
import Logout from "./Logout.jsx";
import { useAuth } from "../context/AuthProvider.jsx";
function Navbar({ theme, setTheme }) {

  const [authUser, setAuthUser] = useAuth();

  const [sticky, setSticky] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true)
      }
      else {
        setSticky(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const navItems = (
    <>
      <li>
        <Link to="/" className="relative text-pink-500 text-xl after:block
              after:h-0.5 after:w-0 after:bg-pink-500
              after:transition-all after:duration-300
              hover:after:w-full" >
          Home
        </Link>

      </li>

      <li>
        <Link to="/course" className="relative text-pink-500 text-xl after:block
              after:h-0.5 after:w-0 after:bg-pink-500
              after:transition-all after:duration-300
              hover:after:w-full" >Collection</Link>
      </li>
      <li>
        <Link to="/contact" className="relative text-pink-500 text-xl after:block
              after:h-0.5 after:w-0 after:bg-pink-500
              after:transition-all after:duration-300
              hover:after:w-full" >Contact</Link>
      </li>
      <li>
        <Link to="/about" className="relative text-pink-500 text-xl after:block
              after:h-0.5 after:w-0 after:bg-pink-500
              after:transition-all after:duration-300
              hover:after:w-full" >About</Link>
      </li>
    </>
  );

  return (
    <div className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50
  ${sticky ? "sticky-navbar shadow-md" : ""}
  bg-white dark:bg-gray-950 text-black dark:text-white transition-all duration-300 ease-in-out
`}>

      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <Link to='/' className=" text-3xl cursor-pointer  md:text-5xl font-extrabold 
               bg-linear-to-r from-pink-500 via-pink-400 to-pink-300
               bg-clip-text text-transparent  hover:shadow-sm duration-300 transition-shadow" >bookStore</Link>
        </div>
        <div className="navbar-end space-x-3">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-bold">{navItems}</ul>
          </div>

          <div className="hidden md:block">
            <label className="input hover:border-none focus-within:border-none focus-within:ring-0">
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
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search"
                placeholder="Search"
                style={{ width: "150px" }}
                className="outline-none focus:outline-none focus:ring-0 border-none" />
            </label>
          </div>


         
          {authUser ? <Logout /> : <a className="bg-pink-600 text-white p-2 rounded-md hover:bg-pink-500 duration-300 cursor-pointer" onClick={() => document.getElementById('my_modal_3').showModal()}>
            Login
          </a>}


          <Login />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
