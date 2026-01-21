import React from 'react'
import { CiSearch } from "react-icons/ci";
import { AiFillDelete } from "react-icons/ai";
import { BiSolidEdit } from "react-icons/bi";
const Home = () => {
  return (
    <>
      <div className='flex gap-4 items-center justify-evenly bg-blue-900 h-25 text-white'>
        <span>Home</span>

        <div className="relative border">
          <input
            type="text"
            placeholder="Search..."
            className="pl-3 pr-10 py-1 rounded text-black outline-none"
          />
          <CiSearch className="absolute right-2 top-[50%] translate-y-[-50%] text-gray-500" />

        </div>

        <div className=' '>
          <button className='flex items-center gap-1 justify-center bg-blue-500  h-10 w-20 rounded'>
            Edit
            <BiSolidEdit />
            <AiFillDelete />
          </button>
         
        </div>
        <span>Home</span>
        <span>Home</span>
        <span>Home</span>
      </div>
    </>
  )
}

export default Home
