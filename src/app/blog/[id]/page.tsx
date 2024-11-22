"use client";

import { AllBlogs } from "@/app/(dashboard)/all-blogs/page";
import axios from "axios";
import { useEffect, useState } from "react";

const BlogDetailsPage = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const [blogs, setBlogs] = useState<AllBlogs[]>([]);
  //GET ALL BLOGS IN DB
  useEffect(() => {
    const getBlogs = async () => {
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
    getBlogs();
  }, []);
  

  return (
    <div className="w-full mx-auto md:mt-20 font-mFont mb-20">
      {blogs.map((blog) => (
        <>
          {blog._id === params.id && (
            <div>
              <img
                src={blog.image}
                alt="blog"
                className="md:w-full w-[400px] mt-1 mx-auto md:mx-0 md:h-[450px] h-52 rounded-lg md:rounded-none object-cover"
              />
              <div className="w-[80%] mx-auto mt-10 space-y-5">
                <h1 className="text-[#2F327D] text-3xl font-semibold">
                  {blog.title}
                </h1>
                <p className="text-gray-600 leading-7">{blog.description}</p>
                <div className="flex items-center space-x-10 pb-5">
                  {blog.tag.map((t) => {
                    return (
                      <p key={t} className="bg-gray-200 px-8 py-2 rounded-full">
                        {t}
                      </p>
                    );
                  })}
                </div>
                <div className="bg-slate-400 w-full h-[1px]"></div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={blog.image}
                      alt="author"
                      className="rounded-xl h-14 w-14"
                    />
                    <div>
                      <p className="text-sm">Written by</p>
                      <h2 className="text-[16px] font-semibold">Lina</h2>
                    </div>
                  </div>
                  <button className="bg-slate-50 btn btn-outline px-16 py-2 border rounded-md">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default BlogDetailsPage;
