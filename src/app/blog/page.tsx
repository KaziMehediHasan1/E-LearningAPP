"use client";
import { MdOutlineWatchLater } from "react-icons/md";
import Image from "next/image";
import { PiEyeThin } from "react-icons/pi";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import { AllBlogs } from "../(dashboard)/all-blogs/page";
import Link from "next/link";

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
const BlogContainer = () => {
  const [blogs, setBlogs] = useState<AllBlogs[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [pages, setPages] = useState<number>(0);
  const [marketingPages, setMarketingPage] = useState<number>(0);
  const [marketingData, setMarketingData] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  //UPSERT BLOG VIEW COUNT
  const handleUpsert = async (id: string): Promise<void> => {
    try {
      const res = await axios.patch("/blog/api", { id });
      if (res.data.data) {
        console.log("updated successful");
      }
    } catch (error) {
      console.log("not update counting value", error);
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

  //GET ALL BLOGS IN DB
  useEffect(() => {
    const GetBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:3000/add-blogs/api");
        console.log(res.data);
        if (res.data) {
          setBlogs(res.data.allBlogs);
        }
      } catch (error) {
        setBlogs([]);
        console.error("Error fetching blogs:", error);
      }
    };
    GetBlogs();
  }, []);

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
    const maxPages = Math.ceil(blogs.length / 3) - 1;
    if (pages < maxPages) {
      setIsTransitioning(true);
      setTimeout(() => {
        setPages(pages + 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <div className="w-full mx-auto md:pt-20 pb-16">
      <div className="bg-[#add2fa] md:p-20  pt-14 md:pt-16 p-5">
        <div className="flex items-center flex-col md:flex-row justify-between lg:w-[1400px] w-80 mx-auto">
          {/** Text section **/}
          <div className="lg:w-[500px] space-y-5">
            <p className="text-[15px]">
              By Themadbrains in{" "}
              <span className="text-cyan-600">inspiration</span>
            </p>
            <h1 className="text-[#2F327D] leading-10 font-semibold text-4xl">
              Why Swift UI Should Be on the Radar of Every Mobile Developer
            </h1>
            <p className="text-[#696984] text-[15px] leading-7">
              SwiftUI simplifies mobile app design with a declarative syntax,
              faster previews, and cross-platform support, making it essential
              for modern Apple developers.
            </p>
            <button className="bg-[#49BBBD] text-sm px-5 text-white rounded-lg py-2">
              Start learning now
            </button>
          </div>

          {/** Image section**/}
          <div className="pt-10 md:pt-0">
            <Image
              alt="BlogContainer-image"
              height={200}
              width={200}
              src="/images/bloghed.jpg"
              className="md:w-[550px] w-80 md:h-[350px] h-[220px] rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* BLOG SECTION */}
      <div className="md:w-[1400px] w-80 mx-auto mt-10 font-mFont">
        <div className="space-y-6">
          <h1 className="text-xl font-semibold">Reading blog list</h1>
          <div className="grid lg:grid-cols-4 grid-cols-1 gap-5">
            <div className="relative">
              <h1 className=" text-black font-semibold text-xl absolute top-32 left-10 bg-white px-12 opacity-85 rounded-md">
                UI/UX
              </h1>
              <Image
                alt="blog"
                height={200}
                width={200}
                src="/images/bloghed.jpg"
                className="w-80 h-52 rounded-xl"
              />
            </div>
            <div className="relative">
              <h1 className=" text-black font-semibold text-xl absolute top-32 left-10 bg-white px-12 opacity-85 rounded-md">
                UI/UX
              </h1>
              <Image
                alt="blog"
                height={200}
                width={200}
                src="/images/bloghed.jpg"
                className="w-80 h-52 rounded-xl"
              />
            </div>
            <div className="relative">
              <h1 className=" text-black font-semibold text-xl absolute top-32 left-10 bg-white px-12 opacity-85 rounded-md">
                UI/UX
              </h1>
              <Image
                alt="blog"
                height={200}
                width={200}
                src="/images/bloghed.jpg"
                className="w-80 h-52 rounded-xl"
              />
            </div>
            <div className="relative">
              <h1 className=" text-black font-semibold text-xl absolute top-32 left-10 bg-white px-12 opacity-85 rounded-md">
                UI/UX
              </h1>
              <Image
                alt="blog"
                height={200}
                width={200}
                src="/images/bloghed.jpg"
                className="w-80 h-52 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* RELATED BLOGS */}
      <div className=" w-full mx-auto mt-20 font-mFont bg-[#add2fa]">
        <div className="md:w-[1425px] w-80 mx-auto py-16 space-y-6">
          <h1 className="text-2xl text-gray-900 font-semibold">
            Related Blog{" "}
          </h1>

          <div
            className={`grid lg:grid-cols-3 grid-cols-1 gap-24 transition-transform duration-500 ${
              isTransitioning ? `opacity-0 translate-x-10` : "opacity-100"
            }`}
          >
            {blogs.length > 0 ? (
              blogs.slice(pages * 3, pages * 3 + 3).map((blog) => (
                <Link
                  href={`/blog/${blog._id}`}
                  onClick={() => handleUpsert(blog?._id)}
                  key={blog._id}
                >
                  <div className="card bg-base-100 group hover:scale-105 duration-300 overflow-hidden md:w-96 w-80 h-[445px] shadow-xl">
                    <figure className="px-6 pt-6">
                      <Image
                        src={blog?.image}
                        alt="Shoes"
                        height={200}
                        width={200}
                        className="rounded-xl md:h-52 md:w-96 w-80 h-[180px]"
                      />
                    </figure>
                    <div className="pl-7 pt-5 px-5 space-y-3">
                      <h1>{blog?.title.slice(0, 40)}...</h1>
                      <div className="w-10 flex items-center  space-x-4">
                        <Image
                          height={200}
                          width={200}
                          alt="image"
                          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                          className="rounded-full"
                        />
                        <p className="text-gray-600 text-xs">name</p>
                      </div>
                      <p className="text-sm text-gray-600">
                        {blog?.description.slice(0, 100)}
                      </p>
                      <div className="flex items-center pt-4 justify-between">
                        <button className="underline text-gray-400 text-xs">
                          Read more
                        </button>
                        <div className="flex items-center space-x-2 pr-2">
                          <PiEyeThin />
                          <p className="underline text-gray-400 text-xs">
                            {blog?.viewCount}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-xl font-semibold text-white text-center mt-10">
                No blogs found
              </p>
            )}
          </div>

          {/* pagination */}
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
                pages === Math.ceil(blogs.length / 3) - 1
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gray-600"
              } text-white rounded`}
            >
              <MdKeyboardArrowRight size={30} />
            </button>
          </div>
        </div>
      </div>

      {/* MARKETING ARTICLE */}
      <div className="md:w-[1400px] w-64 mx-auto py-16 space-y-5 font-mFont">
        <div className="flex items-center justify-between md:pr-14 pr-5">
          <h1 className="md:text-xl font-semibold">Marketing Articles</h1>
          <button
            onClick={() => {
              setMarketingPage(courses.length);
              setMarketingData(true);
            }}
            className={`text-sm text-gray-400 ${marketingData && "hidden"} `}
          >
            Show all
          </button>
          <button
            onClick={() => {
              setMarketingPage(0);
              setMarketingData(false);
            }}
            className={`text-sm text-gray-900  ${
              marketingData ? "block" : "hidden"
            }`}
          >
            Show less
          </button>
        </div>
        <div className="grid md:grid-cols-4 gap-20">
          {courses.length > 0 ? (
            courses
              .slice(0, marketingData ? courses.length : marketingPages * 4 + 4)
              .map((course) => (
                <Link
                  href={`/courses/${course._id}`}
                  onClick={() => handleCourseCountView(course?._id)}
                  key={course._id}
                  className="card transition-all transform duration-300 ease-in-out bg-base-100 w-64 mx-auto md:mx-0 h-[410px] shadow-xl"
                >
                  <figure className="px-6 pt-6">
                    <Image
                      height={200}
                      width={200}
                      src={course.image}
                      alt="Shoes"
                      className="rounded-xl w-80 h-36"
                    />
                  </figure>
                  <div className="pl-7 pt-5 px-5 space-y-3">
                    <div className="flex items-center justify-between pr-3">
                      <div className="flex items-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 21 21"
                          fill="none"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="9"
                            height="9"
                            rx="1.5"
                            stroke="#D9D9D9"
                          />
                          <rect
                            x="0.5"
                            y="11.5"
                            width="9"
                            height="9"
                            rx="1.5"
                            stroke="#D9D9D9"
                          />
                          <rect
                            x="11.5"
                            y="11.5"
                            width="9"
                            height="9"
                            rx="1.5"
                            stroke="#D9D9D9"
                          />
                          <rect
                            x="11.5"
                            y="0.5"
                            width="9"
                            height="9"
                            rx="1.5"
                            stroke="#D9D9D9"
                          />
                        </svg>
                        <p className="text-xs text-gray-400">{course.tag}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MdOutlineWatchLater
                          className="text-gray-400"
                          size={20}
                        />
                        <p className="text-xs text-gray-400">3 Month</p>
                      </div>
                    </div>
                    <h1 className="font-semibold">
                      {course.title.slice(0, 33)}..
                    </h1>

                    <p className="text-sm text-gray-600">
                      {course.description.slice(0, 70)}..
                    </p>
                    <div className="flex items-center justify-between pr-3">
                      <div className="w-8 flex items-center  space-x-4">
                        <Image
                          height={200}
                          width={200}
                          alt="image"
                          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                          className="rounded-full"
                        />
                        <p className="text-gray-600 text-xs">
                          {course.name ? "name" : "admin"}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <p className="line-through">800</p>
                        <p className="text-gray-400">${course.price}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
          ) : (
            <p> Not Found </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogContainer;
