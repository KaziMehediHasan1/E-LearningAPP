"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

// interface for course..
interface Course {
  _id: string;
  image: string | null;
  title: string;
  price: number;
  tag: string;
  description: string;
  longDescription: string;
}

const CourseDetailsPage = ({ params }: { params: { id: string } }) => {
  const [courses, setCourses] = useState<Course[]>([]);

  //GET ALL BLOGS IN DB
  useEffect(() => {
    const getCourse = async () => {
      try {
        const res = await axios.get("http://localhost:3000/all-course/api");
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
  
  return (
    <div className="w-full mx-auto md:mt-20 font-mFont mb-20">
      {courses?.map(
        (course) =>
          course._id === params.id && (
            //PARENT DIV
            <div key={course._id}>
              <img
                src={course.image}
                className="md:w-full w-[400px] mx-auto md:mx-0 md:mt-0 mt-1 md:rounded-none rounded-md md:h-96 h-[250px] bg-cover object-cover object-contain md:relative"
              />
              {/* CREATE OVERVIEW AND RIGHT OF PRICE SECTION */}
              <div className="flex md:justify-between items-center md:w-[80%] w-[350px] mx-auto ">
                {/* COURSE REVIEW SECTION */}
                <div className="mt-8">
                  <div className="grid md:grid-cols-5 grid-cols-3 md:gap-x-24  gap-y-5">
                    <p className="bg-slate-300 text-gray-800 text-sm rounded-lg w-24 py-2 text-center">
                      Overview
                    </p>
                    <p className="bg-slate-300 text-gray-800 text-sm rounded-lg w-24 py-2 text-center">
                      Overview
                    </p>
                    <p className="bg-slate-300 text-gray-800 text-sm rounded-lg w-24 py-2 text-center">
                      Overview
                    </p>
                    <p className="bg-slate-300 text-gray-800 text-sm rounded-lg w-24 py-2 text-center">
                      Overview
                    </p>
                    <p className="bg-slate-300 text-gray-800 text-sm rounded-lg w-24 py-2 text-center">
                      Overview
                    </p>
                  </div>
                  <div className="bg-[#9fcdff] md:w-full w-[350px] md:px-10 md:h-[450px] h-[640px] rounded-lg mt-10 space-y-5">
                    {/* REVIEW SECTION */}
                    <div className="flex flex-col md:flex-row items-center justify-between space-x-5  py-8">
                      <div className="bg-white w-64 py-8 rounded-lg space-y-2">
                        <h1 className="text-center">4 out of 5</h1>
                        <div className="flex items-center space-x-2 justify-center">
                          <AiFillStar className="text-yellow-300" />
                          <AiFillStar className="text-yellow-300" />
                          <AiFillStar className="text-yellow-300" />
                          <AiFillStar className="text-yellow-300" />
                          <AiFillStar className="text-yellow-300" />
                        </div>
                        <p className="text-center">Top Rating</p>
                      </div>
                      {/* PROGRESS BAR */}
                      <div className="space-y-1 md:mt-0 mt-6">
                        <div className="flex items-center justify-center md:justify-start space-x-3">
                          <p> 5 Stars</p>
                          <progress
                            className="progress md:w-72 w-44"
                            value={89}
                            max="100"
                          ></progress>
                        </div>
                        <div className="flex items-center justify-center md:justify-start space-x-3">
                          <p>4 Stars</p>
                          <progress
                            className="progress md:w-72 w-44"
                            value={64}
                            max="100"
                          ></progress>
                        </div>
                        <div className="flex items-center justify-center md:justify-start space-x-3">
                          <p>3 Stars</p>
                          <progress
                            className="progress md:w-72 w-44"
                            value={50}
                            max="100"
                          ></progress>
                        </div>
                        <div className="flex items-center justify-center md:justify-start space-x-3">
                          <p>2 Stars</p>
                          <progress
                            className="progress md:w-72 w-44"
                            value={40}
                            max="100"
                          ></progress>
                        </div>
                        <div className="flex items-center justify-center md:justify-start space-x-3">
                          <p>1 Stars</p>
                          <progress
                            className="progress md:w-72 w-44"
                            value={20}
                            max="100"
                          ></progress>
                        </div>
                      </div>
                    </div>
                    {/* STUDENT REVIEW SECTION */}
                    <div className="space-y-3 md:px-0 px-7">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <img
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            className="rounded-full avatar w-12"
                          />
                          <div className="container">
                            <p>name</p>
                            <div className="flex items-center justify-between">
                              <AiFillStar />
                              <p>ss</p>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm md:text-xl">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Laudantium, deserunt!
                        </p>
                      </div>
                      <div className="w-full h-[1px] bg-gray-200"></div>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <img
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            className="rounded-full avatar w-12"
                          />
                          <div className="container">
                            <p>name</p>
                            <div className="flex items-center justify-between">
                              <AiFillStar />
                              <p>ss</p>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm md:text-xl">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Laudantium, deserunt!
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ONLY FOR MOBILE DEVICE | IS IT PRICING SECTION */}
                  <div className="bg-red-200 mt-8 md:hidden block rounded-lg p-3">
                    <div className="space-y-5">
                      <img
                        src={course.image}
                        alt="course"
                        className="w-80 mx-auto rounded-xl h-52"
                      />
                      <div className="flex items-center justify-between px-4">
                        <h1 className="text-xl font-semibold hover:underline">
                          $ {course.price}
                        </h1>
                        <p className="text-gray-50 font-semibold text-[17px]">
                          50% Off
                        </p>
                      </div>
                      <button className="btn w-full">Buy Now</button>
                    </div>

                    <div className="mt-5 px-4 pb-2">
                      <div className="mt-5 text-center">
                        <h1 className="text-sm font-semibold">
                          Share this course
                        </h1>
                        <div className="flex items-center justify-center space-x-4 pt-3">
                          <FaTwitter
                            className="bg-[#49BBBD] text-white p-1 rounded-full"
                            size={25}
                          />
                          <FaFacebook
                            className="bg-[#49BBBD] text-white p-1 rounded-full"
                            size={25}
                          />
                          <FaYoutube
                            className="bg-red-500 text-white p-1 rounded-full"
                            size={25}
                          />
                          <FaInstagram
                            className="bg-[#49BBBD] text-white p-1 rounded-full"
                            size={25}
                          />
                          <FaWhatsapp
                            className="bg-[#49BBBD] text-white p-1 rounded-full"
                            size={25}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PRICE AND BUY SECTION */}
                <div className="w-[40%] hidden md:block absolute right-0  top-80">
                  <div className="w-80 mx-auto bg-white h-[700px] rounded-xl">
                    <div className="p-4">
                      <img
                        src={course.image}
                        alt="course"
                        className="rounded-t-xl border h-44 w-full"
                      />
                      <div className="p-2 py-4">
                        <section className="flex items-center justify-between">
                          <h1 className="text-2xl font-semibold">
                            $ {course.price}
                          </h1>
                          <p className="text-gray-400 font-semibold ">
                            50% Off
                          </p>
                        </section>
                        <p className="text-sm text-[#49BBBD] text-center pt-3">
                          11 hour left at this price
                        </p>
                        <button className="bg-[#49BBBD] py-2 mt-4 w-full rounded-lg text-white">
                          Buy Now
                        </button>
                        <div className="w-full h-[1px] bg-[#49BBBD] mt-6"></div>
                        <div className="mt-6">
                          <h1 className="text-xl font-semibold">
                            {course.title}
                          </h1>
                          <div className="space-y-3 mt-3">
                            <div className="flex items-center space-x-4">
                              <svg
                                className="w-7"
                                viewBox="0 0 22 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  id="ï‚£"
                                  d="M18.8906 10.5L20.6875 8.74219C21.2344 8.23438 20.9609 7.33594 20.2578 7.17969L17.8359 6.55469L18.5 4.13281C18.6953 3.42969 18.0703 2.76562 17.3672 2.96094L14.9453 3.66406L14.3203 1.20312C14.1641 0.539062 13.2266 0.265625 12.7188 0.8125L11 2.60938L9.24219 0.8125C8.73438 0.265625 7.79688 0.5 7.64062 1.20312L7.01562 3.66406L4.59375 2.96094C3.89062 2.76562 3.26562 3.42969 3.46094 4.13281L4.125 6.55469L1.70312 7.17969C1 7.33594 0.726562 8.23438 1.27344 8.74219L3.07031 10.5L1.27344 12.2578C0.726562 12.7656 1 13.6641 1.70312 13.8594L4.125 14.4844L3.46094 16.9062C3.26562 17.6094 3.89062 18.2344 4.59375 18.0391L7.01562 17.375L7.64062 19.7969C7.83594 20.5391 8.73438 20.7344 9.24219 20.2266L11 18.4297L12.7188 20.2266C13.2266 20.7734 14.125 20.5391 14.3203 19.7969L14.9453 17.375L17.3672 18.0391C18.0703 18.2344 18.6953 17.6094 18.5 16.9062L17.8359 14.4844L20.2578 13.8594C20.9609 13.6641 21.2344 12.7656 20.6875 12.2578L18.8906 10.5Z"
                                  fill="#49BBBD"
                                ></path>
                              </svg>
                              <p className="text-sm space-x-2 text-[#49BBBD]">
                                Money Back Guarantee
                              </p>
                            </div>
                            <div className="flex items-center space-x-4">
                              <svg
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-7"
                              >
                                <path
                                  id="ï€°"
                                  d="M20 5.125C20 4.10938 19.1406 3.25 18.125 3.25H14.6875L14.1797 2C13.9062 1.25781 13.2031 0.75 12.4219 0.75H7.53906C6.75781 0.75 6.05469 1.25781 5.78125 2L5.3125 3.25H1.875C0.820312 3.25 0 4.10938 0 5.125V16.375C0 17.4297 0.820312 18.25 1.875 18.25H18.125C19.1406 18.25 20 17.4297 20 16.375V5.125ZM14.6875 10.75C14.6875 13.3672 12.5781 15.4375 10 15.4375C7.38281 15.4375 5.3125 13.3672 5.3125 10.75C5.3125 8.17188 7.38281 6.0625 10 6.0625C12.5781 6.0625 14.6875 8.17188 14.6875 10.75ZM13.4375 10.75C13.4375 8.875 11.875 7.3125 10 7.3125C8.08594 7.3125 6.5625 8.875 6.5625 10.75C6.5625 12.6641 8.08594 14.1875 10 14.1875C11.875 14.1875 13.4375 12.6641 13.4375 10.75Z"
                                  fill="#49BBBD"
                                ></path>
                              </svg>
                              <p className="text-sm space-x-2 text-[#49BBBD]">
                                Access on all devices
                              </p>
                            </div>
                            <div className="flex items-center space-x-4">
                              <svg
                                viewBox="0 0 15 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6"
                              >
                                <path
                                  id="ï…œ"
                                  d="M8.75 5.8125V0.5H0.9375C0.390625 0.5 0 0.929688 0 1.4375V19.5625C0 20.1094 0.390625 20.5 0.9375 20.5H14.0625C14.5703 20.5 15 20.1094 15 19.5625V6.75H9.6875C9.14062 6.75 8.75 6.35938 8.75 5.8125ZM11.25 15.0312C11.25 15.3047 11.0156 15.5 10.7812 15.5H4.21875C3.94531 15.5 3.75 15.3047 3.75 15.0312V14.7188C3.75 14.4844 3.94531 14.25 4.21875 14.25H10.7812C11.0156 14.25 11.25 14.4844 11.25 14.7188V15.0312ZM11.25 12.5312C11.25 12.8047 11.0156 13 10.7812 13H4.21875C3.94531 13 3.75 12.8047 3.75 12.5312V12.2188C3.75 11.9844 3.94531 11.75 4.21875 11.75H10.7812C11.0156 11.75 11.25 11.9844 11.25 12.2188V12.5312ZM11.25 9.71875V10.0312C11.25 10.3047 11.0156 10.5 10.7812 10.5H4.21875C3.94531 10.5 3.75 10.3047 3.75 10.0312V9.71875C3.75 9.48438 3.94531 9.25 4.21875 9.25H10.7812C11.0156 9.25 11.25 9.48438 11.25 9.71875ZM15 5.26562C15 5.03125 14.8828 4.79688 14.7266 4.60156L10.8984 0.773438C10.7031 0.617188 10.4688 0.5 10.2344 0.5H10V5.5H15V5.26562Z"
                                  fill="#49BBBD"
                                ></path>
                              </svg>
                              <p className="text-sm space-x-2 text-[#49BBBD]">
                                Certification of completion
                              </p>
                            </div>
                            <div className="flex items-center space-x-4">
                              <svg
                                viewBox="0 0 20 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-7"
                              >
                                <path
                                  id="ï‚€"
                                  d="M12.9688 10H14.4922C14.7266 10 15 9.76562 15 9.53125V4.25781C15 4.02344 14.7266 3.75 14.4922 3.75H12.9688C12.7344 3.75 12.5 4.02344 12.5 4.25781V9.53125C12.5 9.76562 12.7344 10 12.9688 10ZM16.7188 10H18.2422C18.4766 10 18.75 9.76562 18.75 9.53125V0.507812C18.75 0.273438 18.4766 0 18.2422 0H16.7188C16.4844 0 16.25 0.273438 16.25 0.507812V9.53125C16.25 9.76562 16.4844 10 16.7188 10ZM5.46875 10H6.99219C7.22656 10 7.5 9.76562 7.5 9.53125V6.75781C7.5 6.52344 7.22656 6.25 6.99219 6.25H5.46875C5.23438 6.25 5 6.52344 5 6.75781V9.53125C5 9.76562 5.23438 10 5.46875 10ZM9.21875 10H10.7422C10.9766 10 11.25 9.76562 11.25 9.53125V1.75781C11.25 1.52344 10.9766 1.25 10.7422 1.25H9.21875C8.98438 1.25 8.75 1.52344 8.75 1.75781V9.53125C8.75 9.76562 8.98438 10 9.21875 10ZM19.375 12.5H2.5V0.625C2.5 0.3125 2.1875 0 1.875 0H0.625C0.273438 0 0 0.3125 0 0.625V13.75C0 14.4531 0.546875 15 1.25 15H19.375C19.6875 15 20 14.7266 20 14.375V13.125C20 12.8125 19.6875 12.5 19.375 12.5Z"
                                  fill="#49BBBD"
                                ></path>
                              </svg>
                              <p className="text-sm space-x-2 text-[#49BBBD]">
                                32 Moduls
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="w-full h-[1px] bg-[#49BBBD] mt-6"></div>
                        <div className="mt-5 ">
                          <h1 className="text-xl font-semibold">
                            Share this course
                          </h1>
                          <div className="flex items-center space-x-3 pt-2">
                            <FaTwitter
                              className="bg-[#49BBBD] text-white p-1 rounded-full"
                              size={35}
                            />
                            <FaFacebook
                              className="bg-[#49BBBD] text-white p-1 rounded-full"
                              size={35}
                            />
                            <FaYoutube
                              className="bg-red-500 text-white p-1 rounded-full"
                              size={35}
                            />
                            <FaInstagram
                              className="bg-[#49BBBD] text-white p-1 rounded-full"
                              size={35}
                            />
                            <FaWhatsapp
                              className="bg-[#49BBBD] text-white p-1 rounded-full"
                              size={35}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[80%] mx-auto mt-8 space-y-3">
                <h1 className="text-2xl font-semibold underline">
                  Description
                </h1>
                <p className="text-gray-500 leading-8">
                  {course.longDescription}
                </p>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default CourseDetailsPage;
