import React from "react";
import "./App.css";
import Home from './home/Home.jsx'
import Courses from "./courses/Courses.jsx";
import { Routes, Route } from 'react-router-dom';
import Signup from "./components/Signup.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
function App() {
  return (
    <div className="dark:bg-gray-950 dark:text-white  min-h-screen" >
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/course" element={<Courses />}></Route>
        <Route path="/signUp" element={<Signup />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>



  );
}

export default App;
