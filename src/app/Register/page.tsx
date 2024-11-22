"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface Input {
  email: string;
  name: string;
  password: string;
}
const RegisterPage: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = async (data) => {
    const res = await axios.post("/Register/api", { ...data });
    if (res?.data) {
      toast.success("Ok, Now Login please..");
      router.push("/Login");
    }
  };
  return (
    <div className="font-mFont lg:w-[1200px] mx-auto">
      <div className="flex justify-around lg:pt-36 md:pt-20 pt-10 lg:pb-16">
        {/** react form hooks started**/}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[330px] h-[50px] rounded-xl mb-[500px] md:mb-0"
        >
          <div className="space-y-8">
            <h1 className="text-center mt-2">Welcome to school</h1>
            <div className="flex items-center justify-around lg:w-72 w-64 mx-auto bg-[#dad7d7] py-2 rounded-full">
              <Link
                href="/Login"
                className={`lg:px-9 lg:py-[6px] px-6 py-1 rounded-full text-white ${
                  pathname === "/Login" && "bg-[#49BBBD]"
                }`}
              >
                Login
              </Link>
              <Link
                href="/Register"
                className={`lg:px-9 lg:py-[6px] px-6 py-1 rounded-full text-white ${
                  pathname === "/Register" && "bg-[#49BBBD]"
                }`}
              >
                Register
              </Link>
            </div>
          </div>
          <p className="pt-8 text-xs lg:text-[14px]">
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
                className="px-5 lg:py-2 py-1 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
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
                className="px-5 lg:py-2 py-1 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
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
                className="px-5 lg:py-2 py-1 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
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
            className="bg-[#49BBBD] rounded-full lg:px-14 lg:py-3 px-8 py-2 text-white mt-8 ml-[210px] lg:ml-[162px]"
          >
            Register
          </button>
        </form>
        {/** react form hooks end**/}

        {/** form image div started**/}
        <div className="hidden lg:block ">
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
