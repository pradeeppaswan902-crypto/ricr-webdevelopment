import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import contactapi from "../config/Api.jsx";
const Contact = () => {
  const [formdata, setFormData] = useState({
    fullName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    city: "",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandale = async (e) => {
    e.preventDefault();

    console.log(formdata);

    setFormData({
      fullName: "",
      lastName: "",
      email: " ",
      mobileNumber: "",
      city: "",
    });

    try {
      const res = await contactapi.post("/contactapi/contact", formdata);
      console.log(res.data);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center bg-gray-100">
        <form
          onSubmit={submitHandale}
          className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl p-8 space-y-5"
        >
          <div className="flex items-center gap-4">
            <label className="w-40 font-bold">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter Your Name"
              className="flex-1 rounded-xl p-3 border border-gray-300"
              value={formdata.fullName}
              onChange={HandleChange}
            />
          </div>

          <div className="flex items-center gap-4">
            <label className="w-40 font-bold">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter Your Last Name"
              className="flex-1 rounded-xl p-3 border border-gray-300"
              value={formdata.lastName}
              onChange={HandleChange}
            />
          </div>

          <div className="flex items-center gap-4">
            <label className="w-40 font-bold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="flex-1 rounded-xl p-3 border border-gray-300"
              value={formdata.email}
              onChange={HandleChange}
            />
          </div>

          <div className="flex items-center gap-4">
            <label className="w-40 font-bold">Mobile Number</label>
            <input
              type="text"
              name="mobileNumber"
              placeholder="Enter Your Mobile Number"
              className="flex-1 rounded-xl p-3 border border-gray-300"
              value={formdata.mobileNumber}
              onChange={HandleChange}
            />
          </div>
          <div className="flex items-center gap-4">
            <label className="w-40 font-bold">City</label>
            <select
              type="text"
              name="city" 
              placeholder="Enter Your Mobile Number"
              className="flex-1 rounded-xl p-3 border border-gray-300"
              value={formdata.city}
              onChange={HandleChange}
            >
              <option value="">Select City</option>
              <option value="bhopal">Bhopal</option>
              <option value="indore">Indore</option>
              <option value="jabalpur">Jabalpur</option>
              <option value="ujjain">Ujjain</option>
            </select>
          </div>

          <div className="flex justify-center">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
