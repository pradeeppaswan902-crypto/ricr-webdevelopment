import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center bg-gray-100">
        <form className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl p-8 space-y-5">

         
          <div className="flex items-center gap-4">
            <label className="w-40 font-bold">Full Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="flex-1 rounded-xl p-3 border border-gray-300"
            />
          </div>

         
          <div className="flex items-center gap-4">
            <label className="w-40 font-bold">Last Name</label>
            <input
              type="text"
              placeholder="Enter Your Last Name"
              className="flex-1 rounded-xl p-3 border border-gray-300"
            />
          </div>

          
          <div className="flex items-center gap-4">
            <label className="w-40 font-bold">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 rounded-xl p-3 border border-gray-300"
            />
          </div>

          
          <div className="flex items-center gap-4">
            <label className="w-40 font-bold">Mobile Number</label>
            <input
              type="text"
              placeholder="Enter Your Mobile Number"
              className="flex-1 rounded-xl p-3 border border-gray-300"
            />
          </div>

         
          <div className="flex justify-center">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
              Submit
            </button>
          </div>

        </form>
      </div>
    </>
  )
}

export default Contact
