"use client";
import React, { useRef, useState } from "react";
import { FaCamera } from "react-icons/fa";

const Profile = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const createURL = URL.createObjectURL(file);
      setImage(createURL);
    }
  };
  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <div className="p-5">
      <form className="flex flex-col items-center bg-[#a8caba] h-screen  pt-52  rounded-lg">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-purple-300">
          <img
            src={image}
            alt="Profile"
            className="w-full h-full object-contain rounded-full object-cover"
          />
          <div
            onClick={handleClick}
            className="absolute bottom-0 w-full h-1/3 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <FaCamera className="text-white text-lg" />
          </div>
        </div>
        {/* Hidden file input */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />

        {/* form field section */}
        <div className=" space-y-4">
          <div className="pt-10 grid grid-cols-2 items-center gap-5">
            <div className="flex flex-col space-y-1">
              <label htmlFor="name" className="">
                Full Name
              </label>
              <input
                type="text"
                className="rounded-full w-96 ring-1 outline-none px-3 py-1"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="name">Last Name </label>
              <input
                type="text"
                className="rounded-full w-96 ring-1 outline-none px-3 py-1"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="name">Primary Email</label>
              <input
                type="email"
                className="rounded-full w-96 ring-1 outline-none px-3 py-1"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="name">Secondary Email</label>
              <input
                type="email"
                className="rounded-full w-96 ring-1 outline-none px-3 py-1"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="name">Gender</label>
              <input
                type="email"
                className="rounded-full w-96 ring-1 outline-none px-3 py-1"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="name">Current Address</label>
              <input
                type="email"
                className="rounded-full w-96 ring-1 outline-none px-3 py-1"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-gray-900 text-white py-1 w-full rounded-full "
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
