"use client";

import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div
      id="shape"
      className="w-full  md:mx-auto font-mFont lg:h-[800px] bg-[#41b6b8] lg:pt-16"
    >
      <div className="grid lg:grid-cols-2 mx-auto items-center space-x-5">
        {/** image section **/}
        <div className="lg:w-[768px]">
          <Image
            alt="header-image"
            height={200}
            width={200}
            src="/images/file.png"
            className="lg:w-[550px] w-[280px] h-[380px] lg:h-[735px] mx-auto rounded-b-xl"
          />
          {/** video modal **/}
          <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
            <DialogContent>
              <iframe
                className="w-[100%] md:h-[400px] h-[250px]"
                src="https://www.youtube.com/embed/ctdoIQedJjw?si=3o2KP_jXjhlg0aHA"
                title="YouTube video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        {/** text section **/}
        <div className="lg:w-[768px] mx-auto space-y-5 mt-5 md:mt-0">
          <h1 className="lg:text-6xl text-3xl text-center lg:text-start font-semibold">
            <span className="text-[#F48C06]">Studying</span>{" "}
            <span className="text-white">Online is now much easier</span>
          </h1>
          <p className="text-gray-200 lg:text-sm text-xs px-5 lg:px-0 w-72 lg:w-full mx-auto text-center lg:text-start">
            LWM is an interesting platform that will teach you in more an
            interactive way
          </p>
          <div className="lg:flex items-center lg:space-x-4 text-center">
            <button className="bg-[#7fcfd1] rounded-full md:px-5 px-3 py-2 md:py-3 text-white font-semibold lg:text-sm text-xs">
              Join for free
            </button>
            <div className="flex items-center justify-center lg:justify-start lg:space-x-3 ">
              <svg
                onClick={handleClickOpen}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 200"
                fill="none"
                className="cursor-pointer pt-4 lg:w-[100px] w-16 h-[100px]"
              >
                <g filter="url(#filter0_d_10_1082)">
                  <circle cx="98" cy="80" r="50" fill="white" />
                </g>
                <path
                  d="M112.575 79.8097C113.221 80.1983 113.221 81.135 112.575 81.5236L91.5154 94.1891C90.8489 94.5899 90 94.1099 90 93.3321L90 68.0012C90 67.2235 90.8489 66.7434 91.5154 67.1443L112.575 79.8097Z"
                  fill="#23BDEE"
                />
                <defs>
                  <filter
                    id="filter0_d_10_1082"
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
                    <feOffset dx="2" dy="20" />
                    <feGaussianBlur stdDeviation="30" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.239854 0 0 0 0 0.607896 0 0 0 0 0.725 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_10_1082"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_10_1082"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <button className="text-sm lg:text-[17px]">
                Watch how it works
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
