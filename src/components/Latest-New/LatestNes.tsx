"use client";

import { AllBlogs } from "@/app/(dashboard)/all-blogs/page";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LatestNes = () => {
  const [blogs, setBlogs] = useState<AllBlogs[]>([]);

  //UPSERT VIEW COUNT
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
  return (
    <div className="md:w-[1036px] w-[380px] mx-auto font-mFont lg:mt-64 mt-44 md:mb-44 mb-14">
      <div className="text-center space-y-5">
        <h1 className="text-3xl font-semibold text-[#2F327D]">
          Latest News and Resources
        </h1>
        <p className="md:w-[550px] w-80 mx-auto text-[#696984]">
          See the developments that have occurred to LWM in the world
        </p>
      </div>
      {/*Newses*/}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-16 md:gap-2 pt-20 lg:space-y-0 space-y-10">
        {/* LARGE DEVICE OF LEFT HAND SECTION  */}
        {blogs.length > 0 ? (
          blogs.slice(0, 1).map((blog) => (
            <>
              <Link
                href={`/blog/${blog._id}`}
                onClick={() => handleUpsert(blog._id)}
                key={blog._id}
                className="md:w-[420px] h-[400px] space-y-8 "
              >
                <Image
                  alt="news"
                  className="md:w-[420px] w-[380px] h-[250px] rounded-lg"
                  height={200}
                  width={200}
                  src={blog.image}
                />
                <div>
                  <button className="px-6 py-1 bg-[#49BBBD] text-white rounded-full">
                    News
                  </button>
                  <div className="space-y-4 pt-4">
                    <h1 className="text-[#252641] w-96 font-semibold">
                      Class adds $30 million to its balance sheet for a
                      Zoom-friendly edu-tech solution
                    </h1>
                    <p className="text-[#696984] text-sm pb-2 w-96">
                      Class, launched less than a year ago by Blackboard
                      co-founder Michael Chasen, integrates exclusively...
                    </p>
                    <Link className="underline text-[#696984] text-xs" href="/">
                      Read more
                    </Link>
                  </div>
                </div>
              </Link>
            </>
          ))
        ) : (
          <p>Not Found</p>
        )}

        {/* LARGE DEVICE OF RIGHT HAND SECTION */}

        <div className="space-y-10">
          {blogs.length > 0 ? (
            blogs.slice(0, 3).map((blog) => (
              <div key={blog._id} className="space-y-10">
                <Link
                  href={`/blog/${blog._id}`}
                  onClick={() => handleUpsert(blog._id)}
                  className="flex items-center space-x-4"
                >
                  <Image
                    alt="news"
                    className="md:w-[460px] w-36 md:h-[120px] object-center object-cover rounded-lg h-28"
                    height={200}
                    width={200}
                    src={blog.image}
                  />
                  <div className="space-y-2">
                    <h1 className="font-semibold text-sm text-[18px]">
                      Class Technologies Inc. Closes $30 Million Series A
                      Financing to Meet High Demand
                    </h1>
                    <p className="md:text-sm text-xs text-[#696984]">
                      Class Technologies Inc., the company that created
                      Class,...
                    </p>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p>Not Found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LatestNes;
