import React from 'react'
import UserSideBar from '../components/userDashboard/UserSideBar';

const Practice = (active , setActive) => {
  const menu = [
    { item: "over", ProductName: "lorem", price: 45 },
    { item: "over", ProductName: "lipsum", price: 35 },
    { item: "over", ProductName: "vorem", price: 56 },
    { item: "over", ProductName: "torem", price: 5 }
  ];

  return (
    <div className="flex justify-center mt-10">
      <table className=" bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-blue-500 text-white">
          <tr>
            {active ==="profile" && <UserSideBar active={active} setActive={setActive}/>}
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
        <div className=''>
            <button>
               
            </button>
          </div>  
      </div>  




    </div>
  )
}

export default Practice
