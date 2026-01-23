import React from 'react'
import toast from 'react-hot-toast';
import { useAuth } from "../context/AuthProvider";

function Logout() {
    const [authUser, setAuthUser] = useAuth();
    const handleLogout = () => {
try {
        setAuthUser(null);
        localStorage.removeItem("authUser");
        toast.success("Logged out successfully");
        window.location.reload();
} catch (error) {
    toast.error("Error : ",error.message);
}
  };  
  return (
    <div>
      <button className="bg-pink-600 text-white p-2 rounded-md hover:bg-pink-500 duration-300 cursor-pointer " onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
