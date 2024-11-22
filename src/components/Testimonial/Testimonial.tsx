"use client";
import { IoIosArrowRoundForward, IoMdStarHalf } from "react-icons/io";

const Testimonial: React.FC = () => {
  return (
    <div className="lg:w-[1036px] mx-auto font-mFont mt-64">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
        {/** text section **/}
        <div className="lg:w-[380px] w-80 mx-auto space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-16 h-[1px] bg-[#525596]"></div>
            <h1 className="uppercase text-[16px] text-[#525596]">
              Testimonial
            </h1>
          </div>
          <h1 className="lg:text-4xl text-3xl text-[#525596] font-semibold">
            What They Say?
          </h1>
          <div className="space-y-5 text-[#696984] md:text-[18px]">
            <p>
              LWM has got more than 100k positive ratings from our users around
              the world.{" "}
            </p>
            <p>
              Some of the students and teachers were greatly helped by the
              Skilline.{" "}
            </p>
            <p>Are you too? Please give your assessment </p>
          </div>
          {/*input field*/}
          <div className="border-2 rounded-full flex items-center md:justify-between overflow-hidden lg:w-80 w-64">
            <input
              type="text"
              placeholder="Write your assessment"
              className="md:py-3 py-2 md:px-6 px-[9px] ring-0 outline-none"
            />
            <button className="border rounded-full md:p-3 p-1">
              <IoIosArrowRoundForward size={28} />
            </button>
          </div>
        </div>
        {/** Students review section **/}
        <div className="relative">
          {/* Image */}
          <div className="md:w-[400px] w-[320px] mx-auto md:mx-0 md:h-[400px] h-[280px] rounded-lg overflow-hidden shadow-md">
            <img
              src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
              alt="carousel"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Quote Box */}
          <div className="absolute w-[300px] md:w-[420px] md:p-6 p-2 bg-white shadow-2xl rounded-xl border-l-8 border-red-400 bottom-[-75px] md:left-[72px] left-[100px]">
            <div className="w-[1px] md:h-[100px] h-14 mt-1 md:mt-0 absolute bg-slate-400"></div>
            <p className="md:text-sm text-xs text-[#5F5F7E] leading-6 ml-4">
              "Thank you so much for your help. It's exactly what I've been
              looking for. You won't regret it. It really saves me time and
              effort. TOTC is exactly what our business has been lacking."
            </p>
            <div className="flex justify-between items-center mt-4 ml-4">
              <div className="text-[#696984] md:text-sm text-xs font-semibold">
                Gloria Rose
              </div>
              <div className="flex items-center text-[#696984] text-xs">
                <div className="space-x-1 text-yellow-500">
                  <IoMdStarHalf className="w-5 h-5" />
                  <span>12 reviews at Yelp</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrow */}
          <div className="absolute md:right-[23px] -right-[14px] top-[50%] transform -translate-y-1/2 p-2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="130"
              height="130"
              viewBox="0 0 200 200"
              fill="none"
            >
              <g filter="url(#filter0_d_10_448)">
                <circle cx="100" cy="96" r="40" fill="white" />
              </g>
              <path
                d="M94 86L106 96L94 106"
                stroke="#1EA4CE"
                stroke-width="4"
              />
              <defs>
                <filter
                  id="filter0_d_10_448"
                  x="0"
                  y="0"
                  width="200"
                  height="200"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="30" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.15925 0 0 0 0 0.17238 0 0 0 0 0.4875 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_10_448"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_10_448"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
