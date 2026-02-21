import React from "react";
import { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { TbCurrencyRupee } from "react-icons/tb";

const UserOrders = () => {
  const [value, setValue] = useState(0)

  const HandaleChange = (e) =>{
  setValue(e.target.value)
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">

      
      <div className="bg-white rounded-2xl shadow-md p-5 
                      hover:shadow-xl hover:scale-105 
                      transition-all duration-300">

        
        <div className="w-12 h-12 flex items-center justify-center 
                        bg-blue-100 text-blue-600 
                        rounded-full mb-4">
          <FaShoppingBag />
        </div>

        <p className="text-sm text-gray-500">₹Total Price</p>
        <p className="text-2xl font-bold text-gray-800">₹75,000</p>

        <div className="mt-4 flex justify-between text-sm text-gray-600">
          <span>Orders</span>
          <span className="font-medium">3</span>
        </div>

        <div className="mt-2 flex justify-between text-sm text-gray-600">
          <span>Quantity</span>
          <span className="font-medium">5</span>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-md p-5 
                      hover:shadow-xl hover:scale-105 
                      transition-all duration-300">

        
        <div className="w-12 h-12 flex items-center justify-center 
                        bg-blue-100 text-blue-600 
                        rounded-full mb-4">
          <FaShoppingBag />
        </div>

        <p className="text-sm text-gray-500">₹Total Price</p>
        <p className="text-2xl font-bold text-gray-800">₹75,000</p>

        <div className="mt-4 flex justify-between text-sm text-gray-600">
          <span>Orders</span>
          <span className="font-medium">3</span>
        </div>

        <div className="mt-2 flex justify-between text-sm text-gray-600">
          <span>Quantity</span>
          <span className="font-medium">5</span>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl
                       hover:scale-105 
                      transition-all duration-300">

        
        <div className="w-12 h-12 flex items-center justify-center 
                        bg-blue-100 text-blue-600 
                        rounded-full mb-4">
          <FaShoppingBag />
        </div>

        <p className="text-sm text-gray-500 flex items-center">
         <TbCurrencyRupee className=" font-bold size-5"/> ₹Total Price</p>
        <p className="text-2xl font-bold text-gray-800">₹75,000</p>

        <div className="mt-4 flex justify-between text-sm text-gray-600">
          <span>Orders</span>
          <span className="font-medium">3</span>
          
        </div>

        <div className="mt-2 flex justify-between text-sm text-gray-600">
          <span>Quantity</span>
          <span className="font-medium">5</span>
        </div>
      </div>
    
      
    </div>
  );
};

export default UserOrders;
