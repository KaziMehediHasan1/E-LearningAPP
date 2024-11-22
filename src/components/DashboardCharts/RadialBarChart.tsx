"use client";

import React from "react";
import { RadialBarChart, ResponsiveContainer, RadialBar } from "recharts";
import { FaFemale, FaMale } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
const data = [
  { uv: 70, fill: "#D1D5DB" },
  { uv: 50, fill: "#86EFAC" },
];

const RadialBarChartPage = () => {
  return (
    <div
      className="rounded-lg"
      style={{
        width: "35%",
        height: 400,
        position: "relative",
        backgroundColor: "white",
      }}
    >
      <div className="p-3 flex items-center justify-between ">
        <h1 className="font-semibold text-gray-500">Students</h1>
        <CiMenuKebab className="rotate-90 transform font-semibold text-gray-500" size={20} />
      </div>
      <ResponsiveContainer>
        <RadialBarChart
          cx="50%"
          cy="35%"
          innerRadius="40%"
          outerRadius="80%"
          barSize={25}
          data={data}
        >
          <RadialBar background dataKey="uv" />
        </RadialBarChart> 
      </ResponsiveContainer>
      <div className="absolute top-[168px] right-[150px] flex items-center">
        <FaMale size={50} className="text-[#D1D5DB]" />
        <FaFemale size={50} className="text-[#86EFAC]" />
      </div>
    </div>
  );
};

export default RadialBarChartPage;
