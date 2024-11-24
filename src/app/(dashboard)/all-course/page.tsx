"use client";
import axios from "axios";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { PiEyeThin } from "react-icons/pi";
import { toast } from "react-toastify";
const AllCourse = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [longDescription, setLongDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [tag, setTag] = useState<string>("");
  const [hostImages, setHostImages] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const imageRef = useRef<HTMLInputElement | null>(null);
  //IMG-BB API & UPLOAD FORM IMAGE IN THE IMG-BB HOSTING SITE
  const api_key = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
  const api_Url = `https://api.imgbb.com/1/upload?key=${api_key}`;

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
        console.log(res.data);
      }
    } catch (error) {
      setHostImages(null);
      console.log(error);
    }
  };

  // interface for course..
  interface Course {
    image: string | null;
    title: string;
    price: number;
    tag: string;
    description: string;
    longDescription: string;
  }

  // RESET FORM DATA IF DATA IS PREV. UPLOADED IN DB..
  const resetForm = () => {
    setTitle("");
    setDescription("");
    setTag("");
    setImagePreview(null);
    setHostImages(null);
    setLongDescription("");
    setPrice(0);
  };

  const handleCourseData = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const objData: Course = {
      image: hostImages,
      title,
      price,
      tag,
      description,
      longDescription,
    };
    if (
      !hostImages ||
      !title ||
      !price ||
      !tag ||
      !description ||
      !longDescription
    ) {
      toast.error("Please fill in all fields");
      setLoading(false);
      return;
    }
    try {
      const res = await axios.post("/all-course/api", objData);
      if (res.data) {
        toast.success("Course's successfully added");
        setLoading(false);
        resetForm();
      }
    } catch (error) {
      console.log(error);
      toast.error("Course's not adding, please try again");
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-4 space-x-16">
        {/* CARDS */}
        <div
          className="h-44 shadow-xl shadow-blue-200 relative w-5/6 rounded-lg overflow-hidden mt-3 mb-20"
          style={{
            backgroundImage: `url('/images/design.jpg')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-gray-900 bg-opacity-40">
            <div className=" absolute top-8 left-[45px] text-white">
              <h1 className="text-3xl font-semibold text-green-200  ">
                Graphics Design{" "}
              </h1>
              <p className="text-6xl font-bold text-center pt-2 opacity-90">
                20%
              </p>
            </div>
          </div>
        </div>

        <div
          className="h-44 shadow-xl shadow-blue-200 relative w-5/6 rounded-lg overflow-hidden mt-3 mb-20"
          style={{
            backgroundImage: `url('/images/market.jpg')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-gray-900 bg-opacity-40">
            <div className=" absolute top-8 left-[45px] text-white">
              <h1 className="text-3xl font-semibold text-green-200  ">
                Digital Marketing
              </h1>
              <p className="text-6xl font-bold text-center pt-2 opacity-90">
                70%
              </p>
            </div>
          </div>
        </div>
        <div
          className="h-44 shadow-xl shadow-blue-200 relative w-5/6 rounded-lg overflow-hidden mt-3 mb-20"
          style={{
            backgroundImage: `url('/images/photography.jpg')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-gray-900 bg-opacity-40">
            <div className=" absolute top-8 left-[70px] text-white">
              <h1 className="text-3xl font-semibold text-green-200">
                Photography
              </h1>
              <p className="text-6xl font-bold text-center pt-2 pl-5 opacity-90">
                35%
              </p>
            </div>
          </div>
        </div>
        <div
          className="h-44 shadow-xl shadow-blue-200 relative w-5/6 rounded-lg overflow-hidden mt-3 mb-20"
          style={{
            backgroundImage: `url('/images/developer.jpg')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-gray-900 bg-opacity-40">
            <div className=" absolute top-8 left-[45px] text-white">
              <h1 className="text-3xl font-semibold text-green-200">
                App Development
              </h1>
              <p className="text-6xl font-bold text-center pt-2 opacity-90">
                40%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ADD COURSES */}
      <div className="flex justify-center space-x-20 h-[510px] items-center">
        <div className="w-[70%] border-2 border-white rounded-md p-5">
          <form onSubmit={handleCourseData} className=" pt-3 space-y-8">
            <p className="text-gray-500 text-center font-semibold ">
              Please add the required fields: image, title, short description,
              tow tag.
            </p>
            <div className="flex items-center space-x-5 justify-center">
              <div className="flex flex-col space-y-2">
                <label className="font-semibold text-gray-600">Image</label>
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
                  Enter Course Title
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
                  Enter Course Price
                </label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Enter Course price"
                  className="px-5 py-[10px] rounded-lg outline-none border text-gray-600 bg-transparent border-cyan-600  w-96"
                />
              </div>
              <div className="flex flex-col flex-wrap space-y-2">
                <label className="font-semibold text-gray-600">Tag</label>
                <input
                  type="text"
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  placeholder="Enter Blog Tags"
                  className="px-5 py-2 rounded-lg outline-none border text-gray-600 bg-transparent border-cyan-600  w-96"
                />
              </div>
            </div>
            <div className="flex items-center space-x-5 justify-center">
              <div className="flex flex-col space-y-2">
                <label className="font-semibold text-gray-600">
                  Short Description
                </label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter Short Description"
                  className="px-5 py-[10px] rounded-lg outline-none border text-gray-600 bg-transparent border-cyan-600  w-96"
                />
              </div>
              <div className="flex flex-col flex-wrap space-y-2">
                <label className="font-semibold text-gray-600">
                  Long Description
                </label>
                <input
                  type="text"
                  value={longDescription}
                  onChange={(e) => setLongDescription(e.target.value)}
                  placeholder="Enter Long Description"
                  className="px-5 py-2 rounded-lg outline-none border text-gray-600 bg-transparent border-cyan-600  w-96"
                />
              </div>
            </div>
            <div className="w-[73%] mx-auto text-center py-[10px] rounded-lg text-white hover:bg-green-950 group bg-slate-500">
              <button
                type="submit"
                className="group-hover:scale-x-95 duration-150 "
              >
                {loading == true ? (
                  <span className="loading loading-ring loading-md"></span>
                ) : (
                  "ADD COURSE"
                )}
              </button>
            </div>
          </form>
        </div>

        {/* PREVIEW CARDS */}
        <div className="card bg-base-100 w-96 h-[445px] shadow-xl">
          <figure className="px-6 pt-6">
            {imagePreview ? (
              <Image
                height={200}
                width={200}
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
                className="rounded-xl h-[200px] w-[480px]"
              />
            ) : (
              <Image
                height={200}
                width={200}
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
                className="rounded-xl h-[200px] w-[480px]"
              />
            )}
          </figure>
          <div className="pl-7 pt-5 px-5 space-y-3">
            <h1>{title ? title.slice(0, 37) : "Enter A Blog Title"}..</h1>
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
  );
};

export default AllCourse;
