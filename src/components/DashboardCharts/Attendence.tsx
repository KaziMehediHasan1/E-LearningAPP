"use client";

import React from "react";
import { BarChart, Bar, XAxis, ResponsiveContainer, Legend, Tooltip, YAxis } from "recharts";
const data = [
  {
    name: "Jan",
    Listing: 4000,
    Writing: 2400,
    View: 2400,
  },
  {
    name: "Feb",
    Listing: 3000,
    Writing: 1398,
    View: 2210,
  },
  {
    name: "Mar",
    Listing: 2000,
    Writing: 9800,
    View: 2290,
  },
  {
    name: "Apr",
    Listing: 2780,
    Writing: 3908,
    View: 2000,
  },
  {
    name: "May",
    Listing: 1890,
    Writing: 4800,
    View: 2181,
  },
  {
    name: "Jun",
    Listing: 2390,
    Writing: 3800,
    View: 2500,
  },
  {
    name: "Jul",
    Listing: "name",
    Writing: 4300,
    View: 2100,
  },
  {
    name: "Aug",
    Listing: "name",
    Writing: 4300,
    View: 2100,
  },
  {
    name: "Sept",
    Listing: "name",
    Writing: 4300,
    View: 2100,
  },
  {
    name: "Oct",
    Listing: "name",
    Writing: 4300,
    View: 2100,
  },
  {
    name: "Nov",
    Listing: "name",
    Writing: 4300,
    View: 2100,
  },
];
const AttendanceChart = () => {
  return (
    <div
      style={{ width: "100%", height: 400 }}
      className="bg-white rounded-lg p-8 font-mFont"
    >
        <h1 className="text-blue-800 font-semibold pb-4">Time Spending on Learning</h1>
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
          <YAxis  tick={{ fill: 'green', fontSize: 15 }}
        tickLine={{ stroke: 'green' }}/>
          <Legend/>
          <Tooltip/>
          <Bar
            dataKey="Listing"
            fill="#38588a"
            barSize={30}
           
            radius={[5, 5, 0, 0]}
          />
          <Bar
            dataKey="Writing"
            fill="#26071e"
            barSize={30}
            radius={[5, 5, 0, 0]}
          />
          <Bar
            dataKey="View"
            fill="#86EFAC"
            barSize={30}
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
