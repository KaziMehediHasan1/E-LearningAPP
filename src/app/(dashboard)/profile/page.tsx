"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { FaCamera } from "react-icons/fa";
import { toast } from "react-toastify";

const Profile = () => {
  const router = useRouter();
  const session = useSession();
  const queryData = session?.data?.user?.email;
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [hostImages, setHostImages] = useState<string | null>(null);
  //IMG-BB API & UPLOAD FORM IMAGE IN THE IMG-BB HOSTING SITE
  const api_key = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
  const api_Url = `https://api.imgbb.com/1/upload?key=${api_key}`;

  //IMAGE UPLOADING AND PREVIEW SHOWING HANDLER
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
    // Prepare FormData for ImgBB
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post(api_Url, formData);
      if (res.data.success) {
        setHostImages(res.data.data.url);
        console.log(res.data);
      }
    } catch (error) {
      setHostImages(null);
      console.log(error);
    }
  };

  interface FormData {
    firstName: string;
    lastName: string;
    PEmail: string;
    SEmail: string;
    image: string | null;
    gender: string;
    address: string;
  }
  //FORM SUBMITTING HANDLER
  const handleProfileUpdate = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData: FormData = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement)
        .value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      PEmail: (form.elements.namedItem("PEmail") as HTMLInputElement).value,
      SEmail: (form.elements.namedItem("SEmail") as HTMLInputElement).value,
      image: hostImages, // Use the uploaded image URL from ImgBB
      gender: (form.elements.namedItem("gender") as HTMLInputElement).value,
      address: (form.elements.namedItem("address") as HTMLInputElement).value,
    };

    try {
      if (!queryData) {
        router.push("/Login");
        return;
      }
      const res = await axios.patch("/profile/api", { formData, queryData });
      if (res.data) {
        toast.success("Updated Profile");
      }
    } catch (error) {
      console.error("Error posting blog:", error);
      toast.error("Update Failed. Please try again.");
    }
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <div className="p-5">
      <form
        onSubmit={handleProfileUpdate}
        className="flex flex-col items-center bg-[#a8caba] h-screen  md:pt-52 pt-20 rounded-lg"
      >
        <div
          onClick={handleClick}
          className="relative w-24 cursor-pointer h-24 rounded-full overflow-hidden border-4 border-purple-300"
        >
          <Image
            height={200}
            width={200}
            src={image}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div className="absolute bottom-0 w-full h-1/3 bg-black bg-opacity-50 flex items-center justify-center">
            <FaCamera className="text-white text-lg" />
          </div>
        </div>
        {/* Hidden file input */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageUpload}
          accept="image/*"
          className="hidden"
        />

        {/* form field section */}
        <div className=" space-y-4">
          <div className="pt-10 grid md:grid-cols-2 items-center gap-5">
            <div className="flex flex-col space-y-1">
              <label htmlFor="name" className="">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="FirstName"
                className="rounded-full  md:w-96 w-80 ring-1 outline-none px-5 py-1"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="name">Last Name </label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="rounded-full  md:w-96 w-80 ring-1 outline-none px-3 py-1"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="name">Primary Email</label>
              <input
                type="email"
                name="PEmail"
                placeholder="Primary Email"
                className="rounded-full  md:w-96 w-80 ring-1 outline-none px-3 py-1"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="name">Secondary Email</label>
              <input
                type="email"
                placeholder="Secondary Email"
                name="SEmail"
                className="rounded-full  md:w-96 w-80 ring-1 outline-none px-3 py-1"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="name">Gender</label>
              <input
                type="text"
                name="gender"
                placeholder="Gender"
                className="rounded-full  md:w-96 w-80 ring-1 outline-none px-3 py-1"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="name">Current Address</label>
              <input
                type="address"
                placeholder="Address"
                name="address"
                className="rounded-full  md:w-96 w-80 ring-1 outline-none px-3 py-1"
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
