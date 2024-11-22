"use client";
import { signOut, useSession } from "next-auth/react";
import { SlMenu } from "react-icons/sl";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
const NavBar: React.FC = () => {
  //** use hook **//
  const [Bar, setBar] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const pathname = usePathname();
  const session = useSession();

  // Add bn-type effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //** handle get home route and LWM icon set style start **//
  let LWMicon: string;
  let homeRoute: string;
  let courseRoute: string;
  let dashboardRoute: string;
  let blogRoute: string;
  let aboutRoute: string;
  let loginRoute: string;
  let registerRoute: string;

  switch (true) {
    case scrolled && pathname === "/":
      LWMicon = "text-3xl font-semibold";

      break;
    case !scrolled:
      LWMicon = "text-3xl font-semibold text-white";
      break;
  }

  //** get home route and then set styles ---> start **//

  if (scrolled || pathname === "/") {
    homeRoute = "bg-cyan-500 rounded-full px-4 py-2 text-white";
    registerRoute = "text-white bg-cyan-300 rounded-full px-6 py-2 shadow-lg";
    loginRoute = "text-black bg-white rounded-full px-8 py-2 shadow-lg";
    if (!scrolled && pathname === "/") {
      courseRoute = "text-white";
      blogRoute = "text-white";
      dashboardRoute = "text-white";
      loginRoute = "text-black bg-white rounded-full px-8 py-2 shadow-lg";
      aboutRoute = "text-white";
      registerRoute = "text-white bg-cyan-300 rounded-full px-6 py-2 shadow-lg";
    }
  }

  //** get courses route and then set styles ---> start **//
  if (scrolled && pathname === "/courses") {
    courseRoute = "bg-cyan-500 rounded-full px-4 py-2 text-white";
    registerRoute = "text-white bg-cyan-300 rounded-full px-6 py-2 shadow-lg";
    homeRoute = "";
    loginRoute = "text-black bg-white rounded-full px-8 py-2 shadow-lg";
    LWMicon = "text-3xl font-semibold";
  } else if (!scrolled && pathname === "/courses") {
    courseRoute = "bg-cyan-500 rounded-full px-4 py-2 text-white";
    LWMicon = "text-3xl font-semibold";
    registerRoute = "text-white bg-cyan-300 rounded-full px-6 py-2 shadow-lg";
    loginRoute = "text-black bg-white rounded-full px-8 py-2 shadow-lg";
  }

  //** get blog route and then set styles ---> start **//
  if (scrolled && pathname === "/blog") {
    blogRoute = "bg-cyan-500 rounded-full px-4 py-2 text-white";
    homeRoute = "";
    registerRoute = "text-white bg-cyan-300 rounded-full px-6 py-2 shadow-lg";
    loginRoute = "text-black bg-white rounded-full px-8 py-2 shadow-lg";
    LWMicon = "text-3xl font-semibold";
  } else if (!scrolled && pathname === "/blog") {
    blogRoute = "bg-cyan-500 rounded-full px-4 py-2 text-white";
    LWMicon = "text-3xl font-semibold";
    registerRoute = "text-white bg-cyan-300 rounded-full px-6 py-2 shadow-lg";
    loginRoute = "text-black bg-white rounded-full px-8 py-2 shadow-lg";
  }

  //** get about route and then set styles ---> start **//
  if (scrolled && pathname === "/about") {
    aboutRoute = "bg-cyan-500 rounded-full px-4 py-2 text-white";
    homeRoute = "";
    loginRoute = "text-black bg-white rounded-full px-8 py-2 shadow-lg";
    registerRoute = "text-white bg-cyan-300 rounded-full px-6 py-2 shadow-lg";
    LWMicon = "text-3xl font-semibold";
  } else if (!scrolled && pathname === "/about") {
    loginRoute = "text-black bg-white rounded-full px-8 py-2 shadow-lg";
    aboutRoute = "bg-cyan-500 rounded-full px-4 py-2 text-white";
    registerRoute = "text-white bg-cyan-300 rounded-full px-6 py-2 shadow-lg";
    LWMicon = "text-3xl font-semibold";
  }

  //** get dashboard route and then set styles ---> start **//
  if (scrolled && pathname === "/dashboard") {
    dashboardRoute = "bg-cyan-500 rounded-full px-4 py-2 text-white";
    homeRoute = "";
    registerRoute = "text-white bg-cyan-300 rounded-full px-6 py-2 shadow-lg";
    loginRoute = "text-black bg-white rounded-full px-8 py-2 shadow-lg";
    LWMicon = "text-3xl font-semibold";
  } else if (!scrolled && pathname === "/dashboard") {
    dashboardRoute = "bg-cyan-500 rounded-full px-4 py-2 text-white";
    LWMicon = "text-3xl font-semibold";
    registerRoute = "text-white bg-cyan-300 rounded-full px-6 py-2 shadow-lg";
    loginRoute = "text-black bg-white rounded-full px-8 py-2 shadow-lg";
  }

  //** get login route and then set styles ---> start **//
  if (scrolled && pathname === "/Login") {
    loginRoute = "text-black bg-white rounded-full px-8 py-2 shadow-lg";
    homeRoute = "";
    LWMicon = "text-3xl font-semibold";
    registerRoute = "text-white bg-cyan-300 rounded-full px-6 py-2 shadow-lg";
  } else if (!scrolled && pathname === "/Login") {
    loginRoute = "text-black bg-white rounded-full px-8 py-2 shadow-lg";
    LWMicon = "text-3xl font-semibold";
    registerRoute = "text-white bg-cyan-300 rounded-full px-6 py-2 shadow-lg";
  }
  //** get register route and then set styles ---> start **//
  if (scrolled && pathname === "/Register") {
    registerRoute = "text-white bg-cyan-300 rounded-full px-6 py-2 shadow-lg";
    homeRoute = "";
    loginRoute = "text-black bg-white rounded-full px-8 py-2 shadow-lg";
    LWMicon = "text-3xl font-semibold";
  } else if (!scrolled && pathname === "/Register") {
    registerRoute = "text-white bg-cyan-300 rounded-full px-6 py-2 shadow-lg";
    loginRoute = "text-black bg-white rounded-full px-8 py-2 shadow-lg";
    LWMicon = "text-3xl font-semibold";
  }

  //** hidden path **//
  const hiddenPaths = [
    "/dashboard",
    "/add-blogs",
    "/all-course",
    "/teacher",
    "/all-blogs",
    "/review",
    "/profile",
    "/user",
  ];
  return (
    <div
      className={`lg:w-full  flex justify-between font-mFont ${
        hiddenPaths.includes(pathname) && "hidden"
      } `}
    >
      <div
        className={` bg-slate-600 w-full lg:hidden flex items-center justify-between px-5 pt-5 py-5 transition-all duration-500`}
      >
        <Link
          href="/"
          onClick={() => setBar(false)}
          className={`text-[20px] font-semibold border px-4 rounded ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          LWM
        </Link>
        <div className="flex items-center space-x-4 ">
          <section
            className={`${Bar == false ? "hidden bg-slate-400 " : "block  "}`}
          >
            <div>
              {/** Links inside the ul element **/}
              <ul
                className={`sm:absolute top-[70px] right-0 w-full  z-50 fixed bg-slate-100 h-screen flex flex-col gap-8 items-center py-8`}
              >
                <li>
                  <Link
                    className={`${
                      pathname === "/"
                        ? "bg-cyan-500 rounded-full px-2 py-1 text-white"
                        : "px-2 py-1"
                    }`}
                    href="/"
                    onClick={() => setBar(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      pathname === "/courses"
                        ? "bg-cyan-500 rounded-full px-2 py-1 text-white"
                        : "px-2 py-1"
                    }`}
                    href="/courses"
                    onClick={() => setBar(false)}
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      pathname === "/dashboard"
                        ? "bg-cyan-500 rounded-full px-2 py-1 text-white"
                        : "px-2 py-1"
                    }`}
                    href="/dashboard"
                    onClick={() => setBar(false)}
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      pathname === "/blog"
                        ? "bg-cyan-500 rounded-full px-2 py-1 text-white"
                        : "px-2 py-1"
                    }`}
                    href="/blog"
                    onClick={() => setBar(false)}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      pathname === "/about"
                        ? "bg-cyan-500 rounded-full px-2 py-1 text-white"
                        : "px-2 py-1"
                    }`}
                    href="/about"
                    onClick={() => setBar(false)}
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </section>
          {session.data && session.status === "authenticated" ? (
            <button
              className="text-black bg-white rounded-full px-4 py-2 lg:hidden shadow-lg"
              onClick={() => {
                signOut();
                setBar(false);
              }}
            >
              LogOut
            </button>
          ) : (
            <div className="space-x-5 lg:hidden block">
              <Link
                className=" bg-cyan-500 text-white rounded-full px-4 py-2 text-sm"
                href="/Login"
                onClick={() => setBar(false)}
              >
                Login
              </Link>
            </div>
          )}

          <div>
            <SlMenu
              size={20}
              onClick={() => setBar(true)}
              className={`${Bar == true ? "hidden" : "block"} ${
                !scrolled && "text-white"
              }`}
            />
            <IoCloseOutline
              className={`${
                Bar == false
                  ? "hidden"
                  : "block bg-slate-400 text-white rounded-full"
              }`}
              size={28}
              onClick={() => setBar(false)}
            />
          </div>
        </div>
      </div>

      {/** large device routes started **/}
      <div
        className={`flex items-center justify-between lg:py-5 lg:px-12 fixed z-50 transition-all duration-500 w-full ${
          scrolled && "bg-white shadow-lg"
        } `}
      >
        <Link href="/" className={`${LWMicon} lg:block hidden`}>
          LWM
        </Link>
        <div className="flex items-center space-x-12 ">
          <div className="space-x-8 hidden lg:block">
            <Link className={homeRoute} href="/">
              Home
            </Link>
            <Link className={`${courseRoute}`} href="/courses">
              Courses
            </Link>
            <Link className={`${blogRoute}`} href="/blog">
              Blog
            </Link>
            <Link className={`${dashboardRoute}`} href="/dashboard">
              Dashboard
            </Link>
            <Link className={`${aboutRoute}`} href="/about">
              About Us
            </Link>
          </div>
          {session.data && session.status === "authenticated" ? (
            <button
              className="text-black bg-white rounded-full px-8 py-2 hidden lg:block shadow-lg"
              onClick={() => signOut()}
            >
              LogOut
            </button>
          ) : (
            <div className="space-x-5 hidden lg:block">
              <Link className={`${loginRoute}`} href="/Login">
                Login
              </Link>
              <Link className={`${registerRoute}`} href="/Register">
                SignUp
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
