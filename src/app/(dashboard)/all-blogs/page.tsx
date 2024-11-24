"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
export interface AllBlogs {
  _id: string;
  title: string;
  description: string;
  tag: string[];
  image: string;
}
const AllBlogs = () => {
  const [blogs, setBlogs] = useState<AllBlogs[]>([]);

  //GET ALL BLOGS IN DB
  useEffect(() => {
    const Getblogs = async () => {
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
    Getblogs();
    // Revalidate every 10 seconds
    const interval = setInterval(Getblogs, 10000);

    return () => clearInterval(interval);
  }, []);

  //DELETING A SPECIFIC BLOGS
  const deleteBlog = async (id: string): Promise<void> => {
    try {
      const res = await axios.delete(`http://localhost:3000/add-blogs/api`, {
        data: { id },
      });
      if (res.data.message === "deleted blog") {
        toast.success("blog is deleted successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="mt-10 md:w-[1400px] mx-auto border font-mFont pb-8 bg-cyan-600 ">
      <div className="grid grid-cols-6 text-center border-b border-r border-l items-center p-2">
        <p className="text-xl font-semibold text-gray-50">No</p>
        <p className="text-xl font-semibold text-gray-50">Title</p>
        <p className="text-xl font-semibold text-gray-50">Description</p>
        <p className="text-xl font-semibold text-gray-50">Tags</p>
        <p className="text-xl font-semibold text-gray-50">Image</p>
        <p className="text-xl font-semibold text-gray-50">Action</p>
      </div>
      {blogs.length > 0 ? (
        blogs.map((blog, index) => (
          <div
            key={blog._id}
            className="grid grid-cols-6 text-center space-y-4 mt-4 items-center text-white text-[17px]"
          >
            <p>{index + 1}</p>
            <p>{blog.title}</p>
            <p>{blog.description.slice(0, 70)}..</p>
            <p>{blog.tag.join(" , ")}</p>
            <div className="w-14 mx-auto h-14">
              <Image
                height={200}
                width={200}
                alt="image"
                src={blog.image}
                className="rounded-full w-14 mx-auto h-14"
              />
            </div>
            <div className="space-x-5">
              <button
                onClick={() => deleteBlog(blog?._id)}
                className="bg-red-500 px-5 py-1 rounded-lg"
              >
                Delete
              </button>
              <button className="bg-green-500 px-5 py-1 rounded-lg">
                Update
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-xl font-semibold text-white text-center mt-10">
          No blogs found
        </p>
      )}
    </div>
  );
};

export default AllBlogs;
