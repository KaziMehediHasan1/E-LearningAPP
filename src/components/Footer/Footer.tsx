"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const Footer = () => {
  const pathname = usePathname();
  const [email, setEmail] = useState<string>("");
  console.log(email);
  const handleSubmitLetter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      toast.success("Newsletter Subscription Successful");
    } else if (email === "") {
      toast.success("It's Required");
    }
  };

  //** hidden path **//
  const hiddenPaths = [
    "/dashboard",
    "/add-blogs",
    "/all-course",
    "/teacher",
    "/all-blogs",
    "/review",
    "/profile",
    "/user",
  ];
  return (
    <div
      className={`text-center bg-[#252641] font-mFont w-full h-[450px] ${
        hiddenPaths.includes(pathname) && "hidden"
      }`}
    >
      <div className="pt-16">
        <div className="flex items-center justify-center w-80 mx-auto">
          <h1 className="text-white md:text-3xl text-xl font-semibold pr-24 pb-2">
            LWM
          </h1>
          <div className="w-[1px] h-[70px] mr-8 absolute bg-[#B2B3CF]"></div>
          <p className="text-white w-28 text-xs md:text-sm">
            Virtual Class for Zoom
          </p>
        </div>
        <div className="pt-12">
          <h1 className="text-center md:text-[22px] text-[#B2B3CF]">
            Subscribe to get our Newsletter
          </h1>
          <form
            onSubmit={handleSubmitLetter}
            className="flex items-center flex-col space-y-5 md:space-y-0 md:flex-row space-x-5 justify-center pt-8"
          >
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-600 bg-[#252641] outline-none text-[#B2B3CF] px-5 py-[10px] md:w-72 w-64 rounded-full"
              placeholder="Your Email "
              required
            />
            <button className="text-center text-[17px] shadow-lg shadow-gray-600 bg-[#49BBBD] px-5 py-[10px] rounded-full text-white ">
              Subscribe
            </button>
          </form>
          <div className="text-white flex justify-center items-center md:pt-16 pt-8 space-x-4">
            <div className="text-sm text-[#B2B3CF]">Careers</div>
            <div className="w-[1px] h-[23px] bg-slate-400"></div>
            <div className="text-sm text-[#B2B3CF]">Privacy Policy</div>
            <div className="w-[1px] h-[23px]  bg-slate-400"></div>
            <div className="text-sm text-[#B2B3CF]">Terms & Conditions</div>
          </div>
          <h1 className="text-md text-[#B2B3CF] text-center pt-6">
            © 2021 Class Technologies Inc.{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
