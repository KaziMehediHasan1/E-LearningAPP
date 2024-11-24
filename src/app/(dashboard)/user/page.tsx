"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

//DEFINE USERDATA RELATED TYPES
export type UserData = {
  _id: string;
  email: string;
  name: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
  _v: number;
  role?: string;
};
const User: React.FC = () => {
  const [users, setUsers] = useState<UserData[]>([]);

  //GET ALL USERS IN DB
  useEffect(() => {
    const GetUsers = async () => {
      try {
        const res = await axios.get("/Register/api");
        if (res.data && Array.isArray(res.data.getUser)) {
          setUsers(res.data.getUser);
        }
      } catch (error) {
        setUsers([]);
        console.error("Error fetching users:", error);
      }
    };
    GetUsers();
  }, []);

  // UPDATE USER ROLE
  const handleUserData = async (email: string, role: string) => {
    try {
      if (!email || !role) {
        toast.error("try again.");
        return;
      }
      const res = await axios.patch("/user/api", { email, role });
      if (res.data) {
        toast.success(`${role} role is updated.`);
      }
    } catch (error) {
      console.log(error);
      toast.error("Not updated role!");
    }
  };

  return (
    <div className="mt-10 md:w-[1400px] mx-auto border font-mFont pb-8 bg-cyan-700 ">
      <div className="grid grid-cols-7 text-center border-b border-r border-l items-center p-2">
        <p className="text-xl font-semibold text-gray-50">No</p>
        <p className="text-xl font-semibold text-gray-50">Name</p>
        <p className="text-xl font-semibold text-gray-50">Email</p>
        <p className="text-xl font-semibold text-gray-50">Photo</p>
        <p className="text-xl font-semibold text-gray-50">Role</p>
        <p className="text-xl font-semibold text-gray-50 col-span-2 text-center">
          Change Role
        </p>
      </div>
      {users.length > 0 ? (
        users.map((user, index) => (
          <div
            key={user._id}
            className="grid grid-cols-7 text-center space-y-4 mt-4 items-center text-white text-[17px]"
          >
            <p>{index + 1}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>

            <div className="w-12 mx-auto">
              <Image
                height={200}
                width={200}
                alt="profile"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                className="rounded-full"
              />
            </div>

            <p
              className={`text-black py-2 rounded-lg font-semibold capitalize ${
                user?.role === "teacher"
                  ? "bg-yellow-200"
                  : user?.role === "student"
                  ? "bg-blue-200"
                  : user?.role === "admin"
                  ? "bg-yellow-500"
                  : user?.role === "normal" && "bg-white"
              }`}
            >
              {user?.role || "No Role"}
            </p>

            <div className="flex items-center space-x-4 col-span-2 justify-center">
              <button
                disabled={user?.role === "student"}
                onClick={() => handleUserData(user?.email, "student")}
                className="bg-blue-500 px-4 btn btn-ghost rounded-lg py-2"
              >
                Student
              </button>
              <button
                disabled={user?.role === "teacher"}
                onClick={() => handleUserData(user?.email, "teacher")}
                className="bg-yellow-500 px-4 btn btn-ghost rounded-lg py-2"
              >
                Teacher
              </button>
              <button
                disabled={user?.role === "admin"}
                onClick={() => handleUserData(user?.email, "admin")}
                className={`bg-orange-500 px-4 btn btn-ghost rounded-lg py-2`}
              >
                Admin
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
};

export default User;
