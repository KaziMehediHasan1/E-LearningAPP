"use client";
import { IoBrushOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { MdBusinessCenter } from "react-icons/md";
import { CiShoppingBasket } from "react-icons/ci";
import { CiCamera } from "react-icons/ci";
import { CiVideoOn } from "react-icons/ci";
import { LuInspect } from "react-icons/lu";
import { IoMdBuild } from "react-icons/io";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { PiEyeThin } from "react-icons/pi";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// interface for course..
interface Course {
  _id: string;
  name: string;
  image: string | null;
  title: string;
  price: number;
  tag: string;
  viewCount: number;
  description: string;
  longDescription: string;
}
const Courses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [pages, setPages] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  //GET ALL COURSES IN DB
  useEffect(() => {
    const getCourse = async () => {
      try {
        const res = await axios.get("/all-course/api");
        if (res.data) {
          setCourses(res.data.getCourses);
        }
      } catch (error) {
        setCourses([]);
        console.error("Error fetching blogs:", error);
      }
    };
    getCourse();
    // Revalidate every 10 seconds
    const interval = setInterval(getCourse, 10000);

    return () => clearInterval(interval);
  }, []);

  // PAGINATION CONTROLLER
  const handleBack = () => {
    if (pages > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setPages(pages - 1);
        setIsTransitioning(false);
      }, 300);
    }
  };
  const handleNext = () => {
    const maxPages = Math.ceil(courses.length / 3) - 1;
    if (pages < maxPages) {
      setIsTransitioning(true);
      setTimeout(() => {
        setPages(pages + 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  //UPDATED COURSE VIEW COUNTING VALUE
  const handleCourseCountView = async (id: string): Promise<void> => {
    try {
      const res = await axios.patch("/courses/api", { id });
      if (res.data.data) {
        console.log("updated successful");
      }
    } catch (error) {
      console.log("not update counting value", error);
    }
  };

  return (
    <div className="w-full mx-auto md:mt-20 font-mFont mb-20">
      {/* ALL COURSES */}
      <div className=" bg-[#add2fa]">
        <div className="lg:w-[1425px] w-[320px] mx-auto py-16 space-y-8">
          <h1 className="text-xl font-semibold">
            Welcome back, ready for your next lesson?
          </h1>
          <div
            className={`grid lg:grid-cols-3 grid-cols-1 gap-24 transition-transform duration-500 ${
              isTransitioning ? `opacity-0 translate-x-10` : "opacity-100"
            }`}
          >
            {courses.length > 0 ? (
              courses.slice(pages * 3, pages * 3 + 3).map((course) => (
                <div key={course._id}>
                  <Link
                    href={`/courses/${course._id}`}
                    onClick={() => handleCourseCountView(course._id)}
                    className="card bg-base-100  hover:scale-105 duration-300 overflow-hidden md:w-96 w-80 h-[445px] shadow-xl"
                  >
                    <figure className="px-6 pt-6">
                      <Image
                        width={200}
                        height={200}
                        src={course?.image}
                        alt="image"
                        className="rounded-xl md:h-52 md:w-96 w-80 h-[180px]"
                      />
                    </figure>
                    <div className="pl-7 pt-5 px-5 space-y-3">
                      <h1>{course?.title.slice(0, 40)}...</h1>
                      <div className=" flex items-center justify-between space-x-4">
                        <div className=" flex items-center space-x-4">
                          <Image
                            height={200}
                            width={200}
                            alt="avatar image"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            className="rounded-full w-10"
                          />
                          {!course.name ? (
                            <p className="text-gray-600 text-sm ">Admin</p>
                          ) : (
                            <p className="text-gray-600 text-xs">
                              {course?.name}
                            </p>
                          )}
                        </div>
                        <p className="text-gray-400 text-sm font-semibold pr-2 ">
                          ${course.price}
                        </p>
                      </div>
                      <p className="text-sm text-gray-600">
                        {course?.description.slice(0, 90)}..
                      </p>
                      <div className="flex items-center pt-2 justify-between">
                        <button className="underline text-gray-400 text-xs">
                          Read more
                        </button>
                        <div className="flex items-center space-x-2 pr-2">
                          <PiEyeThin />
                          <p className="underline text-gray-400 text-xs">
                            {course.viewCount}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-xl font-semibold text-white text-center mt-10">
                No blogs found
              </p>
            )}
          </div>

          {/* PAGINATION */}
          <div className="flex justify-end pr-10 space-x-3">
            <button
              onClick={handleBack}
              className={`${
                pages === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-gray-600"
              } text-white rounded`}
            >
              <MdKeyboardArrowLeft size={30} />
            </button>
            <button
              onClick={handleNext}
              className={`${
                pages === Math.ceil(courses.length / 3) - 1
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gray-600"
              } text-white rounded`}
            >
              <MdKeyboardArrowRight size={30} />
            </button>
          </div>
        </div>
      </div>

      {/* ALL COURSES */}

      <div className="lg:w-[1425px] w-80 mx-auto mt-20 space-y-8">
        <h1 className="text-xl font-semibold">
          Choice favorite course from top category
        </h1>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-24">
          {/* cards */}
          <div className="card hover:scale-105 duration-300 overflow-hidden bg-base-100 w-72 h-[200px] shadow-xl">
            <div className="px-5 py-4 bg-slate-200 rounded-sm w-16 mx-auto">
              <IoBrushOutline size={25} />
            </div>
            <div className="pl-12 pt-6 px-8 space-y-3">
              <h1 className="text-gray-600">
                Class adds $30 million to its balance sheet for a Zoom-friendly
                edtech solution{" "}
              </h1>
            </div>
          </div>

          <div className="card hover:scale-105 duration-300 overflow-hidden bg-base-100 w-72 h-[200px] shadow-xl">
            <div className="px-5 py-4 bg-blue-200 rounded-sm w-16 mx-auto">
              <RiComputerLine size={25} />
            </div>
            <div className="pl-12 pt-6 px-8 space-y-3">
              <h1 className="text-gray-600">
                Class adds $30 million to its balance sheet for a Zoom-friendly
                edtech solution{" "}
              </h1>
            </div>
          </div>

          <div className="card hover:scale-105 duration-300 overflow-hidden bg-base-100 w-72 h-[200px] shadow-xl">
            <div className="px-5 py-4 bg-green-200 rounded-sm w-16 mx-auto">
              <CiShoppingBasket size={25} />
            </div>
            <div className="pl-12 pt-6 px-8 space-y-3">
              <h1 className="text-gray-600">
                Class adds $30 million to its balance sheet for a Zoom-friendly
                edtech solution{" "}
              </h1>
            </div>
          </div>

          <div className="card hover:scale-105 duration-300 overflow-hidden bg-base-100 w-72 h-[200px] shadow-xl">
            <div className="px-5 py-4 bg-cyan-200 rounded-sm w-16 mx-auto">
              <MdBusinessCenter size={25} />
            </div>
            <div className="pl-12 pt-6 px-8 space-y-3">
              <h1 className="text-gray-600">
                Class adds $30 million to its balance sheet for a Zoom-friendly
                edtech solution{" "}
              </h1>
            </div>
          </div>

          <div className="card hover:scale-105 duration-300 overflow-hidden bg-base-100 w-72 h-[200px] shadow-xl">
            <div className="px-5 py-4 bg-yellow-200 rounded-sm w-16 mx-auto">
              <CiCamera size={25} />
            </div>
            <div className="pl-12 pt-6 px-8 space-y-3">
              <h1 className="text-gray-600">
                Class adds $30 million to its balance sheet for a Zoom-friendly
                edtech solution{" "}
              </h1>
            </div>
          </div>

          <div className="card hover:scale-105 duration-300 overflow-hidden bg-base-100 w-72 h-[200px] shadow-xl">
            <div className="px-5 py-4 bg-orange-200 rounded-sm w-16 mx-auto">
              <LuInspect size={25} />
            </div>
            <div className="pl-12 pt-6 px-8 space-y-3">
              <h1 className="text-gray-600">
                Class adds $30 million to its balance sheet for a Zoom-friendly
                edtech solution{" "}
              </h1>
            </div>
          </div>

          <div className="card hover:scale-105 duration-300 overflow-hidden bg-base-100 w-72 h-[200px] shadow-xl">
            <div className="px-5 py-4 bg-stone-200 rounded-sm w-16 mx-auto">
              <IoMdBuild size={25} />
            </div>
            <div className="pl-12 pt-6 px-8 space-y-3">
              <h1 className="text-gray-600">
                Class adds $30 million to its balance sheet for a Zoom-friendly
                edtech solution{" "}
              </h1>
            </div>
          </div>

          <div className="card hover:scale-105 duration-300 overflow-hidden bg-base-100 w-72 h-[200px] shadow-xl">
            <div className="px-5 py-4 bg-red-200 rounded-sm w-16 mx-auto">
              <CiVideoOn size={25} />
            </div>
            <div className="pl-12 pt-6 px-8 space-y-3">
              <h1 className="text-gray-600">
                Class adds $30 million to its balance sheet for a Zoom-friendly
                edtech solution
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
