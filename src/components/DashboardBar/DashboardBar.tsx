"use client";
import React, { useState } from "react";
import { ImBlog } from "react-icons/im";
import { FaReadme, FaPencilRuler, FaHome } from "react-icons/fa";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { GoCodeReview } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import Link from "next/link";
import { RiMenuFold3Fill, RiMenuFold4Fill } from "react-icons/ri";
import Image from "next/image";

//** Menu bar **//
interface MenuItem {
  icon: React.ReactNode;
  title: string;
  href: string;
}
const menus: MenuItem[] = [
  {
    icon: <RxDashboard className="md:w-7 md:h-7 w-5 h-5 " />,
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: <FaReadme className="md:w-7 md:h-7 w-5 h-5 " />,
    title: "Course",
    href: "/all-course",
  },
  {
    icon: <LiaChalkboardTeacherSolid className="md:w-7 md:h-7 w-5 h-5 " />,
    title: "Teachers",
    href: "/teacher",
  },
  {
    icon: <ImBlog className="md:w-7 md:h-7 w-5 h-5 " />,
    title: "Add Blog",
    href: "/add-blogs",
  },
  {
    icon: <FaPencilRuler className="md:w-7 md:h-7 w-5 h-5 " />,
    title: "All Blogs",
    href: "/all-blogs",
  },

  {
    icon: <GoCodeReview className="md:w-7 md:h-7 w-5 h-5 " />,
    title: "Review",
    href: "/review",
  },
  {
    icon: <CgProfile className="md:w-7 md:h-7 w-5 h-5 " />,
    title: "Profile",
    href: "/profile",
  },
  {
    icon: <AiOutlineUsergroupDelete className="md:w-7 md:h-7 w-5 h-5 " />,
    title: "Users",
    href: "/user",
  },
];

//** conditionally show routes  **//
const DashboardBar = () => {
  const [menuBar, setMenuBar] = useState<boolean>(false);
  console.log(menuBar);
  return (
    <div className="font-mFont">
      {/* MOBILE DEVICE TOGGLE BAR START */}
      <div className="p-4">
        <RiMenuFold4Fill
          onClick={() => setMenuBar(true)}
          className={`${menuBar ? "hidden" : "block"}  w-7 h-7 md:hidden block`}
        />
        <RiMenuFold3Fill
          onClick={() => setMenuBar(false)}
          className={`${menuBar ? "block" : "hidden"} w-7 h-7 md:hidden block`}
        />
      </div>
      {/* MOBILE DEVICE TOGGLE BAR END */}

      <Link href="/" className="md:flex items-center hidden  pl-3 mt-2 md:mt-0">
        <Image
          alt="logo"
          height={40}
          width={40}
          src="/images/logo.png"
          className="md:w-10 md:h-10 w-8 h-8 "
        />
        <span className="text-[18px] px-3 pr-4 md:block hidden font-semibold">
          Learn With Mehedi
        </span>
      </Link>
      {/* FOR MOBILE DEVICE */}
      <Link
        href="/"
        className={`text-[18px] flex items-center mb-2  space-x-2 px-5 md:hidden ${
          menuBar ? "hidden" : "block"
        }`}
      >
        <FaHome className="w-5 h-5" />
        <span>Home</span>
      </Link>
      {menus.map((menu) => (
        <div key={menu.href} className="">
          <div
            className={`md:w-[8%] lg:w-[16%] xl:w-[14%] pl-5 space-y-3 hidden md:block`}
          >
            {/* LARGE DEVICE RESPONSIVE BAR */}
            <Link href={menu.href} key={menu.title}>
              <div className="md:flex mt-8 items-center space-x-5">
                <span>{menu.icon}</span>
                <span className="text-[17px]">{menu.title}</span>
              </div>
            </Link>
          </div>
          {/* RESPONSIVE FOR MOBILE DEVICES  */}
          <div
            className={`${
              menuBar && "dropdown dropdown-bottom block"
            } md:hidden `}
          >
            <Link
              onClick={() => setMenuBar(true)}
              href={menu.href}
              key={menu.title}
            >
              <div className="flex dropdown-content p-1 space-x-2 pl-5 py-3 z-10 bg-white items-center">
                <span>{menu.icon}</span>
                <span className="text-[17px]">{menu.title}</span>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardBar;
