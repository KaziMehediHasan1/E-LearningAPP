"use client";
import AttendanceChart from "@/components/DashboardCharts/Attendence";
import BuyingCourse from "@/components/DashboardCharts/ByingCourse";
import MostViewCharts from "@/components/DashboardCharts/MostViewCharts";
import RadialBarChartPage from "@/components/DashboardCharts/RadialBarChart";
import VisitorChartPage from "@/components/DashboardCharts/VisitorChart";
import { useEffect, useState } from "react";
import axios from "axios";

const DashboardMain = () => {
  const [courses, setCourses] = useState<number>(0);
  const [blogs, setBlogs] = useState<number>(0);
  const [teacher, setTeacher] = useState<number>(0);
  const [student, setStudent] = useState<number>(0);
  // GET STUDENTS AND TEACHERS
  useEffect(() => {
    const GetUsers = async () => {
      try {
        const res = await axios.get("/Register/api");
        const getStudent = res?.data?.getUser?.filter(
          (user) => user?.role === "student"
        );
        setStudent(getStudent.length);
        const getTeacher = res?.data?.getUser?.filter(
          (user) => user?.role === "teacher"
        );
        setTeacher(getTeacher.length);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    GetUsers();
     // Revalidate every 10 seconds
     const interval = setInterval(GetUsers, 10000);

     return () => clearInterval(interval);
  }, []);
  // GET TOTAL COURSE
  useEffect(() => {
    const getCourse = async () => {
      try {
        const res = await axios.get("/all-course/api");
        if (res.data) {
          setCourses(res.data.getCourses);
        }
      } catch (error) {
        setCourses(0);
        console.error("Error fetching blogs:", error);
      }
    };
    getCourse();
     // Revalidate every 10 seconds
     const interval = setInterval(getCourse, 10000);

     return () => clearInterval(interval);
  }, []);
  // GET TOTAL BLOGS
  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await axios.get("/add-blogs/api");
        console.log(res.data);
        if (res.data) {
          setBlogs(res.data.allBlogs);
        }
      } catch (error) {
        setBlogs(0);
        console.error("Error fetching blogs:", error);
      }
    };
    getBlogs();
     // Revalidate every 10 seconds
     const interval = setInterval(getBlogs, 10000);

     return () => clearInterval(interval);
  }, []);
  return (
    <div className="p-5">
      {/* CARDS */}
      <div className="grid grid-cols-4">
        {/* STUDENTS CARD */}
        <div className="h-44 shadow-xl shadow-blue-200 relative w-5/6 rounded-lg overflow-hidden mt-3 mb-20">
          <div className="absolute inset-0 bg-gray-300">
            <div className=" absolute top-8 left-[70px]">
              <h1 className="text-3xl font-semibold">Total Students</h1>

              <p className="text-6xl font-bold text-center pt-2  opacity-90">
                {student}
              </p>
            </div>
          </div>
        </div>

        {/*  TEACHER CARD */}
        <div className="h-44 shadow-xl shadow-green-200 relative w-5/6 rounded-lg overflow-hidden mt-3 mb-20">
          <div className="absolute inset-0 bg-green-300">
            <div className=" absolute top-8 left-[70px]">
              <h1 className="text-3xl font-semibold">Total Teacher</h1>
              <p className="text-6xl font-bold text-center pt-2 pl-5 opacity-90">
                {teacher}
              </p>
            </div>
          </div>
        </div>

        {/*  COURSE CARD */}
        <div className="h-44 shadow-xl shadow-blue-200 relative w-5/6 rounded-lg overflow-hidden mt-3 mb-20">
          <div className="absolute inset-0 bg-gray-300">
            <div className=" absolute top-8 left-[70px]">
              <h1 className="text-3xl font-semibold">Total Course</h1>
              <p className="text-6xl font-bold text-center pt-2 pl-5 opacity-90">
                {courses.length}
              </p>
            </div>
          </div>
        </div>

        {/*  BLOGS CARD */}
        <div className="h-44 shadow-xl shadow-green-200 relative w-5/6 rounded-lg overflow-hidden mt-3 mb-20">
          <div className="absolute inset-0 bg-green-300">
            <div className=" absolute top-8 left-[80px]">
              <h1 className="text-3xl font-semibold">Total Blogs</h1>
              <p className="text-6xl font-bold text-center pt-2 pl-5 opacity-90">
                {blogs.length}
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
        <BuyingCourse />
      </div>
    </div>
  );
};

export default DashboardMain;
