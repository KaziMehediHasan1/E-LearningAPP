"use client";

import React from "react";
import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const VisitorChartPage = () => {
  return (
    <div
      style={{ width: "100%", height: 400 }}
      className="bg-white rounded-lg p-4 font-mFont"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-blue-800 font-semibold">Revenue</h1>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-3">
            <p className="font-semibold text-gray-500">Course visit </p>
            <div className="w-3 h-3 rounded-full bg-[#D1D5DB]"></div>
          </div>
          <div className="flex items-center space-x-3">
            <p className="font-semibold text-gray-500">Course sale </p>
            <div className="w-3 h-3 rounded-full bg-[#86EFAC]"></div>
          </div>
        </div>
      </div>
      <ResponsiveContainer>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 35,
            left: 20,
            bottom: 15,
          }}
        >
          <XAxis dataKey="name" />
          <Bar
            dataKey="pv"
            fill="#D1D5DB"
            barSize={30}
            radius={[30, 30, 0, 0]}
          />
          <Bar
            dataKey="uv"
            fill="#86EFAC"
            barSize={30}
            radius={[30, 30, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VisitorChartPage;
