"use client";

import React from "react";

const Lwm: React.FC = () => {
  return (
    <div className="lg:w-[1036px] mx-auto font-mFont mt-32 px-10">
      {/** Heading **/}
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-semibold text-center">
          <span className="text-[#2F327D]">What is</span>{" "}
          <span className="text-[#00CBBB]">LWM</span>
        </h1>
        <p className="lg:w-[650px] mx-auto w-80 text-gray-500">
          LWM is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage
          assignments, quizzes and exams; monitor due dates; grade results and
          provide students with feedback all in one place.
        </p>
      </div>
      {/**cards**/}
      <div className="grid lg:grid-cols-2 gap-10 pt-16">
        {/* <!-- For Instructors Card --> */}
        <div
          className="relative lg:w-[460px] w-[350px] h-[280px] bg-cover rounded-lg shadow-lg overflow-hidden"
          style={{
            backgroundImage: `url('/images/img1.png')`,
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gray-500 bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
            <h2 className="text-xl font-bold">FOR INSTRUCTORS</h2>
            <button className="mt-2 px-4 py-2 border border-white rounded-full hover:bg-white hover:text-blue-900 transition">
              Start a class today
            </button>
          </div>
        </div>

        {/* <!-- For Students Card --> */}
        <div
          className="relative lg:w-[460px] w-[350px] h-[280px] bg-cover rounded-lg shadow-lg overflow-hidden"
          style={{
            backgroundImage: `url('/images/img2.png')`,
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gray-500 bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
            <h2 className="text-xl font-bold">FOR STUDENTS</h2>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
              Enter access code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lwm;
