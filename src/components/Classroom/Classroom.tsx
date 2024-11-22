"use client";

import Image from "next/image";
import { useState } from "react";

const Classroom: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };
  return (
    <div className="lg:w-[1250px] w-[360px] mx-auto font-mFont lg:mt-44 mt-14">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 lg:space-y-3 space-y-36">
        {/** Text section on the left side **/}
        <div className="relative lg:w-[600px] w-[350px] mx-auto text-gray-500 space-y-4 pt-10">
          <div className="absolute bg-[#33EFA0] w-14 h-14 top-[40px] rounded-full -left-4 z-0"></div>
          <div className="relative z-10 space-y-5">
            <h1 className="text-3xl font-semibold leading-9 w-[350px]  lg:w-full">
              <span className="text-[#4649a3]">
                Everything you can do in a physical classroom,
              </span>{" "}
              <span className="text-[#00CBBB]"> you can do with LWM</span>
            </h1>
            <p className="text-[#696984] lg:w-[600px] w-[350px]  lg:mx-auto">
              LWM's school management software helps traditional and online
              schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud-based system.
            </p>

            <button className="underline text-[#696984] text-sm">
              Learn more
            </button>
          </div>
        </div>

        {/** Video section on the right side **/}
        <div className="relative w-full max-w-2xl mx-auto">
          {/* Background layers */}
          <div className="absolute hidden md:block bg-[#23BDEE] w-24 h-24 rounded-xl -top-3 -left-3 z-0"></div>
          <div className="absolute hidden md:block bg-[#33EFA0] w-44 h-44 rounded-xl left-[455px] top-[158px] z-0"></div>

          {/* Poster overlay */}
          {!isPlaying && (
            <div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer rounded-lg z-20"
              onClick={handlePlay}
            >
              {/* Poster image */}
              <Image
                height={200}
                width={200}
                src="/images/video.png"
                alt="Video poster"
                className="w-full h-80 object-cover mt-[58px] rounded-lg border-[3px] border-[#23BDEE]"
              />
              {/* Play button */}
              <div className="absolute pt-28">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="150"
                  height="150"
                  viewBox="0 0 190 190"
                  fill="none"
               
                >
                  <g filter="url(#filter0_d_10_882)">
                    <circle cx="93" cy="75" r="35" fill="white" />
                  </g>
                  <path
                    d="M105.575 74.7264C106.221 75.115 106.221 76.0517 105.575 76.4403L87.5154 87.3015C86.8489 87.7024 86 87.2223 86 86.4446L86 64.7221C86 63.9444 86.8489 63.4643 87.5154 63.8652L105.575 74.7264Z"
                    fill="#23BDEE"
                  />
                  <defs>
                    <filter
                      id="filter0_d_10_882"
                      x="0"
                      y="0"
                      width="190"
                      height="190"
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
                      <feOffset dx="2" dy="20" />
                      <feGaussianBlur stdDeviation="30" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.239854 0 0 0 0 0.607896 0 0 0 0 0.725 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_10_882"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_10_882"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          )}

          {/* YouTube Iframe */}
          {isPlaying && (
            <div className="relative z-30">
              <iframe
                className="w-full h-80 rounded-lg border-[3px] border-[#23BDEE]"
                src="https://www.youtube.com/embed/7xCe2m0kiSg?autoplay=1&controls=1&modestbranding=1&rel=0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Classroom;
