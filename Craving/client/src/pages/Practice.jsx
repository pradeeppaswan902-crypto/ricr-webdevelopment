import React from "react";
import UserSideBar from "../components/userDashboard/UserSideBar";
import { useState } from "react";
import toast from "react-hot-toast";
import { GoCreditCard } from "react-icons/go";
const Practice = (active, setActive) => {
  const menu = [
    { item: "over", ProductName: "lorem", price: 45 },
    { item: "over2", ProductName: "lipsum", price: 35 },
    { item: "over3", ProductName: "vorem", price: 56 },
    { item: "over4", ProductName: "torem", price: 5 },
  ];
  const [isCollapsed, setIsCollapsed] = useState();
  const [preview, setPreview] = useState();
  const [photo, setPhoto] = useState();

  const changePhoto = () => {
    const Form_Data = new FormData();
    Form_Data.append(preview);
    Form_Data.append(photo);
  };

  try {
    const res = api.patch("/auth/photo", FormData);
    res.data.data;
    toast.message();
    loading(true);
    const Url = createUrl(photo);
    setPreview(Url);
    changePhoto()
  } catch (error) {}

  const HandleChange = (e) =>{
    const file = e.targe.file[0] 
  
  }
  return (
    <div className="flex justify-center mt-10">
      <table className=" bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-blue-500 text-white">
          <tr>
            {active === "profile" && (
              <UserSideBar active={active} setActive={setActive} />
            )}
            <th className="py-2 px-4 text-left">Item</th>
            <th className="py-2 px-4 text-left">ProductName</th>
            <th className="py-2 px-4 text-left">Price</th>
          </tr>
        </thead>

        <tbody>
          {menu.map((item, index) => (
            <tr
              key={index}
              className={`text-gray-700 hover:bg-blue-100 ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`}
            >
              <td className="py-2 px-4">{item.item}</td>
              <td className="py-2 px-4">{item.ProductName}</td>
              <td className="py-2 px-4">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <div className="">
          <button
            className="bg-blue-600 w-24 h-10 text-white rounded hover:bg-sky-500
             flex items-center justify-center gap-2"
          >
            <GoCreditCard />
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Practice;
