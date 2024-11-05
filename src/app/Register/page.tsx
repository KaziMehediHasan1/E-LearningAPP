"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { SubmitHandler, useForm } from "react-hook-form";

interface Input {
  email: string;
  name: string;
  password: string;
}
const RegisterPage: React.FC = () => {
  const pathname = usePathname();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (data) => {
    console.log(data);
    // Here you would typically handle the login request
  };
  return (
    <div className="font-mFont w-[1200px] mx-auto m-36">
      <div className="flex justify-around ">
        {/** react form hooks started**/}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[330px] h-[50px] rounded-xl"
        >
          <div className="space-y-8">
            <h1 className="text-center mt-2">Welcome to school</h1>
            <div className="flex items-center justify-around w-72 mx-auto bg-[#dad7d7] py-2 rounded-full">
              <Link
                href="/Login"
                className={` px-9 py-[6px] rounded-full text-white ${
                  pathname === "/Login" && "bg-[#49BBBD]"
                }`}
              >
                Login
              </Link>
              <Link
                href="/Register"
                className={` px-9 py-[6px] rounded-full text-white ${
                  pathname === "/Register" && "bg-[#49BBBD]"
                }`}
              >
                Register
              </Link>
            </div>
          </div>
          <p className="pt-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="pt-8 flex flex-col space-y-6">
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                placeholder="Enter your email"
                type="email"
                {...register("email", { required: "email is required" })}
                className="px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700"
              >
                User Name
              </label>
              <input
                placeholder="Enter your User name"
                type="text"
                {...register("name", { required: "user name is required" })}
                className="px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
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
                {...register("password", { required: "password is required" })}
                className="px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
              />
              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>
           
          </div>

          <button
            type="submit"
            className="bg-[#49BBBD] rounded-full px-14 py-3 text-white mt-8 ml-[162px]"
          >
            Register
          </button>
        </form>
        {/** react form hooks end**/}

        {/** form image div started**/}
        <div>
          <Image
            height={200}
            width={200}
            className="w-[550px] h-[600px] rounded-xl"
            src="/images/register.jpg"
            alt="loginImage"
          />
        </div>
        {/** form image div end**/}
      </div>
    </div>
  );
};

export default RegisterPage;
