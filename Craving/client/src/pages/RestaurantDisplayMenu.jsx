import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../config/Api";
import toast from "react-hot-toast";

const RestaurantDisplayMenu = () => {
  const { id: restaurantId } = useParams();
  const [restaurantData, setRestaurantData] = useState([]);

  const fetchRestaurantMenu = async () => {
    try {
      const res = await api.get(
        `/public/restaurant-menu/${restaurantId}/1`
      );
      setRestaurantData(res.data.data);
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Unknown Error"
      );
    }
  };

  useEffect(() => {
    if (restaurantId) {
      fetchRestaurantMenu();
    }
  }, [restaurantId]);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <h2 className="text-2xl font-bold mb-6">
        🍽️ Restaurant Menu
      </h2>

      {restaurantData.length === 0 && (
        <p className="text-gray-500">No menu found</p>
      )}

      {/* ✅ GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurantData.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-xl p-4 shadow-md flex flex-col justify-between hover:shadow-lg transition"
          >
            {/* IMAGE */}
            {item.images?.length > 0 && (
              <img
                src={item.images[0].url}
                alt={item.itemName}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
            )}

            {/* CONTENT */}
            <div>
              <span
                className={`text-xs font-semibold ${
                  item.type === "veg"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                ● {item.type?.toUpperCase()}
              </span>

              <h3 className="text-lg font-semibold mt-1">
                {item.itemName}
              </h3>

              <p className="font-bold mt-1 text-gray-800">
                ₹ {item.price}
              </p>

              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                {item.description}
              </p>
            </div>

            {/* ADD BUTTON */}
            <button className="mt-4 border border-red-500 text-red-500 font-semibold py-2 rounded-md hover:bg-red-500 hover:text-white transition">
              ADD
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantDisplayMenu;
