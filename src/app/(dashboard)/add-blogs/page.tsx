"use client";
import React from "react";
import axios from "axios";
import { useRef, useState } from "react";
import { PiEyeThin } from "react-icons/pi";
import { toast } from "react-toastify";
import { TagsInput } from "react-tag-input-component";

const AddBlogs = () => {
  //IMG-BB API & UPLOAD FORM IMAGE IN THE IMG-BB HOSTING SITE
  const api_key = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
  const api_Url = `https://api.imgbb.com/1/upload?key=${api_key}`;
  //ANOTHER SATE
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tag, setTag] = React.useState(["Learn"]);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [hostImages, setHostImages] = useState<string | null>(null);
  const imageRef = useRef<HTMLInputElement | null>(null);
  const [postSuccess, setPostSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  //IMAGE UPLOADING AND PREVIEW SHOWING HANDLER
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const imageUrl = URL.createObjectURL(file);
    setImagePreview(imageUrl);
    // Prepare FormData for ImgBB
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post(api_Url, formData);
      if (res.data.success) {
        setHostImages(res.data.data.url);
      }
    } catch (error) {
      setHostImages(null);
      console.log(error);
    }
  };

  //INTERFACE OF FORMDATA..
  interface FormData {
    title: string;
    description: string;
    tag: string[];
    image: string | null;
  }

  // RESET FORM DATA IF DATA IS PREV. UPLOADED IN DB..
  const resetForm = () => {
    setTitle("");
    setDescription("");
    setTag(["Learn"]);
    setImagePreview(null);
    setHostImages(null);
  };

  //FORM SUBMITTING HANDLER
  const handlePostBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const obj: FormData = {
      title,
      description,
      tag,
      image: hostImages,
    };

    if (!title || !description || !tag.length) {
      toast.error("Please fill in all fields.");
      setLoading(false);
      return;
    }
    try {
      const res = await axios.post("/add-blogs/api", obj);
      if (res.data) {
        setPostSuccess(true);
        setLoading(false);
        toast.success("Blog posted successfully");
        resetForm();
      }
    } catch (error) {
      console.error("Error posting blog:", error);
      toast.error("Failed to post the blog. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="p-5">
      <div className="font-mFont">
        
        {/* ADD BLOGS BANNER */}
        <div
          className="h-64 shadow-xl relative rounded-lg overflow-hidden mt-3 mb-20"
          style={{
            backgroundImage: `url('/images/blogbanner.jpg')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-gray-900 bg-opacity-60">
            <div className=" absolute top-16 left-[10%]">
              <div className="flex  items-center justify-evenly">
                <div className="space-y-5 w-[60%]">
                  <h1 className="text-white font-semibold text-xl">
                    ADD YOUR RELATED BLOGS{" "}
                    <span className=" text-green-400">- - - -</span>
                  </h1>
                  <p className=" text-white font-semibold text-4xl ">
                    Adding Value: Educational Blogs to Support Your Course
                    <span className=" text-green-400">Progress</span>
                  </p>
                </div>
                <button className="bg-yellow-50 shadow-xl rounded-xl px-6 py-3 btn hover:text-white font-semibold shadow-gray-400">
                  Create Blog
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* BLOG ADDING FORM */}
        <div className="flex justify-center space-x-10 h-[445px]">
          <div className="w-[70%] border-2 border-white rounded-md p-5">
            <form onSubmit={handlePostBlog} className=" pt-8 space-y-8">
              <p className="text-gray-500 text-center font-semibold ">
                Please add the required fields: image, title, short description,
                tow tag.
              </p>
              <div className="flex items-center space-x-5 justify-center">
                <div className="flex flex-col space-y-2">
                  <label className="font-semibold text-gray-600">
                    Blog Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    ref={imageRef}
                    onChange={handleImageUpload}
                    placeholder="Enter Blog Title"
                    className="px-5 py-2 rounded-lg outline-none border border-cyan-600 w-96"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-semibold text-gray-600">
                    Enter Blog Title
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter Blog Title"
                    className="px-5 py-[10px] rounded-lg outline-none border text-gray-600 bg-transparent border-cyan-600  w-96"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-5 justify-center">
                <div className="flex flex-col space-y-2">
                  <label className="font-semibold text-gray-600">
                    Enter Blog Description
                  </label>
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter Blog Description"
                    className="px-5 py-[10px] rounded-lg outline-none border text-gray-600 bg-transparent border-cyan-600  w-96"
                  />
                </div>
                <div className="flex flex-col flex-wrap space-y-2">
                  <label className="font-semibold text-gray-600">
                    Enter Blog Tags
                  </label>
                  <div className="py-[5px] rounded-lg outline-non text-gray-600 bg-transparent border-cyan-600  w-96">
                    <TagsInput
                      value={tag}
                      onChange={(newTags) =>
                        setTag(
                          newTags
                            .filter((t) => t.trim() !== "")
                            .map((t) => t.trim())
                        )
                      }
                      placeHolder="Enter tags"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[74%] mx-auto text-center py-[10px] rounded-lg text-white hover:bg-green-950 group bg-slate-500">
                <button
                  type="submit"
                  className="group-hover:scale-x-95 duration-150 "
                >
                  {loading == true ? (
                    <span className="loading loading-ring loading-md"></span>
                  ) : (
                    "ADD BLOG"
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* PREVIEW CARDS */}
          <div className="card bg-base-100 w-96 h-[445px] shadow-xl">
            <figure className="px-6 pt-6">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Shoes"
                  className="rounded-xl h-[200px] w-[480px]"
                />
              ) : (
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                  className="rounded-xl h-[200px] w-[480px]"
                />
              )}
            </figure>
            <div className="pl-7 pt-5 px-5 space-y-3">
              <h1>{title ? title.slice(0, 37) : "Enter A Blog Title"}..</h1>
              <div className="w-10 flex items-center  space-x-4">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  className="rounded-full"
                />
                <p className="text-gray-600 text-xs">name</p>
              </div>
              <p className="text-sm text-gray-600">
                {description
                  ? description.slice(0, 38)
                  : "Enter Blog Description"}
              </p>
              <div className="flex items-center justify-between">
                <button className="underline text-gray-400 text-xs">
                  Read more
                </button>
                <div className="flex items-center space-x-2 pr-2">
                  <PiEyeThin />
                  <p className="underline text-gray-400 text-xs">250</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AddBlogs;
