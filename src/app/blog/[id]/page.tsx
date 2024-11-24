"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

interface Blog {
  _id: string;
  title: string;
  description: string;
  image: string;
  tag: string[];
}

const BlogDetailsPage = ({ params }: { params: { id: string } }) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [id, setId] = useState<string | null>(null);

  // Unwrap `params`
  useEffect(() => {
    if (params && params.id) {
      setId(params.id);
    }
  }, [params]);

  // Fetch Blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:3000/add-blogs/api");
        setBlogs(response.data.allBlogs || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  if (!id) {
    return <div>Loading blog details...</div>;
  }

  // Find the specific blog
  const blog = blogs.find((b) => b._id === id);

  if (!blog) {
    return <div>Blog not found!</div>;
  }

  return (
    <div className="w-full mx-auto md:mt-20 font-mFont mb-20">
      <Image
        height={1080}
        width={1980}
        src={blog.image}
        alt="blog"
        className="md:w-full w-[400px] mt-1 mx-auto md:mx-0 md:h-[450px] h-52 rounded-lg md:rounded-none object-cover"
      />
      <div className="w-[80%] mx-auto mt-10 space-y-5">
        <h1 className="text-[#2F327D] text-3xl font-semibold">{blog.title}</h1>
        <p className="text-gray-600 leading-7">{blog.description}</p>
        <div className="flex items-center space-x-10 pb-5">
          {blog.tag.map((t) => (
            <p key={t} className="bg-gray-200 px-8 py-2 rounded-full">
              {t}
            </p>
          ))}
        </div>
        <div className="bg-slate-400 w-full h-[1px]"></div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              height={200}
              width={200}
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
  );
};

export default BlogDetailsPage;
