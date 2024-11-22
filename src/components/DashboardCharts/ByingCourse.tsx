"use client"
import React from "react";
import { GiProgression } from "react-icons/gi";

const BuyingCourse = () => {
  return (
    <div className="w-[50%] h-[390px] rounded-lg font-mFont bg-slate-300 p-5">
      <div className="">
        <h1 className="text-center font-semibold text-xl text-gray-600">
          This Week Most Selling Courses
        </h1>{" "}
        <div className="border-b-2 shadow-xl border-green-200 rounded-full w-[70%] mx-auto pt-2"></div>
        <div className="w-[70%] mx-auto mt-8 bg-blue-100 p-2 rounded-lg space-y-2">
          <div className="flex items-center justify-between px-10">
            <h1 className="font-semibold text-sm">Learn Programming earn faster!</h1>
            <GiProgression className="text-blue-600" size={20} />
          </div>
          <div className="flex items-center justify-between px-10">
            <h1 className="text-sm text-gray-700">Software Development</h1>
            <p className="text-sm text-blue-600">View 250</p>
            <p className="text-sm text-blue-600">Buy 53</p>
          </div>
        </div>
        <div className="w-[70%] mx-auto mt-8 bg-blue-100 p-2 rounded-lg space-y-2">
          <div className="flex items-center justify-between px-10">
            <h1 className="font-semibold text-sm">Learn Programming earn faster!</h1>
            <GiProgression className="text-blue-600" size={20} />
          </div>
          <div className="flex items-center justify-between px-10">
            <h1 className="text-sm text-gray-700">Software Development</h1>
            <p className="text-sm text-blue-600">View 250</p>
            <p className="text-sm text-blue-600">Buy 53</p>
          </div>
        </div>
        <div className="w-[70%] mx-auto mt-8 bg-blue-100 p-2 rounded-lg space-y-2">
          <div className="flex items-center justify-between px-10">
            <h1 className="font-semibold text-sm">Learn Programming earn faster!</h1>
            <GiProgression className="text-blue-600" size={20} />
          </div>
          <div className="flex items-center justify-between px-10">
            <h1 className="text-sm text-gray-700">Software Development</h1>
            <p className="text-sm text-blue-600">View 250</p>
            <p className="text-sm text-blue-600">Buy 53</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyingCourse;
