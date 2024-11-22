"use client";
import { BsBook } from "react-icons/bs";
import React from "react";
import { MdComputer } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import Link from "next/link";
const AboutPage = () => {
  return (
    <div className="lg:w-[1520px] w-80 mx-auto md:pt-28 pt-10 font-mFont pb-16">
        {/** instructor **/}
      <div
        className="md:h-80 h-64 shadow-xl relative rounded-lg overflow-hidden mt-3 md:mb-28 mb-14"
        style={{
          backgroundImage: `url('/images/about.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60">
          <div className=" absolute md:top-24 top-16 left-[28%]">
            <div className="flex items-center space-x-40 ">
              <div className="space-y-5 w-72 ">
                <h1 className="text-white font-semibold md:text-xl">
                  Become A Instructor
                </h1>
                <p className=" text-white font-semibold md:text-4xl md:w-96 w-36">
                  You can join with LWM as{" "}
                  <span className=" text-green-400">a instructor?</span>
                </p>
              </div>
              <button className="bg-yellow-50 shadow-xl rounded-xl px-5 py-3 btn hover:text-white font-semibold shadow-gray-400">
                Drop Information
              </button>
            </div>
          </div>
        </div>
      </div>
      {/** welcome section **/}

      <div className="flex flex-col md:flex-row items-center justify-around">
        <div
          style={{
            backgroundImage: `url('/images/skill.jpg')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="relative md:w-[670px] w-80 md:h-96 h-64 rounded-lg"
        >
          <div className="absolute top-20 md:right-16 right-14">
            <div className="bg-[#309255] w-32 h-36 rounded-md inset-0 bg-opacity-85">
              <div className="bg-white absolute w-24 ml-4 rounded-b">
                <BsBook size={50} className="p-2 mx-auto" />
              </div>
              <p className="px-5 absolute bottom-5 text-gray-100">
                <span className="text-xl font-semibold text-white">28+</span>{" "}
                Years Experience
              </p>
            </div>
          </div>
        </div>
        {/* text section */}
        <div className="md:w-[550px] space-y-6 pt-10 md:pt-0">
          <h1 className="text-xl font-semibold text-gray-500">
            Welcome to LWM
          </h1>
          <p className="font-semibold text-3xl leading-9">
            You can join with LWM and upgrade your skill for your{" "}
            <span className="text-green-400">bright future.</span>
          </p>
          <p className="leading-7">
            Join LWM to elevate your skills and build a brighter future. With
            expert guidance and hands-on training, gain the tools you need for
            success in your career journey.
          </p>
          <Link href="/courses" className="btn md:px-5 md:py-3 py-2 text-white hover:text-black bg-slate-400">
            Start A Course
          </Link>
        </div>
      </div>

      {/* cards */}
      <div className="grid md:grid-cols-3 md:mt-24 mt-14 gap-14 md:gap-0">
        <div className="md:w-[360px] w-80 md:mx-auto h-[400px] transition duration-400 border p-5 space-y-5 rounded-lg group hover:border-green-400">
          <div className="flex items-center space-x-6">
            <div className="bg-green-100 transition duration-400 rounded-full  py-4 px-4 group-hover:bg-green-600">
              <MdComputer
                size={40}
                className="text-green-600 mx-auto  group-hover:text-white"
              />
            </div>
            <h1 className="text-xl font-semibold">Top Instructors</h1>
          </div>
          <p className="text-sm text-gray-600">
            Our top instructors are industry experts dedicated to helping you
            succeed. With a focus on real-world skills and hands-on learning,
            they provide valuable insights and mentorship, making complex
            concepts easy to understand and helping you reach new heights in
            your career.
          </p>
          <p className="text-sm text-gray-600 leading-6">
            Learn from top instructors who bring years of expertise and passion
            to every lesson. With their guidance, you’ll gain practical skills
            and insights, empowering you to achieve your personal and
            professional goals.
          </p>
        </div>

        <div className="md:w-[360px] w-80 md:mx-auto h-[400px] transition duration-400 border p-5 space-y-5 rounded-lg group hover:border-green-400">
          <div className="flex items-center space-x-6">
            <div className="bg-green-100 transition duration-400 rounded-full  py-4 px-4 group-hover:bg-green-600">
              <MdEventAvailable
                size={40}
                className="text-green-600 mx-auto  group-hover:text-white"
              />
            </div>
            <h1 className="text-xl font-semibold">Portable Program</h1>
          </div>
          <p className="text-sm text-gray-600">
            Our top instructors are industry experts dedicated to helping you
            succeed. With a focus on real-world skills and hands-on learning,
            they provide valuable insights and mentorship, making complex
            concepts easy to understand and helping you reach new heights in
            your career.
          </p>
          <p className="text-sm text-gray-600 leading-6">
            Learn from top instructors who bring years of expertise and passion
            to every lesson. With their guidance, you’ll gain practical skills
            and insights, empowering you to achieve your personal and
            professional goals.
          </p>
        </div>

        <div className="md:w-[360px] w-80 md:mx-auto h-[400px] transition duration-400 border p-5 space-y-5 rounded-lg group hover:border-green-400">
          <div className="flex items-center space-x-6">
            <div className="bg-green-100 transition duration-400 rounded-full  py-4 px-4 group-hover:bg-green-600">
              <MdCastForEducation
                size={40}
                className="text-green-600 mx-auto  group-hover:text-white"
              />
            </div>
            <h1 className="text-xl font-semibold">Improve Quickly</h1>
          </div>
          <p className="text-sm text-gray-600">
            Our top instructors are industry experts dedicated to helping you
            succeed. With a focus on real-world skills and hands-on learning,
            they provide valuable insights and mentorship, making complex
            concepts easy to understand and helping you reach new heights in
            your career.
          </p>
          <p className="text-sm text-gray-600 leading-6">
            Learn from top instructors who bring years of expertise and passion
            to every lesson. With their guidance, you’ll gain practical skills
            and insights, empowering you to achieve your personal and
            professional goals.
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default AboutPage;
