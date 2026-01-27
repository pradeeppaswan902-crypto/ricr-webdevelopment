import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import EditProfileModal from "./modals/EditProfileModal";
import UserImage from "../../assets/1.png";
import { FaCamera } from "react-icons/fa";
import api from "../../config/Api";
import toast from "react-hot-toast";

const UserProfile = () => {
  const { user } = useAuth();
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [preview, setPreview] = useState("");
  const [photo, setPhoto] = useState("");

  // Photo upload
  const changePhoto = async () => {
    if (!photo) return;

    const form_Data = new FormData();
    form_Data.append("image", photo);
    form_Data.append("imageURL", preview);

    try {
      const res = await api.patch("/user/changePhoto", form_Data);
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Unknown Error");
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const newPhotoURL = URL.createObjectURL(file);
    setPreview(newPhotoURL);

    // Optional delay before uploading
    setTimeout(() => {
      setPhoto(file);
      changePhoto();
    }, 5000);
  };

  return (
    <div className="bg-(--color-primary)/10 rounded-lg shadow-md p-6 md:p-8 h-full">
      <div className="flex justify-between border p-3 rounded-3xl items-center border-gray-300 bg-white">
        <div className="flex gap-5 items-center">
          {/* User Image */}
          <div className="relative">
            <div className="border rounded-full w-36 h-36 overflow-hidden">
              <img
                src={preview || user?.photo?.url || UserImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-2 left-[75%] border bg-white p-2 rounded-full group flex gap-3">
              <label
                htmlFor="imageUpload"
                className="text-(--color-primary) group-hover:text-(--color-secondary)"
              >
                <FaCamera />
              </label>
              <input
                type="file"
                id="imageUpload"
                className="hidden"
                accept="image/*"
                onChange={handlePhotoChange}
              />
            </div>
          </div>

          {/* User Details */}
          <div>
            <div className="text-3xl text-(--color-primary) font-bold">
              {user?.fullName || "Full Name"}
            </div>
            <div className="text-gray-600 text-lg font-semibold">
              {user?.email || "Email"}
            </div>
            <div className="text-gray-600 text-lg font-semibold">
              {user?.mobileNumber || "Mobile Number"}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-2">
          <button
            className="px-4 py-2 rounded bg-(--color-secondary) text-white"
            onClick={() => setIsEditProfileModalOpen(true)}
          >
            Edit
          </button>
          <button className="px-4 py-2 rounded bg-(--color-secondary) text-white">
            Reset
          </button>
        </div>

        {/* Edit Profile Modal */}
        {isEditProfileModalOpen && (
          <EditProfileModal
            onClose={() => setIsEditProfileModalOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default UserProfile;
