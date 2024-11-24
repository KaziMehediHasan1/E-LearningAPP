"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";

// ** input type**//
interface Input {
  email: string;
  password: string;
}
const LoginPage: React.FC = () => {
  const router = useRouter();
  const [pass, setPass] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();

  //GET ALL USERS IN DB
  useEffect(() => {
    const GetUsers = async () => {
      try {
        const res = await axios.get("/Register/api");
        if (res.data) {
          setPass(res.data.getUser);
        }
      } catch (error) {
        setPass([]);
        console.error("Error fetching users:", error);
      }
    };
    GetUsers();
     // Revalidate every 10 seconds
     const interval = setInterval(GetUsers, 10000);

     return () => clearInterval(interval);
  }, []);

  // login function
  const onSubmit: SubmitHandler<Input> = async (data) => {
    const email = data.email;
    const password = data.password;
    for (let matched of pass) {
      if (matched?.password !== password) {
        toast.error("Wrong Password");
        return;
      }
      if (matched?.email !== email) {
        toast.error("Wrong Email");
        return;
      }
      if (matched?.password === password) {
        const res = await signIn("credentials", {
          redirect: false,
          email,
          password,
        });
        if (res?.status) {
          toast.success("Successfully Login");
          router.push("/");
        }
        break;
      }
    }
  };

  return (
    <>
      <div className="font-mFont lg:w-[1200px] mx-auto mb-[420px] md:mb-0">
        <div className="flex justify-around p-4 lg:pt-36 pb-16 md:pt-10 pt-2">
          {/** form image div started**/}
          <div className="hidden lg:block">
            <Image
              height={200}
              width={200}
              className="w-[600px] h-[600px] rounded-xl"
              src="/images/login.jpg"
              alt="loginImage"
            />
          </div>
          {/** form image div end**/}

          {/** react form hooks started**/}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-[330px] h-[50px] rounded-xl"
          >
            <div className="space-y-5 pt-10">
              <h1 className="text-center">Welcome to school</h1>
              <div className="flex items-center justify-around lg:w-72 w-64 mx-auto bg-[#dad7d7] lg:py-2 py-1 rounded-full">
                <Link
                  href="/Login"
                  className="bg-[#49BBBD] lg:px-9 lg:py-[6px] px-6 py-1 rounded-full text-white"
                >
                  Login
                </Link>
                <Link
                  href="/Register"
                  className=" px-9 py-[6px] rounded-full text-white"
                >
                  Register
                </Link>
              </div>
            </div>
            <p className="pt-8 text-sm lg:text-[16px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="pt-8 flex flex-col space-y-6">
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700"
                >
                  User Email
                </label>
                <input
                  placeholder="Enter your User name"
                  type="email"
                  {...register("email", { required: "Mail is required" })}
                  className="px-5 lg:py-2 py-1 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  placeholder="Enter your password"
                  type="password"
                  {...register("password", {
                    required: "password is required",
                  })}
                  className="px-5 lg:py-2 py-1 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
                />
                {errors.password && (
                  <p className="text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="lg:w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <p className="lg:text-sm text-gray-700 text-xs">
                    Remember me
                  </p>
                </div>
                <p className="lg:text-sm hover:underline cursor-pointer text-xs">
                  Forgot Password?
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#49BBBD] rounded-full lg:px-16 lg:py-3 px-8 py-2 text-white mt-8 lg:ml-[162px] ml-[230px]"
            >
              Login
            </button>
          </form>
          {/** react form hooks end**/}
        </div>
      </div>
    </>
  );
};

export default LoginPage;
