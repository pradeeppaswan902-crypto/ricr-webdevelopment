import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import EditProfileModal from "./modals/EditProfileModal";

const UserProfile = () => {
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const { user } = useAuth();

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6">
          
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 rounded-full bg-amber-400 flex items-center justify-center text-2xl font-bold text-white">
              {user?.fullName?.charAt(0)}
            </div>

            <h2 className="text-xl font-semibold">{user?.fullName}</h2>
            <p className="text-gray-500 text-sm">{user?.email}</p>
            <p className="text-gray-500 text-sm">{user?.phone}</p>
          </div>

          <div className="mt-6">
            <button
              className="w-full bg-amber-400 text-black font-medium py-3 rounded-xl shadow hover:shadow-amber-600 hover:scale-[1.02] transition"
              onClick={() => setIsEditProfileModalOpen(true)}
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {isEditProfileModalOpen && (
        <EditProfileModal onClose={() => setIsEditProfileModalOpen(false)} />
      )}
    </>
  );
};

export default UserProfile;
