import React, { useState } from "react";
import loginapi from "../config/Api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const Login = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try 
  {
   
   const res = await loginapi.post("/auth/login",form) 
     toast.success(res.data.message);

    navigate("/user-dashboard")
  } catch (error) {
    console.log(error.response?.data || error.message);
  }
};


  return (
    <>
      <div className="bg-blue-600 h-screen flex items-center justify-center overflow-hidden">
        <form
          onSubmit={handleSubmit}
          className="shadow-2xl gap-4 bg-white container w-90 p-6 rounded-2xl h-80"
        >
          <div className="flex items-center justify-center">
            <h3 className="font-bold text-2xl">Login</h3>
          </div>

          <div className="mt-4">
            <div>Email</div>
            <input
              type="email"
              name="email"
              className="w-full border focus:outline-none  focus:border-blue-400 py-2 px-3 rounded mt-2"
              value={form.email}
              onChange={handleChange}
              placeholder=" Enter your Email"
              required
            />

            <div className="mt-4">Password</div>
            <input
              type="password"
              name="password"
              className="w-full border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 py-2 px-3 rounded mt-2"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter Your PassWord"
              required
            />
          </div>

          <div className="flex justify-center items-center gap-3 mt-6">
            <button
              type="submit"
              className="bg-blue-600 py-2 px-6 hover:bg-blue-950 rounded cursor-pointer text-white"
            >
              Login
            </button>

            <button
              type="button"
              className="bg-gray-600 py-2 px-6 hover:bg-gray-800 rounded cursor-pointer text-white
              transition duration-300 transform hover:scale-105
              
              "
            >
              SignUp
            </button>
          </div>
        </form>
      </div>

      
    </>
  );
};

export default Login;


