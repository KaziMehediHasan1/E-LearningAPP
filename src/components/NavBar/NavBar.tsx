"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

const NavBar = () => {
  const session = useSession();
  console.log(session);
  return (
    <div className="w-[1520px] mx-auto font-mFont">
      <div className="flex items-center justify-between py-5 px-6">
        <Link href="/" className="text-2xl font-semibold">
          LWM
        </Link>
        <div className="flex items-center space-x-12">
          <div className="space-x-6">
            <Link href="/">Home</Link>
            <Link href="/Courses">Courses</Link>
            <Link href="/Careers">Careers</Link>
            <Link href="/Blog">Blog</Link>
            <Link href="/About">About Us</Link>
          </div>
          <div className="space-x-5">
            <Link
              className="text-black bg-white rounded-full px-8 py-2 shadow-lg"
              href="/Login"
            >
              Login
            </Link>
            <Link
              className="text-white bg-cyan-300 rounded-full px-6 py-2 shadow-lg"
              href="/Register"
            >
              SignUp
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
