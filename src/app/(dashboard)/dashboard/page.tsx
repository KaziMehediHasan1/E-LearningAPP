"use client";
import AttendanceChart from "@/components/DashboardCharts/Attendence";
import BuyingCourse from "@/components/DashboardCharts/ByingCourse";
import MostViewCharts from "@/components/DashboardCharts/MostViewCharts";
import RadialBarChartPage from "@/components/DashboardCharts/RadialBarChart";
import VisitorChartPage from "@/components/DashboardCharts/VisitorChart";

import React from "react";

const DashboardMain = () => {


  return (
    <div className="p-5">
        {/* CARDS */}
      <div className="grid grid-cols-4">
        <div className="h-44 shadow-xl shadow-blue-200 relative w-5/6 rounded-lg overflow-hidden mt-3 mb-20">
          <div className="absolute inset-0 bg-gray-300">
            <div className=" absolute top-8 left-[70px]">
              <h1 className="text-3xl font-semibold">Total Students</h1>
              <p className="text-6xl font-bold text-center pt-2  opacity-90">
                205
              </p>
            </div>
          </div>
        </div>

        <div className="h-44 shadow-xl shadow-green-200 relative w-5/6 rounded-lg overflow-hidden mt-3 mb-20">
          <div className="absolute inset-0 bg-green-300">
            <div className=" absolute top-8 left-[70px]">
              <h1 className="text-3xl font-semibold">Total Teacher</h1>
              <p className="text-6xl font-bold text-center pt-2 pl-5 opacity-90">
                35
              </p>
            </div>
          </div>
        </div>

        <div className="h-44 shadow-xl shadow-blue-200 relative w-5/6 rounded-lg overflow-hidden mt-3 mb-20">
          <div className="absolute inset-0 bg-gray-300">
            <div className=" absolute top-8 left-[70px]">
              <h1 className="text-3xl font-semibold">Total Course</h1>
              <p className="text-6xl font-bold text-center pt-2 pl-5 opacity-90">
                8
              </p>
            </div>
          </div>
        </div>

        <div className="h-44 shadow-xl shadow-green-200 relative w-5/6 rounded-lg overflow-hidden mt-3 mb-20">
          <div className="absolute inset-0 bg-green-300">
            <div className=" absolute top-8 left-[80px]">
              <h1 className="text-3xl font-semibold">Total Blogs</h1>
              <p className="text-6xl font-bold text-center pt-2 pl-5 opacity-90">
                89
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex space-x-8 ">
        <RadialBarChartPage />
        <VisitorChartPage />
      </div>
      <div className="mt-16">
        <AttendanceChart />
      </div>
      <div className="mt-16 flex  space-x-4">
        <MostViewCharts />
        <BuyingCourse/>
      </div>
    </div>
  );
};

export default DashboardMain;
