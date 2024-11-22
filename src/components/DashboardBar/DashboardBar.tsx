"use client";
import React, { useState } from "react";
import { ImBlog } from "react-icons/im";
import { FaReadme, FaPencilRuler } from "react-icons/fa";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiStudentThin } from "react-icons/pi";
import { GoCodeReview } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { CiMenuBurger } from "react-icons/ci";
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
  {
    icon: <IoIosLogOut className="md:w-7 md:h-7 w-5 h-5" />,
    title: "Logout",
    href: `() => signOut()`,
  },
];

//** conditionally show routes  **//

const DashboardBar = () => {
  const [menuBar, setMenuBar] = useState<boolean>(false);
  console.log(menuBar);
  return (
    <div className="space-y-8 p-4 md:p-0 font-mFont">
      <RiMenuFold4Fill
        onClick={() => setMenuBar(true)}
        className={`${menuBar ? "hidden" : "block"}  w-5 h-5 md:hidden block`}
      />
      <RiMenuFold3Fill
        onClick={() => setMenuBar(false)}
        className={`${menuBar ? "block" : "hidden"} w-5 h-5 md:hidden block`}
      />
      <Link href="/" className="flex items-center pl-3">
        <Image
          alt="logo"
          height={40}
          width={40}
          src="/images/logo.png"
         className="w-10 h-10"
        />
        <span className="text-[18px] px-3 pr-4  md:block hidden font-semibold">
          Learn With Mehedi
        </span>
      </Link>
      {menus.map((menu) => (
        <div key={menu.href}>
          <div className={`w-[12%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-1 pl-5 space-y-3 `}>
            <div className="space-x-3 space-y-8">
              
              <Link
                href={menu.href}
                key={menu.title}
                className="md:flex items-center gap-4 cursor-pointer hidden"
              >
                <span>{menu.icon}</span>
                <span className="text-[17px]">{menu.title}</span>
              </Link>

              {/* RESPONSIVE FOR MOBILE DEVICES  */}

              <Link href={menu.href} className={`flex items-center md:hidden`}>
                <span className={`${menuBar ? "block md:hidden" : "hidden"}`}>
                  {menu.icon}
                </span>
                <span
                  className={`text-[15px] ${
                    menuBar ? "block md:hidden" : "hidden"
                  }`}
                >
                  {menu.title}
                </span>
              </Link>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardBar;
